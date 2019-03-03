export default {
  mounted() {
    const { description } = this.$options;
    const meta = document.getElementsByTagName('meta');

    if (description) {
      for (let i = 0; i < meta.length; i += 1) {
        if (meta[i].name.toLowerCase() === 'description') {
          meta[i].content = description;
        }
      }
    }
  },
};
