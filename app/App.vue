<template>
  <div id="app">
    <Preloader
      v-if="loading"
    />
    <router-view />
  </div>
</template>

<script>
import Preloader from 'components/Preloader';
import {
  TweenMax, Power1, ScrollToPlugin,
} from 'gsap/all';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import Smooth from 'smooth-scrolling';

const plugins = [ScrollToPlugin];

export default {
  components: {
    Preloader,
  },
  data() {
    return {
      loading: false,
      smooth: undefined,
    };
  },
  mounted() {
    this.scrollInit();
  },
  updated() {
    if (this.smooth) {
      this.smooth.destroy();
      this.scrollInit();
    }
  },
  methods: {
    scrollInit() {
      const section = document.querySelector('.page');
      this.smooth = new Smooth({
        native: false,
        preventTouch: true,
        section,
        ease: 0.05,
        vs: {
          touchMultiplier: 4,
          preventTouch: true,
        },
        preload: true,
      });
      this.smooth.init();
    },
    scrollToElem: (e) => {
      const targetScroll = e.target.dataset.scroll;
      TweenMax.to(window, 1, { scrollTo: document.querySelector(`.${targetScroll}`), ease: Power1.easeOut });
    },
  },
};
</script>
