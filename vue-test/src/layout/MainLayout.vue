<template>
  <div class="wrapper">
    <layout-header></layout-header>
    <main class="content-wrapper">    
      <slot></slot>
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from '@/layout/Header';
import LayoutFooter from '@/layout/Footer';

export default {
  name: 'MainLayout',
  components: {
    LayoutHeader,
    LayoutFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
