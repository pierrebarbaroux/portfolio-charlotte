<template>
  <div class="page page-works-all">
    <Nav />
    <section class="works-all">
      <WorksAll :works="works" />
    </section>
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
    works: {
      type: Array,
      required: true,
    },
  },
};
</script>
