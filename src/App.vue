<template>
  <div v-if="opened">
    <div
      :class="`am-fomo-wrapper am-${
        parsedData.display ? parsedData.display.position : 'preview'
      }`"
      :style="positioning"
    >
      <FomoSignup
        v-if="fomoType == 'signup_bonus'"
        :close="closeFomo"
        :details="parsedData"
        :previewMode="previewMode"
        :user="user"
      ></FomoSignup>
      <!-- https://medium.com/@royprins/get-started-with-vue-web-components-593b3d5b3200 -->
      <!-- https://medium.com/tunaiku-tech/your-first-web-component-with-vue-js-3386cffc0b1f -->
    </div>
  </div>
</template>

<script>
const FomoSignup = () =>
  import(/* webpackChunkName: "signup" */ "./fomo/Signup.vue");
export default {
  name: "App",
  components: {
    FomoSignup,
  },
  props: {
    preview: String,
    id: String,
  },
  data: function () {
    return {
      data: null,
      fomoType: null,
      opened: false,
      previewMode: false,
      positioning: null,
      user: null,
    };
  },
  computed: {
    parsedData: function () {
      if (this.previewMode) return JSON.parse(this.preview);
      else return this.data;
    },
  },
  methods: {
    closeFomo: function () {
      this.opened = false;
    },
    setPositioning: function () {
      switch (this.data.display.position) {
        case "top-left":
          this.positioning = {
            left: `${this.data.display.horizontal}px`,
            top: `${this.data.display.vertical}px`,
          };
          break;
        case "top-right":
          this.positioning = {
            right: `${this.data.display.horizontal}px`,
            top: `${this.data.display.vertical}px`,
          };
          break;
        case "top-center":
          this.positioning = {
            left: `calc(50% + ${this.data.display.horizontal}px)`,
            top: `${this.data.display.vertical}px`,
          };
          break;
        case "bottom-left":
          this.positioning = {
            left: `${this.data.display.horizontal}px`,
            bottom: `${this.data.display.vertical}px`,
          };
          break;
        case "bottom-right":
          this.positioning = {
            right: `${this.data.display.horizontal}px`,
            bottom: `${this.data.display.vertical}px`,
          };
          break;
        case "bottom-center":
          this.positioning = {
            left: `calc(50% + ${this.data.display.horizontal}px)`,
            bottom: `${this.data.display.vertical}px`,
          };
          break;
        case "mid-left":
          this.positioning = {
            left: `${this.data.display.horizontal}px`,
            top: `calc(50% + ${this.data.display.horizontal}px)`,
          };
          break;
        case "mid-right":
          this.positioning = {
            right: `${this.data.display.horizontal}px`,
            top: `calc(50% + ${this.data.display.horizontal}px)`,
          };
          break;

        default:
          this.positioning = null;
          break;
      }
    },
    showAfterDelay: function () {
      setTimeout(() => (this.opened = true), this.data.display.seconds);
    },
    showAfterScroll: function () {
      if (this.data.display.scroll_percentage > 0) {
        const docHeight =
          document.documentElement.getBoundingClientRect().height;
        const winHeight = window.innerHeight;
        const checkScroll = () => {
          const scrollPercent = window.pageYOffset / (docHeight - winHeight);
          if (scrollPercent * 100 > this.data.display.scroll_percentage) {
            this.showAfterDelay();
            window.removeEventListener("scroll", checkScroll);
          }
        };
        window.addEventListener("scroll", checkScroll);
      } else {
        this.showAfterDelay();
      }
    },
    showOnlyOnFirst: function () {
      if (this.data.display.show_on_first_visit) {
        if (window.localStorage.getItem("fomo_first_visit") != 1) {
          window.localStorage.setItem("fomo_first_visit", 1);
          this.showAfterScroll();
        } else {
          console.warn("am-fomo blocked based on first visit flag");
        }
      } else {
        this.showAfterScroll();
      }
    },
    showOnlyTo: function (type) {
      if (type == "all") {
        this.showOnPages();
      } else if (type == "signed" && this.data.user.id) {
        this.showOnPages();
      } else if (type == "unsigned" && this.data.user == null) {
        this.showOnPages();
      } else {
        console.warn("am-fomo blocked based on user");
      }
    },
    showOnPages: function () {
      if (this.data.display.show_on_home_page) {
        let currentUrl = window.location.href;
        currentUrl = currentUrl.replace(window.location.search, "");
        let siteDomain = currentUrl; ///Hence we didnt get the config yet

        if (currentUrl == siteDomain) {
          this.showOnCountries();
        }
      } else if (`${this.data.display.show_on_pages}`.length) {
        this.showOnCountries();
      } else {
        this.showOnCountries();
        console.warn("am-fomo blocked based on pages");
      }
    },
    showOnCountries: function () {
      if (this.data.display.allowed_countries.length) {
        const ip_country = window.localStorage.getItem("gr_ip_country");
        if (ip_country != null) {
          this.data.display.allowed_countries.forEach(function (v, k) {
            this.data.display.allowed_countries[k] = v.toLowerCase();
          });
          if (this.data.display.allowed_countries.indexOf(ip_country) != -1) {
            this.showOnlyOnFirst();
          }
        }
      } else {
        this.showOnlyOnFirst();
      }
    },
  },
  mounted: function () {
    if (this.preview) {
      this.previewMode = true;
      this.fomoType = JSON.parse(this.preview).type;
      this.opened = true;
    } else {
      fetch(
        `https://logesh.devam.pro/gr/services/v2/fomo/signupBonus/${this.id}?id_service=4598`
      )
        .then((res) => res.json())
        .then(({ data }) => {
          this.fomoType = data.type;
          this.data = data.attributes;
          this.user = data.user;
          this.setPositioning();
          this.showOnlyTo(this.data.display.visible_to);
        });
    }
  },
};
</script>

<style lang="less">
.am-fomo-wrapper {
  position: fixed;
  &.am-preview {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.am-bottom-left {
    left: 0;
    bottom: 0;
  }
  &.am-bottom-center {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
  &.am-bottom-right {
    right: 0;
    bottom: 0;
  }
  &.am-top-left {
    left: 0;
    top: 0;
  }
  &.am-top-center {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  &.am-top-right {
    right: 0;
    top: 0;
  }
  &.am-mid-left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &.am-mid-right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .ql-size-small {
    font-size: 0.7em;
  }
  .ql-size-large {
    font-size: 1.3em;
  }
  .ql-size-huge {
    font-size: 1.7em;
  }
}
</style>
