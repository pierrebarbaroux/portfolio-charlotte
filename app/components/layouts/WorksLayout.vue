<template>
  <router-view
    :works="works"
    :is-loaded="isLoaded"
  />
</template>

<script>
import works from '../../../static/projects.json';

export default {
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      works,
    };
  },
};
</script>
