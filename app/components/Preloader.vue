<template>
  <div class="preloader">
    {{ percentage }}
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
};
</script>
