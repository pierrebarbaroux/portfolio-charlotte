<template>
  <div>
    <Nav />

    <div class="page page-works-single">
      <section class="works-single">
        <div class="work__intro">
          <div class="work__image work__intro-image container container--landing">
            <img
              :src="filteredData.landing"
              :alt="`${filteredData.title} landing image`"
            >
          </div>
          <div class="container">
            <div class="work__intro-container">
              <div class="work__intro-header">
                <div class="work__type">
                  {{ filteredData.type }} • {{ filteredData.year }}
                </div>
                <h2 class="work__name">
                  {{ filteredData.title }}
                </h2>
              </div>

              <div class="work__intro-content">
                <p
                  class="work__description"
                  v-html="filteredData.description"
                >
                  {{ filteredData.description }}
                </p>
                <div class="work__more">
                  {{ filteredData.target }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="work__content">
          <div
            v-for="(section, indexSection) in filteredData.sections"
            :key="indexSection"
            :class="`work__section ${section.class}`"
          >
            <div class="container">
              <div :class="`work__section-container ${section.class}`">
                <h2 class="work__section-title">
                  {{ section.title }}
                </h2>

                <div
                  v-if="section.class === 'work-explanation' || section.class === 'work-explanation work-explanation-fullwidth'"
                  class="work__section-description"
                >
                  {{ section.description }}
                </div>
              </div>

              <div class="work__assets">
                <div
                  v-if="section.class === 'work-explanation'"
                  class="work__blob"
                >
                  <!-- <img src="../assets/images/blob-1.svg"> -->
                </div>
                <div
                  v-if="section.class === 'work-slider-fullwidth'"
                  class="swiper-container"
                >
                  <div class="swiper-wrapper">
                    <div
                      v-for="(asset, indexAsset) in section.assets"
                      :key="indexAsset"
                      class="swiper-slide"
                    >
                      <img
                        v-if="asset.type === 'image'"
                        :class="section.class"
                        :src="asset.src"
                        :alt="asset.alt"
                      >
                    </div>
                  </div>
                </div>
                <div
                  v-for="(asset, indexAsset) in section.assets"
                  v-else
                  :key="indexAsset"
                >
                  <img
                    v-if="asset.type === 'image'"
                    :class="section.class"
                    :src="asset.src"
                    :alt="asset.alt"
                  >
                  <video
                    v-if="asset.type === 'video'"
                    autoplay=""
                    loop=""
                  >
                    <source :src="asset.src">
                    <p class="warning">
                      Your browser does not support HTML5 video.
                    </p>
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div class="work__next">
            <div class="work">
              <a
                :href="`/works/${nextProject.slug}`"
                :aria-label="`${nextProject.title}`"
              >
                <div class="work__image">
                  <img :src="nextProject.landing">
                </div>
              </a>

              <div class="work__content">
                <div class="work__content-container">
                  <div class="work__type">
                    Next project
                  </div>
                  <h2 class="work__name">
                    {{ nextProject.title }}
                  </h2>
                  <div class="work__more">
                    <router-link
                      :to="`/works/${nextProject.slug}`"
                      class="work__more"
                    >
                      view more
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import Swiper from 'swiper';

export default {
  components: {
    Nav,
    Footer,
  },
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      nextProject: [],
      smoothScroll: undefined,
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        grabCursor: true,
      },
    };
  },
  computed: {
    filteredData() {
      if (this.works) {
        const url = `${window.location.protocol}//${window.location.host}/works/`;
        const matchData = this.works.filter((item) => {
          if (item.slug === window.location.href.replace(url, '')) return true;
          return false;
        });
        return matchData[0];
      }
      return false;
    },
  },
  mounted() {
    if (this.filteredData) {
      document.title = `${this.filteredData.title} | Charlotte Sieess`;

      const meta = document.getElementsByTagName('meta');
      for (let i = 0; i < meta.length; i += 1) {
        if (meta[i].name.toLowerCase() === 'description') {
          meta[i].content = `${this.filteredData.title}`;
        }
      }

      const section = '.work__section.work-slider-fullwidth .work__assets .swiper-container';
      if (document.querySelector(section)) {
        const swiper = new Swiper(section, this.swiperOptions);
      }
    }

    // Get next project
    this.nextProject = this.getNextProject();
  },
  methods: {
    getNextProject() {
      if (this.works) {
        const url = `${window.location.protocol}//${window.location.host}/works/`;
        let i = 0;
        this.works.filter((item, index) => {
          if (item.slug === window.location.href.replace(url, '')) { i = index; return true; }
          return false;
        });
        // Select the first project as the next one if the actual project is the last
        if (this.works.length === i + 1) i = 0; else i += 1;
        return this.works[i];
      } return false;
    },
  },
};
</script>
