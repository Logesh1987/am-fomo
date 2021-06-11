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
      console.log(this.preview);
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
      const docHeight = document.documentElement.getBoundingClientRect().height;
      const winHeight = window.innerHeight;
      const checkScroll = () => {
        const scrollPercent = window.pageYOffset / (docHeight - winHeight);
        if (scrollPercent * 100 > this.data.display.scroll_percentage) {
          this.opened = true;
          window.removeEventListener("scroll", checkScroll);
        }
      };
      window.addEventListener("scroll", checkScroll);
    },
    showOnlyOnFirst: function () {
      if (window.localStorage.get("fomo_first_visit") != 1) {
        window.localStorage.set("fomo_first_visit", 1);
        this.opened = true;
      }
    },
    showOnlyTo: function (type) {
      if (type == "all") {
        //  move to next
      } else if (type == "signed" && this.data.user.id) {
        //  move to next
      } else if (type == "unsigned" && this.data.user == null) {
        //  move to next
      }
    },
    showOnPages: function () {
      if(this.data.display.show_on_home_page) {
        let currentUrl = window.location.href;
        currentUrl = currentUrl.replace(window.location.search, '');
        let siteDomain = currentUrl; ///Hence we diodnt get the config yet

         if (currentUrl == siteDomain) {
          //  move to next
         }
      } else if(`${this.data.display.show_on_pages}`.length){
        // move to next
      }
    },
    showOnCountries: function (allowed_countries) {
      if(allowed_countries.length) {
        const ip_country = window.localStorage.get("gr_ip_country");
        if (ip_country != null) {
          allowed_countries.forEach(function (v, k) {
            allowed_countries[k] = v.toLowerCase();
          });
          if (allowed_countries.indexOf(ip_country) != -1) {
            //  move to next
          }
        }
      } else {
        //  move to next
      }
    },
    openFomo: function () {
      if (this.data.display.scroll_percentage) {
        this.showAfterScroll();
      } else if (this.data.display.seconds) {
        this.showAfterDelay();
      } else if (this.show_on_first_visit) {
        this.showOnlyOnFirst();
      } else {
        this.opened = true;
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
          if (this.data.display.visible_to == "all") {
            this.openFomo();
          } else if (this.data.display.visible_to == "signed" && data.user.id) {
            this.openFomo();
          } else if (
            this.data.display.visible_to == "unsigned" &&
            data.user == null
          )
            this.openFomo();
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
}
</style>
