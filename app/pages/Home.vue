<template>
  <div class="page page-home">
    <header class="header header--full">
      <div class="container header__container">
        <Nav />
        <div class="header__content">
          <h1>
            Hey,<br>
            welcome home
          </h1>
        </div>
        <div class="lateral__text lateral__text--right">
          Scroll
        </div>
      </div>
    </header>

    <WorksAll :works="works" />

    <Footer />
  </div>
</template>

<script>
import Nav from 'components/Nav';
import WorksAll from 'components/WorksAll';
import Footer from 'components/Footer';
import 'scripts/base';
import works from '../../static/works.json';

export default {
  title: 'Home',
  description: '',
  components: {
    Nav,
    WorksAll,
    Footer,
  },
  data() {
    return {
      works,
    };
  },
};
</script>
