<template>
  <div>
    <Nav :is-loaded="isLoaded" />
    <div class="page page-about">
      <header class="header">
        <div class="header__content header__content--about">
          <div class="myself">
            <div>
              <small>Bonjour !</small>
            </div>
            <h2>
              I'm Charlotte, a french digital student designer.
            </h2>
            <p>
              I am 24 years old, I am living in Paris (but I was born and raised in Marseille, a city in south-east of France, that’s why I love the sea and the sun!). I am currently involved in the fourth year in HETIC, a web industry school where I am studying technologies and web design. I am pretty passionate about digital and graphic design. I am currently seeking for a six-month internship as a Digital Designer, from June to November 2019.
            </p>
          </div>
          <div class="photo">
            <img
              src="https://res.cloudinary.com/pbx/image/upload/v1553014457/portfolio-charlotte/about/charlotte-sieess.jpg"
              alt="Charlotte Sieess photo"
            >
          </div>
        </div>
      </header>

      <div class="container">
        <div class="work__intro-container">
          <div class="work__intro-header">
            <h2 class="work__name">
              Latest<br>experience
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
import { TimelineMax, Power3 } from 'gsap';

import Nav from 'components/Nav';
import Footer from 'components/Footer';

export default {
  title: 'About',
  description: '',
  components: {
    Nav,
    Footer,
  },
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    isLoaded() {
      this.animInIntro();
    },
  },
  mounted() {
    if (this.isLoaded) {
      this.animInIntro();
    }
  },
  methods: {
    animInIntro: () => {
      const sectionsIntro = document.querySelectorAll('.myself > *');
      const photo = document.querySelector('.photo');
      const waitTime = 0.05;

      const timeline = new TimelineMax({
        onComplete: () => {
          timeline.kill();
        },
      });

      sectionsIntro.forEach((section, i) => {
        timeline.fromTo(section, 1.2,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, ease: Power3.easeInOut },
          i * 0.2 + waitTime);
      });

      timeline.fromTo(photo, 1,
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, ease: Power3.easeInOut },
        0.4);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/base/variables';
@import '../assets/styles/base/mixins';

.header {
  padding-top: 150px;
  min-height: 95vh;

  @include small {
    padding-top: 100px;
  }

  &__content {
    &--about {
      flex-direction: row-reverse;
      align-items: flex-start;
      width: 90%;
      margin: auto;

      @include small {
        flex-direction: column;
      }

      .photo {
        margin-right: 130px;

        @include medium {
          margin-right: 80px;
        }

        @include small {
          margin: 50px auto -50px auto;
        }

        img {
          height: 500px;
        }
      }

      .myself {
        width: 50%;
        margin: rem(30px) 0;

        @include small {
          width: 100%;
        }

        small {
          text-transform: uppercase;
          font-family: $font-text;
          font-weight: 400;
          font-size: rem(14px);
          color: $red;
        }

        h2 {
          font-size: rem(48px);
          line-height: rem(72px);
          margin: 30px 0 40px;
          font-family: $font-title;
          font-weight: 700;

          @include medium {
            font-size: rem(38px);
            line-height: rem(56px);
          }

          @include small {
            font-size: rem(35px);
            line-height: rem(52px);
          }
        }

        p {
          font-size: rem(18px);
          line-height: rem(28px);
          color: $white;
          font-family: $font-text;
          font-weight: 400;
        }
      }
    }
  }
}

.work__intro {
  &-header {
    @include small {
      text-align: left;
    }
  }

  &-container {
    @include small {
      margin-top: 60px;
    }
  }

  &-content {
    @include small {
      padding-top: 20px;
    }
  }
}

.work__fields {
  margin-top: 60px;

  &-title {
    font-size: rem(14px);
    line-height: rem(23px);
    text-transform: uppercase;
    color: $red;
    margin-bottom: 30px;
  }

  &-item {
    font-size: rem(23px);
    line-height: rem(34px);
    color: $white;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    text-align: center;

    @include small {
      font-size: rem(16px);
      line-height: rem(24px);
      width: 50%;
    }

    &:not(:last-child) {
      margin-right: -40px;

      @include small {
        margin-right: -20px;
      }
    }

    img {
      width: 100%;
      user-select: none;
    }

    &-text {
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
