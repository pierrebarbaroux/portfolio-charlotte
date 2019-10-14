<template>
  <div>
    <Nav :is-loaded="isLoaded" />
    <div class="page page-works-all">
      <section class="works-all">
        <WorksAll
          :works="works"
          :is-loaded="isLoaded"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Nav from 'components/Nav';
import WorksAll from 'components/WorksAll';

export default {
  title: 'Works',
  description: '',
  components: {
    Nav,
    WorksAll,
  },
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
    works: {
      type: Array,
      required: true,
    },
  },
};
</script>
