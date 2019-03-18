<template>
  <router-view :works="works" />
</template>

<script>
import works from '../../../static/works.json';

export default {
  data() {
    return {
      works,
    };
  },
};
</script>
