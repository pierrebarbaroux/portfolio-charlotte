<template>
  <nav class="nav">
    <p class="nav__left">
      <router-link
        to="/"
        title="Charlotte Sieess"
      >
        Cha.
      </router-link>
    </p>
    <div class="nav__right">
      <ul>
        <li>
          <router-link
            to="/about"
            title="About"
          >
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { TimelineMax, Power3 } from 'gsap';

export default {
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    isLoaded() {
      this.animInNav();
    },
  },
  mounted() {
    if (this.isLoaded) {
      this.animInNav();
    }
  },
  methods: {
    animInNav: () => {
      const timeline = new TimelineMax({
        onComplete: () => {
          timeline.kill();
        },
      });

      const nav = document.querySelector('.nav');
      const waitTime = 0.3;
      timeline.fromTo(nav, 1.5,
        { autoAlpha: 0, y: -30 },
        { autoAlpha: 1, y: 0, ease: Power3.easeInOut }, waitTime);
    },
  },
};
</script>
