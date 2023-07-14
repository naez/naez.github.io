<template>
  <main-layout>
    <section class="main-section">
      <h1 class="main-section__h1">{{ title }}</h1>
      <div class="main-section__description">
        <p>Some of the features and advantages that we provide
          for those of you who store data in this Data Warehouse.</p>
      </div>
    </section>
    <features-slider></features-slider>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';

export default {
  name: 'Features',
  data() {
    return {
      title: 'Features',
    };
  },
  components: {
    MainLayout,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

</style>
