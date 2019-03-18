<template>
  <div class="works">
    <div
      v-for="work in works"
      :key="work.slug"
      class="work"
    >
      <router-link :to="`/works/${work.slug}`">
        <div class="work__image">
          <img :src="work.landing">
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
            <router-link :to="`/works/${work.slug}`">
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
  TweenMax, Power3,
} from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.animInProjects();
  },
  methods: {
    animInProjects: () => {
      const controller = new ScrollMagic.Controller();
      const projects = document.querySelectorAll('.work__content-container > *');

      projects.forEach((project) => {
        const waitTime = 0;
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
