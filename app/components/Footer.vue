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
            <a
              href="https://www.linkedin.com/in/CharlotteSieess"
              target="_blank"
              title="LinkedIn"
              rel="noopener"
              class="link-animated"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/CharlotteSieess"
              target="_blank"
              title="Dribbble"
              rel="noopener"
              class="link-animated"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/charlottesieess"
              target="_blank"
              title="Behance"
              rel="noopener"
              class="link-animated"
            >
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
          rel="noopener"
          class="link-animated"
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
