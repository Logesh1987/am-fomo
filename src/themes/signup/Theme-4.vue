<template>
  <div
    class="amfm__fomoSignup"
    :style="{
      '--bg-color': dKeys.background_color,
      '--btn-color': dKeys.btn_color,
    }"
  >
    <div class="amfm__fomoSignup_Close" onclick="closeModal();">
      <span>&times;</span>
    </div>
    <section class="amfm__fomoSignup_step step2" v-if="screen == 'after_login'">
      <section class="amfm__fomoSignup_particles">
        <span><i></i></span> <span><i></i></span> <span><i></i></span>
        <span><i></i></span>
      </section>
      <div class="amfm__fomoSignup_title" v-html="dKeys.congrats_title"></div>
      <div class="amfm__fomoSignup_desc" v-html="dKeys.congrats_txt"></div>
      <div>
        <div class="amfm__fomoSignup_button viewDashboard">View Dashboard</div>
        <div class="amfm__fomoSignup_button">Continue Shopping</div>
      </div>
    </section>
    <section class="amfm__fomoSignup_step step1" v-else>
      <div class="amfm__fomoSignup_desc" v-html="dKeys.title"></div>
      <aside class="amfm__fomoSignup_content">
        <svg><rect rx="15" ry="15" /></svg>
        <div class="amfm__fomoSignup_points">
          <span>100</span> Welcome Points
        </div>
        <div class="amfm__fomoSignup_coupon"><span>20%</span> off Coupon</div>
      </aside>
      <div>
        <a
          :href="dKeys.btn_url"
          class="amfm__fomoSignup_button"
          v-html="dKeys.btn_text"
        ></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ThemeFour",
  props: ["iData", "close", "screen"],
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
:host {
  --bg-color: #ab0012;
  --btn-color: #f3e374;
}
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
  width: 360px;
  min-height: 180px;
  padding: 20px 30px;
  color: #fff;
  font-size: 10px;
  line-height: 1.4;
  background-color: var(--bg-color);
  border-radius: 22px;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  overflow: hidden;
}
.amfm__fomoSignup:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  width: 100%;
  height: 100%;
  background: url(https://maverickmav.org/ui/fomo-template/images/sharp-pattern.png) bottom center no-repeat;
  background-size: cover;
}
@-webkit-keyframes growBig {
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
@-webkit-keyframes shrinkIn {
  0% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes shrinkIn {
  0% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
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
:root([display="modal"]) .amfm__fomoSignup {
  position: fixed;
  bottom: 100px;
  left: 30px;
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
  -webkit-animation: shrinkIn 0.75s ease 0.5s both;
  animation: shrinkIn 0.75s ease 0.5s both;
}
.amfm__fomoSignup_Close {
  position: absolute;
  top: 0.4em;
  right: 0.4em;
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
  color: #333;
  font-size: 2.4em;
  cursor: pointer;
}
.amfm__fomoSignup_Close:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 50%;
  -webkit-transform: translate(50%, -55%) scale(1);
  transform: translate(50%, -55%) scale(1);
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #fff;
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
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
.amfm__fomoSignup_Close {
  -webkit-animation: justFade 0.5s linear 1s both;
  animation: justFade 0.5s linear 1s both;
}
.amfm__fomoSignup_step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}
.amfm__fomoSignup_step > * {
  -webkit-animation: slideUp 0.3s ease-out 1s both;
  animation: slideUp 0.3s ease-out 1s both;
}
.amfm__fomoSignup_step > :nth-child(1) {
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s;
}
.amfm__fomoSignup_step > :nth-child(2) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}
.amfm__fomoSignup_step > :nth-child(3) {
  -webkit-animation-delay: 1.3s;
  animation-delay: 1.3s;
}
.amfm__fomoSignup_step > :nth-child(4) {
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
}
.amfm__fomoSignup_step > :nth-child(5) {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.amfm__fomoSignup_title {
  font-size: 1.8em;
  font-weight: 700;
  margin-bottom: 0.4em;
}
.amfm__fomoSignup_desc {
  font-size: 1.6em;
  margin-bottom: 1em;
}
.amfm__fomoSignup_content {
  position: relative;
  width: 100%;
  padding: 15px 10px;
  display: none;
  font-size: 1.6em;
  line-height: 1.2;
  margin-bottom: 1em;
}
.amfm__fomoSignup_content > div {
  position: relative;
  color: var(--btn-color);
}
.amfm__fomoSignup_content rect,
.amfm__fomoSignup_content svg {
  height: 100%;
}
.amfm__fomoSignup_content svg {
  position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
}
.amfm__fomoSignup_content rect {
  width: 100%;
  fill: rgba(0, 0, 0, 0.24);
  stroke: #fff;
  stroke-width: 3px;
  stroke-dasharray: 5px 5px;
  -webkit-animation: svgBox 0.5s linear infinite both;
  animation: svgBox 0.5s linear infinite both;
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
.all .amfm__fomoSignup_content:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 2px;
  bottom: 2px;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(50%, #fff),
    color-stop(50%, transparent)
  );
  background: linear-gradient(to bottom, #fff 50%, transparent 50%);
  background-size: auto 10px;
}
.all .amfm__fomoSignup_coupon,
.all .amfm__fomoSignup_points {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 5px;
}
:root([offer="points"]) .amfm__fomoSignup_coupon {
  display: none;
}
:root([offer="coupon"]) .amfm__fomoSignup_points {
  display: none;
}
.amfm__fomoSignup_button {
  display: block;
  width: auto;
  min-width: 150px;
  font-size: 1.6em;
  color: var(--bg-color);
  line-height: 2.8em;
  padding: 0 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 1.5em;
  background-color: var(--btn-color);
  -webkit-box-shadow: 2px 2px 0 2px transparent;
  box-shadow: 2px 2px 0 2px transparent;
  -webkit-transition: 0.18s;
  transition: 0.18s;
  text-decoration: none;
  will-change: transform;
}
.amfm__fomoSignup_button:hover {
  background-color: #fff;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
  -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
}
.amfm__fomoSignup_button:active {
  -webkit-transform: translateY(-2px) scale(0.96);
  transform: translateY(-2px) scale(0.96);
}
:root([gr="true"]) .step2 .amfm__fomoSignup_button:last-child {
  cursor: pointer;
  color: #fff;
  text-decoration: underline;
  font-size: 1.6em;
  background: 0 0;
  opacity: 0.9;
}
:root([gr="true"]) .step2 .amfm__fomoSignup_button:last-child:hover {
  opacity: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transform: none;
  transform: none;
}
.amfm__fomoSignup_button.viewDashboard {
  display: none;
}
:root([gr="true"]) .amfm__fomoSignup_button.viewDashboard {
  display: block;
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
@-webkit-keyframes svgBox {
  0% {
    stroke-dashoffset: 0;
    fill: rgba(0, 0, 0, 0.2);
  }
  50% {
    fill: rgba(0, 0, 0, 0.1);
  }
  100% {
    fill: rgba(0, 0, 0, 0.2);
  }
  100%,
  50% {
    stroke-dashoffset: -5px;
  }
}
@keyframes svgBox {
  0% {
    stroke-dashoffset: 0;
    fill: rgba(0, 0, 0, 0.2);
  }
  50% {
    fill: rgba(0, 0, 0, 0.1);
  }
  100% {
    fill: rgba(0, 0, 0, 0.2);
  }
  100%,
  50% {
    stroke-dashoffset: -5px;
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
@-webkit-keyframes slideDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
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
