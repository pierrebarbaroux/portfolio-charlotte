/* eslint-disable no-new */

import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

require('gsap/ScrollToPlugin');

class Application {
  constructor() {
    // Variables for intro animations
    this.introLogo = document.querySelector('.intro__logo');
    this.introText = document.querySelector('.intro__nav');
    this.anchors = document.querySelectorAll('.intro__anchor');

    // Store all project container and project elements
    this.works = document.querySelectorAll('.work');
    this.workImage = document.querySelectorAll('.work__image');
    this.workCard = document.querySelectorAll('.work__content');

    this.init();
  }

  init() {
    this.animateIntro();

    // Init scroll animation only for tablet/desktop width
    if (window.innerWidth >= 768) {
      this.initScroll();
    }
  }

  animateIntro() {
    // Init Timeline, kill it on completion for performance gain
    const tl = new TimelineMax({
      onComplete: () => {
        tl.kill();
      },
    });

    // Fadein name
    tl.from(this.introLogo, 0.75, {
      y: 20,
      autoAlpha: 0,
      ease: Power2.easeOut,
    }, 'start+=0.2');

    // Fadein title
    tl.from(this.introText, 0.75, {
      y: 10,
      autoAlpha: 0,
      ease: Power2.easeOut,
    }, 'start+=0.7');
  }

  initScroll() {
    // Init scroll magic controller
    const controller = new ScrollMagic.Controller();

    // Fadein projects on scroll
    this.works.forEach((work) => {
      // Create fadein tween
      const fadeInWork = TweenMax.from(work, 1, {
        autoAlpha: 0,
        ease: Power2.easeInOut,
      });

      const workScene = new ScrollMagic.Scene({
        triggerElement: work,
        triggerHook: 1,
        reverse: false,
      })
        .setTween(fadeInWork)
        .on('end', () => {
          workScene.destroy();
        })
        .addTo(controller);
    });

    // Parallax effect on project images
    this.workImage.forEach((image) => {
      const parallaxImage = TweenMax.fromTo(image, 1,
        {
          y: '0%',
        },
        {
          y: '-50%',
          ease: Linear.easeNone,
        });

      new ScrollMagic.Scene({
        triggerElement: image.parentNode,
        triggerHook: 1,
        duration: window.innerHeight * 3,
      })
        .setTween(parallaxImage)
        .addTo(controller);
    });
  }
}

document.addEventListener('DOMContentLoaded', (() => {
  new Application();
}));
