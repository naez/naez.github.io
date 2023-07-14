<template>
  <main-layout>
    <section class="section">
      <div class="container">
        <header class="section__header">
          <h1 class="section__title section__title--h2">{{ title }}</h1>
        </header>
        <div class="section__description">
          <p>{{ descr }}</p>
        </div>
        {{ date }}
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';

export default {
  name: 'News_1',
  data() {
    return {
      title: 'Наша компания реализовала проект с поставкой специальных цепных тельферов тип 29/06ЕЕ для судостроительных верфей в Санкт-Петербурге.',
      descr: 'Компания ООО «ТД Элеватормельмаш» за более чем двадцатилетнюю работу на рынке грузоподъемного оборудования реализовала множество нестандартных проектов',
      date: '26 января 2022'
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
