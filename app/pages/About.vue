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
              I’m 24 yo and I’m living in Paris (but I’m a girl from the South ☀️). I’m currently involved in the fifth year in HETIC, a web industry school where I am studying technologies and web design. I am pretty passionate about elephants 🐘, digital and graphic design. I am currently seeking for a part time job as a digital designer starting in January 2020.
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
              I’m part of the Adfab team, a parisian digital agency as UX/UI designer junior. I’m working for various customers on UX and UI design tasks, equally for applications and websites. I love working with this awesome team and I am now looking for a new agency to welcome me! 😇
            </p>

            <div class="work__fields">
              <h3 class="work__fields-title">
                I'm doing
              </h3>
              <ul class="work__fields-items">
                <li>Web design</li>
                <li>Product design</li>
                <li>Design thinking</li>
              </ul>
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
  margin-top: 100px;
  margin-bottom: 40px;

  &-title {
    font-size: rem(14px);
    line-height: rem(23px);
    text-transform: uppercase;
    margin-bottom: 10px;
    color: $--color-subtitle;
  }

  &-items {
    font-size: rem(28px);
    font-family: $font-title;
    line-height: rem(34px);
    font-weight: bold;
    color: $--color-primary-text;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: rem(-3px);

        &::after {
          content: '•';
          margin-left: rem(5px);
        }
      }
    }

    @include small {
      font-size: rem(16px);
      line-height: rem(24px);
    }
  }
}
</style>
