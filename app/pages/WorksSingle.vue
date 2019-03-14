<template>
  <div class="page page-works-single">
    <Nav />

    <section class="works-single">
      <div class="work__intro">
        <div class="work__image work__intro-image container container--landing">
          <img :src="filteredData.landing">
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
              <p class="work__description">
                {{ filteredData.description }}
              </p>
              <div class="work__more">
                test
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
            <div
              v-if="section.class === 'work-explanation'"
              class="work__bulle"
            >
              /
            </div>

            <div :class="`work__section-container ${section.class}`">
              <h2 class="work__section-title">
                {{ section.title }}
              </h2>

              <div
                v-if="section.class === 'work-explanation'"
                class="work__section-description"
              >
                {{ section.description }}
              </div>
            </div>

            <div class="work__assets">
              <div
                v-for="(asset, indexAsset) in section.assets"
                :key="indexAsset"
              >
                <img
                  :src="asset.src"
                  :alt="asset.alt"
                  :title="asset.title"
                  v-if="asset.type === 'image'"
                >
                <video autoplay="" loop="" v-if="asset.type === 'video'">
                  <source :src="asset.src">
                  <p class="warning">Your browser does not support HTML5 video.</p>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="work__next">
        <div class="work">
          <a
            :href="`/works/${nextProject.slug}`"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Nav from 'components/Nav';
import Footer from 'components/Footer';

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
