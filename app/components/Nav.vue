<template>
  <nav class="nav">
    <p class="nav__left">
      <router-link to="/">
        Cha.
      </router-link>
    </p>
    <div class="nav__right">
      <ul>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>
