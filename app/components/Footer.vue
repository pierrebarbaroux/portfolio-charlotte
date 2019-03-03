<template>
  <footer
    class="footer"
    :class="{'footer--colored': !announcement}"
  >
    <div class="footer__container">
      <Announcement />

      <nav class="footer__nav">
        <ul>
          <li>
            <a href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#">
              Dribbble
            </a>
          </li>
          <li>
            <a href="#">
              Behance
            </a>
          </li>
        </ul>
      </nav>

      <small class="footer__credits">
        Made with ❤ by
        <a
          href="https://www.pierrebarbaroux.fr/"
          target="_blank"
        >
          PBX
        </a>
      </small>
    </div>
  </footer>
</template>

<script>
import Announcement from 'components/Announcement';

export default {
  components: {
    Announcement,
  },
  props: {
    announcement: {
      type: Boolean,
    },
  },
};
</script>
