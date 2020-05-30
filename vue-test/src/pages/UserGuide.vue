<template>
  <main-layout>
    <section class="main-section">
      <h1 class="main-section__h1">{{ title }}</h1>
      <div class="main-section__description">
        <p></p>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';

export default {
  name: 'UserGuide',
  data() {
    return {
      title: 'User Guide',
    };
  },
  components: {
    MainLayout,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
