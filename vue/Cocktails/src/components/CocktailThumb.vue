<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div 
        :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"
      ></div>
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main';

.root {}

.pic {
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: block;
  margin: 0 auto;
}

.name {
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.6px;
  margin-top: 15px;
}

</style>