<template>
  <div
    class="amfm__fomoSignup"
    :style="{
      '--border-color': dKeys.border_color,
      '--bg-color-1': dKeys.bg_grad_1,
      '--bg-color-2': dKeys.bg_grad_2,
      '--btn-color': dKeys.btn_color,
    }"
  >
    <div class="amfm__fomoSignup_Close" onclick="closeModal()">
      <span>&times;</span>
    </div>
    <section class="amfm__fomoSignup_step step2" v-if="screen == 'after_login'">
      <section class="amfm__fomoSignup_particles">
        <span><i></i></span> <span><i></i></span> <span><i></i></span>
        <span><i></i></span>
      </section>
      <div class="amfm__fomoSignup_title" v-html="dKeys.congrats_title"></div>
      <div class="amfm__fomoSignup_desc" v-html="dKeys.congrats_txt"></div>
      <div v-if="this.user.attributes.bonus['coupon'].length">
        <div class="amfm__fomoSignup_button viewDashboard">View Dashboard</div>
        <div class="amfm__fomoSignup_button">Continue Shopping</div>
      </div>
    </section>
    <section class="amfm__fomoSignup_step step1" v-else>
      <div class="amfm__fomoSignup_desc" v-html="dKeys.title"></div>
      <aside class="amfm__fomoSignup_content">
        <div class="amfm__fomoSignup_points">
          <span><strong>100</strong> Welcome Points</span>
        </div>
        <div class="amfm__fomoSignup_coupon">
          <span><strong>20%</strong> off Coupon</span>
        </div>
      </aside>
      <div>
        <a
          class="amfm__fomoSignup_button"
          :href="dKeys.btn_url"
          v-html="dKeys.btn_text"
        >
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ThemeThree",
  props: ["iData", "close", "screen", "user"],
  computed: {
    dKeys: function () {
      return this.iData.template.settings;
    },
  },
  mounted: function () {
    // console.log(this.iData);
  },
};
</script>
<style scoped lang="less">
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.amfm__fomoSignup {
  position: relative;
  font-family: Arial, sans-serif;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 260px;
  height: 260px;
  padding: 0 20px;
  color: #fff;
  font-size: 10px;
  line-height: 1.4;
  background: var(--border-color);
  border-radius: 50%;
  transition: 0.2s ease;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}
.amfm__fomoSignup:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 50%;
  background: linear-gradient(-25deg, var(--bg-color-1), var(--bg-color-2));
  -webkit-transform: translate(-50%, -50%) rotate(0);
  transform: translate(-50%, -50%) rotate(0);
}
@keyframes gradientRotate {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(-270deg);
    transform: translate(-50%, -50%) rotate(-270deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
}
@keyframes growBig {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  30% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
:root([display="modal"]) .amfm__fomoSignup {
  position: fixed;
  bottom: 70px;
  left: 50px;
  z-index: 101;
  opacity: 0;
  pointer-events: none;
}
.amfm__fomoSignup {
  opacity: 1;
  pointer-events: all;
  -webkit-animation: growBig 0.75s cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
  animation: growBig 0.75s cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
}
.amfm__fomoSignup:before {
  -webkit-animation: gradientRotate 1s ease 0.75s both;
  animation: gradientRotate 1s ease 0.75s both;
}
.amfm__fomoSignup_Close {
  position: absolute;
  top: 20px;
  right: -30px;
  z-index: 1;
  width: 1.2em;
  height: 1.2em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 2.4em;
  cursor: pointer;
  -webkit-animation: justFade 0.5s linear 1s both;
  animation: justFade 0.5s linear 1s both;
}
.amfm__fomoSignup_Close:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 50%;
  -webkit-transform: translate(50%, -50%) scale(1);
  transform: translate(50%, -50%) scale(1);
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 1px solid;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
.amfm__fomoSignup_Close span {
  position: relative;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
.amfm__fomoSignup_Close:hover:before {
  -webkit-transform: translate(50%, -50%) scale(1.25);
  transform: translate(50%, -50%) scale(1.25);
}
.amfm__fomoSignup_Close:hover span {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
:root([display="modal"]) .amfm__fomoSignup_Close {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.amfm__fomoSignup_step {
  position: relative;
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  line-height: 1.3;
}
.amfm__fomoSignup_step > div {
  -webkit-animation: slideUp 0.3s ease-out both;
  animation: slideUp 0.3s ease-out both;
}
.amfm__fomoSignup_step > div:nth-child(1) {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}
.amfm__fomoSignup_step > div:nth-child(2) {
  -webkit-animation-delay: 0.82s;
  animation-delay: 0.82s;
}
.amfm__fomoSignup_step > div:nth-child(3) {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
.amfm__fomoSignup_step > div:nth-child(4) {
  -webkit-animation-delay: 0.97s;
  animation-delay: 0.97s;
}
.amfm__fomoSignup_step > div:nth-child(5) {
  -webkit-animation-delay: 1.05s;
  animation-delay: 1.05s;
}
.amfm__fomoSignup_title {
  font-size: 1.6em;
  margin-bottom: 10px;
}
.amfm__fomoSignup_desc {
  font-size: 1.4em;
  margin-bottom: 14px;
  color: #fff;
  padding: 0 25px;
}
.amfm__fomoSignup_content {
  position: absolute;
  bottom: 0;
  left: calc(100% - 15px);
  z-index: -1;
  width: 125px;
  height: 125px;
  padding: 10px;
  font-size: 1.4em;
  line-height: 1.2;
  display: none;
}
.amfm__fomoSignup_content strong {
  font-size: 180%;
  font-weight: 700;
  display: block;
}
.amfm__fomoSignup_content:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffbecb),
    to(#ff4b74)
  );
  background: linear-gradient(180deg, #ffbecb, #ff4b74);
  -webkit-box-shadow: 0 30px 50px rgba(255, 75, 116, 0.4);
  box-shadow: 0 30px 50px rgba(255, 75, 116, 0.4);
}
:root([offer="coupon"]) .amfm__fomoSignup_content,
:root([offer="points"]) .amfm__fomoSignup_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.amfm__fomoSignup_content {
  -webkit-animation: smallCircle 0.35s ease-out 0.6s both;
  animation: smallCircle 0.35s ease-out 0.6s both;
}
.amfm__fomoSignup_content > div {
  -webkit-animation: keepMoving 0.75s linear 1.5s infinite both;
  animation: keepMoving 0.75s linear 1.5s infinite both;
}
.amfm__fomoSignup_content > div span {
  -webkit-animation: justFade 0.35s linear 0.8s both;
  animation: justFade 0.35s linear 0.8s both;
}
@-webkit-keyframes keepMoving {
  0%,
  100%,
  50% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, -5px);
    transform: translate(0, -5px);
  }
}
@keyframes keepMoving {
  0%,
  100%,
  50% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, -5px);
    transform: translate(0, -5px);
  }
}
@-webkit-keyframes justFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes justFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes smallCircle {
  0% {
    opacity: 0;
    -webkit-transform: translate(-20px, -20px);
    transform: translate(-20px, -20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes smallCircle {
  0% {
    opacity: 0;
    -webkit-transform: translate(-20px, -20px);
    transform: translate(-20px, -20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.amfm__fomoSignup_coupon,
.amfm__fomoSignup_points {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 14px;
  text-align: center;
  border-radius: 50%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#7153a1),
    to(#4e3d9a)
  );
  background: linear-gradient(90deg, #7153a1, #4e3d9a);
}
:root([offer="points"]) .amfm__fomoSignup_coupon {
  display: none;
}
:root([offer="coupon"]) .amfm__fomoSignup_points {
  display: none;
}
.amfm__fomoSignup_button {
  display: inline-block;
  min-width: 100px;
  font-size: 1.4em;
  line-height: 2.4em;
  text-align: center;
  padding: 0 14px;
  cursor: pointer;
  border-radius: 1.1em;
  color: #7153a1;
  background-color: #fff;
  -webkit-transition: 0.18s;
  transition: 0.18s;
  will-change: transform;
  text-decoration: none;
}
.amfm__fomoSignup_button:hover {
  font-weight: 700;
  -webkit-box-shadow: 0 0 0 2px #fff inset, 2px 2px 0 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0 2px #fff inset, 2px 2px 0 2px rgba(0, 0, 0, 0.2);
}
.amfm__fomoSignup_button:active {
  -webkit-transform: translateY(-2px) scale(0.96);
  transform: translateY(-2px) scale(0.96);
}
.amfm__fomoSignup_button.viewDashboard {
  display: none;
}
:root([gr="true"]) .amfm__fomoSignup_button.viewDashboard {
  display: inline-block;
}
:root([gr="true"]) .step2 .amfm__fomoSignup_button:last-child {
  cursor: pointer;
  color: #fff;
  margin-top: 10px;
  text-decoration: underline;
  font-size: 1.6em;
  background: 0 0;
  opacity: 0.9;
}
:root([gr="true"]) .step2 .amfm__fomoSignup_button:last-child:hover {
  opacity: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.step1 .amfm__fomoSignup_button {
  color: #fff;
  background-color: var(--btn-color);
}
.amfm__fomoSignup_particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.amfm__fomoSignup_particles span {
  position: absolute;
  top: 0;
  left: 0;
}
.amfm__fomoSignup_particles span i {
  display: block;
  -webkit-animation: throwParticle 1.4s linear both;
  animation: throwParticle 1.4s linear both;
}
.amfm__fomoSignup_particles span i:before {
  content: "";
  display: block;
  width: 64px;
  height: 44px;
  background:  url('https://maverickmav.org/ui/fomo-template/images/star-sprite1.png') 0 0 no-repeat;
  -webkit-animation: starSprite 1.4s steps(28) both;
  animation: starSprite 1.4s steps(28) both;
}
.amfm__fomoSignup_particles span:nth-child(1) i,
.amfm__fomoSignup_particles span:nth-child(1) i:before {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.amfm__fomoSignup_particles span:nth-child(2) {
  top: 20%;
  left: 60%;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.amfm__fomoSignup_particles span:nth-child(2) i {
  -webkit-animation-name: throwParticleOpp;
  animation-name: throwParticleOpp;
}
.amfm__fomoSignup_particles span:nth-child(2) i,
.amfm__fomoSignup_particles span:nth-child(2) i:before {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.amfm__fomoSignup_particles span:nth-child(3) {
  top: 50%;
  left: -10%;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
}
.amfm__fomoSignup_particles span:nth-child(3) i,
.amfm__fomoSignup_particles span:nth-child(3) i:before {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}
.amfm__fomoSignup_particles span:nth-child(4) {
  top: 40%;
  left: 80%;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.amfm__fomoSignup_particles span:nth-child(4) i {
  -webkit-animation-name: throwParticleOpp;
  animation-name: throwParticleOpp;
}
.amfm__fomoSignup_particles span:nth-child(4) i,
.amfm__fomoSignup_particles span:nth-child(4) i:before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes throwParticle {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 50px) rotate(0);
    transform: translate(0, 50px) rotate(0);
  }
  15%,
  80% {
    opacity: 1;
    -webkit-transform: translate(10px, -30px) rotate(45deg);
    transform: translate(10px, -30px) rotate(45deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translate(10px, -30px) rotate(135deg);
    transform: translate(10px, -30px) rotate(135deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(10px, 15px) rotate(180deg);
    transform: translate(10px, 15px) rotate(180deg);
  }
}
@keyframes throwParticle {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 50px) rotate(0);
    transform: translate(0, 50px) rotate(0);
  }
  15%,
  80% {
    opacity: 1;
    -webkit-transform: translate(10px, -30px) rotate(45deg);
    transform: translate(10px, -30px) rotate(45deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translate(10px, -30px) rotate(135deg);
    transform: translate(10px, -30px) rotate(135deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(10px, 15px) rotate(180deg);
    transform: translate(10px, 15px) rotate(180deg);
  }
}
@-webkit-keyframes throwParticleOpp {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 50px) rotate(0);
    transform: translate(0, 50px) rotate(0);
  }
  15%,
  80% {
    opacity: 1;
    -webkit-transform: translate(-10px, -30px) rotate(45deg);
    transform: translate(-10px, -30px) rotate(45deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translate(-10px, -30px) rotate(135deg);
    transform: translate(-10px, -30px) rotate(135deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(-10px, 15px) rotate(180deg);
    transform: translate(-10px, 15px) rotate(180deg);
  }
}
@keyframes throwParticleOpp {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 50px) rotate(0);
    transform: translate(0, 50px) rotate(0);
  }
  15%,
  80% {
    opacity: 1;
    -webkit-transform: translate(-10px, -30px) rotate(45deg);
    transform: translate(-10px, -30px) rotate(45deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translate(-10px, -30px) rotate(135deg);
    transform: translate(-10px, -30px) rotate(135deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(-10px, 15px) rotate(180deg);
    transform: translate(-10px, 15px) rotate(180deg);
  }
}
@-webkit-keyframes starSprite {
  0% {
    background-position: 0 0;
  }
  100%,
  60% {
    background-position: -1792px 0;
  }
}
@keyframes starSprite {
  0% {
    background-position: 0 0;
  }
  100%,
  60% {
    background-position: -1792px 0;
  }
}
@-webkit-keyframes slideUp {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideUp {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes slideLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.amfm__fomoSignup_button {
  animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
