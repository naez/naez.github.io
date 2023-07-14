<template>
  <!-- <header class="header">
    <div class="header__container">
      <router-link to="/" class="logo header__logo"><svg class="logo__icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 35"><rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/><rect x="29" width="20" height="35" rx="10" fill="#F063B8"/></svg></router-link>
      <nav class="menu-wrapper header__menu" :class="{ 'menu-wrapper--visible': burgerActive }">
        <ul class="menu">
          <li class="menu__item" v-for="item in mainMenu" :key="item.id">
            <router-link 
                v-if="!item.children"
                class="menu__link" 
                :to="item.link" 
                :title="item.title" 
                @click="menuDropdownActive = !menuDropdownActive"
              > {{ item.title }} 
            </router-link>
            <span v-if="item.children" 
                class="menu__link" 
                :title="item.title" 
                @click="menuDropdownActive = !menuDropdownActive"
                :class="{ 'menu__link--active': menuDropdownActive }"
              > {{ item.title }} 
              <svg class="menu__link-caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.3 5.5"><path d="M5.3 2.7c-.4.4-1 .4-1.4 0L1.5.3C1.2 0 .6 0 .3.3c-.3.3-.3.9 0 1.2L4 5.3c.3.3.9.3 1.2 0l.6-.6L9 1.5c.3-.3.3-.9 0-1.2-.3-.3-.9-.3-1.2 0L5.3 2.7z"/></svg>
            </span>
            <ul v-if="item.children" :class="{ 'menu-dropdown--visible': menuDropdownActive }" class="menu-dropdown">
              <li v-for="{ link, title, id } in item.children" :key="id" class="menu-dropdown__item">
                <router-link :to="link" :title="title"  class="menu-dropdown__link">{{ title }}</router-link>
              </li>
            </ul>
          </li>
          <li v-if="clientWidth<992" class="menu__item menu__item--mobile-el">
            <a href="#" class="menu__btn btn btn--large btn--primary">Sign Up</a>
          </li>
        </ul>
      </nav>
      <div class="header__btns">
        <a href="#" class="btn btn--large btn--primary" v-if="clientWidth>992">Sign Up</a>
        <span v-if="clientWidth<993" class="burger" id="burger" @click="burgerActive = !burgerActive" :class="{ 'burger--active': burgerActive }"></span>
      </div>
    </div>
  </header> -->
  <header class="header headroom" id="headroom">
    <div class="header__upper-block">
      <div class="header__row container">
        <a id="showMenu" href="#" class="menu-btn show-md"><svg class="menu-btn__svg" role="img" width="40" height="40">
            <use xlink:href="./sprite.symbol.svg#menu" />
          </svg></a>
          
        <div class="logo-wrapper">
          <router-link to="/" class="logo header__logo">
            <svg class="logo__svg" role="img" width="62" height="78">
              <use xlink:href="./sprite.symbol.svg#logo" />
            </svg>
            <div class="logo__descriptor">
              <div class="logo__descriptor-title">Элеватормельмаш</div>
              <div class="logo__descriptor-label">Мостовые краны, тали, тельферы. <br> Производство, продажа, монтаж.</div>
            </div>
          </router-link>
        </div>

        <a data-modal="#claim" class="btn btn--styled" data-modal-title-text="Обратный&nbsp;звонок" data-modal-btn-text="Перезвоните"><span class="btn__text">Обратный&nbsp;звонок</span></a>

        <div class="phone-block">
          <a href="tel:+78123202964" class="phone"><span class="phone__number">(812) 320-29-64</span></a>
          <div class="phone-block__city">Санкт-Петербург</div>
          <a href="mailto:info@tali.spb.ru" class="email"><span class="email__value">info@tali.spb.ru</span></a>
        </div>
        <div class="phone-block">
          <a href="tel:+73433858867" class="phone"><span class="phone__number">(343) 385-88-67</span></a>
          <div class="phone-block__city">Екатеринбург</div>
          <a href="mailto:info@tali.spb.ru" class="email"><span class="email__value">info@gpto96.ru</span></a>
        </div>
      </div>
    </div>
    <nav class="menu-wrapper" id="menu">
      <div class="menu-wrapper__container">
        <ul class="menu">
          <li class="menu__li" v-for="item in mainMenu" :key="item.id">
            <router-link 
                v-if="!item.children"
                class="menu__a" 
                :to="item.link" 
                :title="item.title" 
                @click="menuDropdownActive = !menuDropdownActive"
              > {{ item.title }} 
            </router-link>
          </li>
        </ul>
        <!-- <ul class="menu">
          <li class="menu__li">
            <a href="#" class="menu__a">О Компании</a>
            <div class="menu__child">
              <div class="menu__child-group">
                <ul class="menu__child-ul">
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны электрические однобалочные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны электрические двухбалочные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны пневматические</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны ручные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны консольные на колонне</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны консольные настенные</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__li">
            <a href="#" class="menu__a">Каталог товаров</a>
            <div class="menu__child menu__child--col-2">
              <div class="menu__child-group">
                <a href="#" class="menu__child-title">Краны мoстовые </a>
                <ul class="menu__child-ul">
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны электрические однобалочные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны электрические двухбалочные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны пневматические</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны ручные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны консольные на колонне</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Краны консольные настенные</a></li>
                </ul>
              </div>
              <div class="menu__child-group">
                <a href="#" class="menu__child-title">Тали (тельферы)</a>
                <ul class="menu__child-ul">
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Ручные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Канатные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Цепные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Пневматические</a></li>
                </ul>
              </div>
              <div class="menu__child-group">
                <a href="#" class="menu__child-title">Лебедки</a>
                <ul class="menu__child-ul">
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Лебедки электрические</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Лебедки ручные</a></li>
                </ul>
              </div>
              <div class="menu__child-group">
                <a href="#" class="menu__child-title">Конвейера</a>
                <ul class="menu__child-ul">
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип КСМ(2M)</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип КПС (3)</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип 2КПС(3), 2КПС (3С)</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип КПС(Д)</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип КЛЦ</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип КР</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Винтовой</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тип НЛС/ЭЦ</a></li>
                </ul>
              </div>
              <div class="menu__child-group">
                <a href="#" class="menu__child-title">Тележки</a>
                <ul class="menu__child-ul">
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тележки ручные</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тележки электрические</a></li>
                  <li class="menu__child-li"><a href="#" class="menu__child-a">Тележки пневматические</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__li"><a href="#" class="menu__a">Реализованные проекты</a></li>
          <li class="menu__li"><a href="#" class="menu__a">Новости</a></li>
          <li class="menu__li"><a href="#" class="menu__a">Контакты</a></li>
        </ul>  -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      burgerActive: false,
      clientWidth: null,
      menuDropdownActive: false,
      mainMenu: [
          {
            id: 1,
            link: '/about', 
            title: 'О компании'
          }, {
            id: 2,
            link: '/catalog',
            title: 'Каталог товаров', 
          }, {
            id: 3,
            link: '/projects', 
            title: 'Реализованные проекты'
          }, {
            id: 4,
            link: '/news', 
            title: 'Новости'
          },{
            id: 5,
            link: '/contacts', 
            title: 'Контакты'
          },
      ],
    };
  },
  methods: {
    updateWidth() {
      this.clientWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
