<template>
  <main-layout>
    <div class="container">
      <section class="section">
        <header class="section__header">
          <h1 class="section__title section__title--h1">{{ title }}</h1>
        </header>
        <div class="section__description">
          <p></p>
        </div>
      </section>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';

export default {
  name: 'Projects',
  data() {
    return {
      title: 'Реализованные проекты',
    };
  },
  components: {
    MainLayout,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
