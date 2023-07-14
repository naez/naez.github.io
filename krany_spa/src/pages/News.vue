<template>
  <main-layout>
    <section class="section">
      <div class="container">
        <header class="section__header">
          <h1 class="section__title section__title--h1">{{ title }}</h1>
        </header>
      </div>
    </section>

    <section class="news-list" aria-label="Новости компании">
      <article class="news" v-for="item in news" :key="item.id">
        <div class="news__date">{{ item.date }}</div>
        <h3 class="news__title">
          <router-link class="news__link" :to="item.link" :title="item.title" > {{ item.title }} 
          </router-link>
        </h3>
        <div class="news__descr">{{ item.descr }}</div>
        <img v-if="item.img" :src="item.img" :alt="item.title" class="news__img">
      </article>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';

export default {
  name: 'News',
  data() {
    return {
      title: 'Новости',
      news: [
        {
          id: 1,
          link: '/news/news_1', 
          title: 'Наша компания реализовала проект с поставкой специальных цепных тельферов тип 29/06ЕЕ для судостроительных верфей в Санкт-Петербурге.',
          descr: 'Компания ООО «ТД Элеватормельмаш» за более чем двадцатилетнюю работу на рынке грузоподъемного оборудования реализовала множество нестандартных проектов',
          date: '26 января 2022'
        }, {
          id: 2,
          link: '/news/2', 
          title: 'В середине декабря 2021 года «Элеватормельмаш» поставило 1000-й мостовой кран',
          descr: 'Компания ООО «ТД Элеватормельмаш» за более чем двадцатилетнюю работу на рынке грузоподъемного оборудования реализовала множество нестандартных проектов, основанных на внедрении надежных и экономически эффективных решений, и, предоставляя качественные услуги на максимально выгодных для заказчиков условиях.',
          date: '28 декабря 2021'
        }, {
          id: 3,
          link: '/news/3', 
          title: 'Улучшение качества талей (тельферов) МВ Янтра (Болгария)',
          descr: 'Описание',
          date: '10 ноября 2020',
          img: '../assets/img/news03.png'
        }, {
          id: 4,
          link: '/news/4', 
          title: 'В середине марта 2020 года «Элеватормельмаш» поставило 1000-й мостовой кран',
          descr: 'Описание',
          date: '28 июня 2021'
        }, 
      ],
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
