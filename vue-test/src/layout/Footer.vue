<template>
  <footer class="footer">
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
      <form class="form footer__form ">
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
