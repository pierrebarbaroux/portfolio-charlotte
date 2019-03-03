<template>
  <div class="page page-about">
    <header class="header">
      <div class="container header__container">
        <Nav />
        <div class="header__content header__content--about">
          <div class="myself">
            <small>Hello it's me</small>
            <h2>
              I'm Charlotte, a french digital student designer.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </header>

    <Footer />
  </div>
</template>

<script>
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import 'scripts/base';

export default {
  title: 'About',
  description: '',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.myself {
  width: 50%;
}
</style>
