<template>
  <div id="app">
    <Preloader
      v-if="loading"
    />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Preloader from 'components/Preloader';
import {
  TweenMax, Power1, Power3, ScrollToPlugin,
} from 'gsap/all';
import ScrollMagic from 'scrollmagic';
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
    };
  },
  mounted() {
    this.scrollInit();

    // setTimeout(() => {
    //   this.loading = false;
    // }, 800);
  },
  methods: {
    scrollInit() {
      const section = document.querySelector('.page');
      const smooth = new Smooth({
        native: true,
        section,
        preload: false,
        preventTouch: false,
        ease: 0.1,
        vs: {
          touchMultiplier: 4,
        },
      });
      smooth.init();
    },
    scrollToElem: (e) => {
      const targetScroll = e.target.dataset.scroll;
      TweenMax.to(window, 1, { scrollTo: document.querySelector(`.${targetScroll}`), ease: Power1.easeOut });
    },
  },
};
</script>
