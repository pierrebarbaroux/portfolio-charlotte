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


      <div class="container">
        <div class="work__intro-container">
          <div class="work__intro-header">
            <h2 class="work__name">
              Latest experience
            </h2>
          </div>
          <div class="work__intro-content">
            <p class="work__description">
              Last year I joined Go and Up, a parisian independent digital agency as the assistant of the  Creative Director. I was working for 4 months for various customers on UX and UI design tasks, equally for applications and websites. I loved working with this awesome team and I am looking for a new agency to welcome me!
            </p>

            <div class="work__fields">
              <h3 class="work__fields-title">
                What I do
              </h3>
              <div class="work__fields-item">
                <img src="../assets/images/blob-about-1.svg">
                <p class="work__fields-item-text">
                  Product design
                </p>
              </div>
              <div class="work__fields-item">
                <img src="../assets/images/blob-about-2.svg">
                <p class="work__fields-item-text">
                  Web interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
