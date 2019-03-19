<template>
  <router-view :works="works" />
</template>

<script>
import works from '../../../static/projects.json';

export default {
  data() {
    return {
      works,
    };
  },
};
</script>
