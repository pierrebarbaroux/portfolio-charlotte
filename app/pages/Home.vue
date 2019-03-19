<template>
  <div>
    <Nav />
    <div class="page page-home">
      <header class="header header--full">
        <div class="container header__container">
          <div class="header__content">
            <h1>
              <div class="header__title header__title-first">
                Young digital designer
              </div>
              <div class="header__title header__title-second">
                and chocolate lover
              </div>
            </h1>
          </div>
          <div class="lateral__text lateral__text--right js-scroll-text">
            Scroll
          </div>
        </div>
      </header>

      <WorksAll :works="works" />

      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from 'components/Nav';
import WorksAll from 'components/WorksAll';
import Footer from 'components/Footer';
import { TimelineMax, Power3 } from 'gsap';
import works from '../../static/projects.json';

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
  mounted() {
    this.parseTitle();
    this.animInTitle();
    this.animInScrollText();
  },
  methods: {
    parseTitle: () => {
      const headerTitle = document.querySelectorAll('.header__title');
      headerTitle.forEach((item) => {
        const title = item;
        const initialContent = title.innerHTML.replace(/\s+/g, ' ').trim();
        const letters = [];

        for (let i = 0; i < initialContent.length; i += 1) {
          letters.push(initialContent.charAt(i));
        }

        const wrappedLetters = letters
          .filter(letter => (letter && letter !== '\n'))
          .map(letter => (letter.trim() !== '' ? (`<span class="intro__letter">${letter}</span>`) : ' '))
          .join('');

        title.innerHTML = wrappedLetters;
      });
    },
    animInTitle: () => {
      const timeline = new TimelineMax({
        onComplete: () => {
          timeline.kill();
        },
      });
      const letters = document.querySelectorAll('.intro__letter');
      const waitTime = 0;
      letters.forEach((letter, i) => {
        timeline.fromTo(letter, 1.3,
          { autoAlpha: 0, y: 250 },
          { autoAlpha: 1, y: 0, ease: Power3.easeInOut }, i * 0.03 + waitTime);
      });
    },
    animInScrollText: () => {
      const timeline = new TimelineMax({
        onComplete: () => {
          timeline.kill();
        },
      });
      const scrollText = document.querySelector('.js-scroll-text');
      const waitTime = 0.8;
      timeline.fromTo(scrollText, 1.3,
        { autoAlpha: 0, y: -30 },
        { autoAlpha: 1, y: 0, ease: Power3.easeInOut }, waitTime);
    },
  },
};
</script>

<style>
.intro__letter {
  display: inline-block;
}
</style>
