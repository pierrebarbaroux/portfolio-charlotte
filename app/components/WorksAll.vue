<template>
  <div class="works">
    <div
      v-for="work in works"
      :key="work.slug"
      class="work"
    >
      <router-link
        :to="`/works/${work.slug}`"
        :aria-label="`${work.title}`"
        :title="`${work.title}`"
      >
        <div class="work__image">
          <img
            :src="work.landing"
            :alt="`${work.title} landing image`"
          >
        </div>
      </router-link>

      <div class="work__content">
        <div class="work__content-container">
          <div class="work__type">
            {{ work.type }}
          </div>
          <h2 class="work__name">
            {{ work.title }}
          </h2>
          <div class="work__more">
            <router-link
              :to="`/works/${work.slug}`"
              class="work__more"
            >
              view more
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TweenMax, Power3, TimelineMax,
} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    isLoaded() {
      this.animInProjects();
    },
  },
  mounted() {
    if (this.isLoaded) {
      this.animInProjects();
    }
  },
  methods: {
    animInProjects: () => {
      const controller = new ScrollMagic.Controller();
      const section = document.querySelector('.works');
      const projects = document.querySelectorAll('.work__content-container > *');

      const timeline = new TimelineMax({
        onComplete: () => {
          timeline.kill();
        },
      });

      timeline.fromTo(section, 2,
        { autoAlpha: 0, y: 200 },
        { autoAlpha: 1, y: 0, ease: Power3.easeInOut }, 0.7);

      projects.forEach((project) => {
        const waitTime = 2;
        const fadeInProject = TweenMax.fromTo(project, 0.6,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, ease: Power3.easeInOut },
          waitTime);

        const projectScene = new ScrollMagic.Scene({
          triggerElement: project,
          triggerHook: 1,
          reverse: false,
        })
          .setTween(fadeInProject)
          .on('end', () => {
            projectScene.destroy();
          })
          .addTo(controller);
      });
    },
  },
};
</script>
