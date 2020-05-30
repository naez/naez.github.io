<template>
  <header class="header">
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
            title: 'About'
          }, {
            id: 2,
            title: 'Help', 
            children: [
              {
                id: 1,
                link: '/user-guide', 
                title: 'User Guide'
              }, {
                id: 2,
                link: '/contact-support', 
                title: 'Contact Support'
              }
            ],
          }, {
            id: 3,
            link: '/', 
            title: 'Features'
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
