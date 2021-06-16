<template>
  <div>
    <ThemeOne
      :iData="details"
      :user="user"
      :screen="screen"
      :close="close"
      v-if="details.id_template == 1"
    ></ThemeOne>
    <ThemeTwo
      :iData="details"
      :user="user"
      :screen="screen"
      :close="close"
      v-if="details.id_template == 2"
    ></ThemeTwo>
    <ThemeThree
      :iData="details"
      :user="user"
      :screen="screen"
      :close="close"
      v-if="details.id_template == 3"
    ></ThemeThree>
    <ThemeFour
      :iData="details"
      :user="user"
      :screen="screen"
      :close="close"
      v-if="details.id_template == 4"
    ></ThemeFour>
  </div>
</template>

<script>
const ThemeOne = () =>
  import(
    /* webpackChunkName: "signup-theme-1" */ "@/themes/signup/Theme-1.vue"
  );
const ThemeTwo = () =>
  import(
    /* webpackChunkName: "signup-theme-2" */ "@/themes/signup/Theme-2.vue"
  );
const ThemeThree = () =>
  import(
    /* webpackChunkName: "signup-theme-3" */ "@/themes/signup/Theme-3.vue"
  );
const ThemeFour = () =>
  import(
    /* webpackChunkName: "signup-theme-4" */ "@/themes/signup/Theme-4.vue"
  );
export default {
  name: "FomoSignup",
  components: { ThemeOne, ThemeTwo, ThemeThree, ThemeFour },
  props: ["details", "close", "previewMode", "user"],
  data: function () {
    return {
      showScreen: "before_login",
    };
  },
  computed: {
    screen: function () {
      if (this.previewMode) return this.details.show_screen;
      else return this.showScreen;
    },
  },
  mounted: function() {
    if(this.user.id) this.showScreen = 'after_login'
  }
};
</script>
<style scoped lang="less"></style>
