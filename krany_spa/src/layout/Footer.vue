<template>
  <!-- <footer class="footer">
    <div class="footer__container">
      <router-link to="/" class="logo footer__logo"><svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 35"><rect y="15" width="20" height="20" rx="10"/><rect x="29" width="20" height="35" rx="10"/></svg></router-link>
      <ul class="menu menu--font-small menu--theme-white footer__menu">
        <li class="menu__item" v-for="item in footerMenu" :key="item.id">
          <router-link 
              class="menu__link" 
              :to="item.link" 
              :title="item.title" 
            > {{ item.title }} 
          </router-link>
        </li>
      </ul>
      <form class="form footer__form">
        <input
          type="text"
          class="form__item input"
          value=""
          tabindex="0"
          placeholder="Enter your email"
        >
        <button class="form__item btn btn--warning" tabindex="1">Sign Up Now</button>
      </form>
    </div>
  </footer> -->
  <footer class="footer">
      <div class="footer__container">
        <div class="f f--col-3 f--col-sm-1 f--i-30">
          <section class="f__item">
            <h2 class="footer__title">2013 © Элеватормельмаш</h2>
            <div class="footer__text">
              <p>Все права защищены.</p>
            </div>
            <a href="#" class="footer__link link">Карта сайта</a>
          </section>
          <section class="f__item">
            <h2 class="footer__title">Санкт-Петербург</h2>
            <div class="footer__text">
              <p>Тел./факс: (812) 320-29-64</p>
              <p>Санкт-Петербург, Северный пр., д.5, корп.3, офис&nbsp;310</p>
              <p>E-mail: <a class="link" href="mailto:info@tali.spb.ru">info@tali.spb.ru</a></p>
            </div>
          </section>
          <section class="f__item">
            <h2 class="footer__title">Екатеринбург</h2>
            <div class="footer__text">
              <p>Тел. (343) 385-88-67</p>
              <p>Свердловская обл., г.&nbsp;Березовский, <br>Ржевский тракт, 15км</p>
              <p>E-mail: <a class="link" href="mailto:info@gpto96.ru">info@gpto96.ru</a></p>
            </div>
          </section>
        </div>

        <!-- <a href="https://prcomm.ru" target="_blank" class="creator">
      <div class="creator__descr">Создание сайта и&nbsp;продвижение</div>
      <div class="creator__logo"><svg class="creator__icon" role="img" width="37" height="48"><use xlink:href="./sprite.symbol.svg#creator"/></svg></div>
    </a> -->
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerMenu: [
        {
          id: 1,
          link: '/about', 
          title: 'About Us'
        }, {
          id: 2,
          link: '/privacy-policy', 
          title: 'Privacy Policy',
        }
      ],
    };
  },
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
