<template>
  <transition name="fade">
    <router-view :works="works" />
  </transition>
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
