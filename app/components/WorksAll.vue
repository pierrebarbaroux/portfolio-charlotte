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
export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
};
</script>
