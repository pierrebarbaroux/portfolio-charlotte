<template>
  <div id="app">
    <Preloader
      v-if="!isLoaded"
      :percentage="percentage"
    />
    <router-view v-if="isLoaded" />
  </div>
</template>

<script>
import Preloader from 'components/Preloader';
import Smooth from 'smooth-scrolling';
import createjs from 'preload-js';
import works from '../static/projects.json';

export default {
  components: {
    Preloader,
  },
  data() {
    return {
      assets: [],
      date: undefined,
      isLoaded: false,
      percentage: 0,
      smoothScroll: undefined,
    };
  },
  created() {
    this.date = new Date();
  },
  mounted() {
    this.getAssets();
    this.loadAssets();
  },
  updated() {
    if (this.smoothScroll) {
      this.smoothScroll.destroy();
      this.scrollInit();
    }
  },
  methods: {
    getAssets() {
      works.forEach((work) => {
        // Push landing images
        this.assets.push(work.landing);
        if (work.sections.length) {
          work.sections.forEach((section) => {
            if (section.assets.length) {
              section.assets.forEach((asset) => {
                // Push assets images/videos
                this.assets.push(asset.src);
              });
            }
          });
        }
      });
    },

    loadAssets() {
      if (this.assets.length) {
        const queue = new createjs.LoadQueue();
        queue.on('progress', this.onProgress);
        queue.on('complete', this.onComplete);
        queue.loadManifest(this.assets);
      }
    },

    onComplete(e) {
      if (this.percentage >= 99) {
        if (!this.isLoaded) this.isLoaded = true;
        setTimeout(() => {
          this.scrollInit();
        }, 100);
      }
    },

    onProgress(e) {
      const elapsed = (new Date() - this.date);
      const percentage = !isNaN(e.loaded) ? Math.round(e.loaded * 100) : 100;

      this.percentage = percentage + 1;

      if (elapsed > 1000) {
        this.date = new Date();
      }

      if (percentage >= 99) window.requestAnimationFrame(this.onProgress);
      else {
        window.cancelAnimationFrame(this.onProgress);
        this.onComplete(e);
      }
    },

    scrollInit() {
      const section = document.querySelector('.page');
      this.smoothScroll = new Smooth({
        native: false,
        preventTouch: true,
        section,
        ease: 0.05,
        vs: {
          touchMultiplier: 4,
          preventTouch: true,
        },
        preload: true,
        callback: (scrollY) => {
          const nav = document.querySelector('.nav');
          scrollY > 200 ? nav.classList.contains('collapsed') || nav.classList.add('collapsed') : nav.classList.remove('collapsed');
        },
      });
      setTimeout(() => {
        this.smoothScroll.init();
      });

      // Tricky fix for multiple scrollbars in production mode
      setTimeout(() => {
        const scrollbars = document.querySelectorAll('.vs-scrollbar.vs-vertical');
        if (scrollbars.length) {
          scrollbars.forEach((scrollbar, index) => {
            if (index + 1 !== scrollbars.length) scrollbar.parentNode.removeChild(scrollbar);
          });
        }
      }, 100);
    },

  },
};
</script>
