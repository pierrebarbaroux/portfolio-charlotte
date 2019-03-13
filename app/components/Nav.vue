<template>
  <nav class="nav js-nav">
    <p class="nav__left">
      <router-link to="/">
        Cha.
      </router-link>
    </p>
    <div class="nav__right">
      <ul>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { TimelineMax, Power3 } from 'gsap';
import ScrollMagic from 'scrollmagic';

const timeline = new TimelineMax({
  onComplete: () => {
    timeline.kill();
  },
});

export default {
  created() {
    this.animInNav();
  },
  updated() {
    this.animInNav();
  },
  mounted() {
    this.animInNav();
  },
  methods: {
    animInNav: () => {
      const nav = document.querySelector('.js-nav');
      const waitTime = 1.3;
      timeline.fromTo(nav, 1.5,
        { autoAlpha: 0, y: -30 },
        { autoAlpha: 1, y: 0, ease: Power3.easeInOut }, waitTime);
    },
  },
};
</script>
