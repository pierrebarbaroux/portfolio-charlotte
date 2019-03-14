<template>
  <div>
    <Nav />
    <div class="page page-about">
      <header class="header">
        <div class="container header__container">
          <div class="header__content header__content--about">
            <div class="myself">
              <small>Hello it's me</small>
              <h2>
                I'm Charlotte, a french digital student designer.
              </h2>
              <p>
                I am 24 years old and I am living in Paris.
                I am currently involved in the fourth year in HETIC, a web industry school.
                I am pretty passionate about digital and graphic design.
                I am currently seeking for a six-month internship as a Digital Designer, from June to November 2019.
              </p>
            </div>
          </div>
        </div>
      </header>

      <p>Last year I joined Go and Up, a parisian independent digital agency as the assistant of the  Creative Director. I was working for 4 months for various customers on UX and UI design tasks, equally for applications and websites. I loved working with this awesome team and I am looking for a new agency to welcome me!</p>

      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from 'components/Nav';
import Footer from 'components/Footer';

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
