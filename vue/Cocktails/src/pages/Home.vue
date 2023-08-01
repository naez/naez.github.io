<script setup>
import AppLayout from '../components/AppLayout.vue';
import CocktailThumb from '../components/CocktailThumb.vue'
import { useRootStore } from '../stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIngredient(null)
}

</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg1.jpg" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <h2 class="title">Choose your drink</h2>
        <div class="select-wrapper">
          <el-select 
            v-model="ingredient" 
            placeholder="Choose main ingredient" 
            size="large"
            class="select"
            @change="getCocktails"
            filterable
            allow-create
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img class="img" src="/src/assets/img/cocktails.png" alt="Cocktails">
      </div>
      <div v-else class="info">
        <h2 class="title">COCKTAILS WITH {{ ingredient }}</h2>
        <div class="cocktails">
          <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main';

.select {
  width: 220px;
}
.text {
  padding-top: 50px;
  line-height: 36px;
  color: $textMuted;
  letter-spacing: .1em;
  max-width: 516px;
  margin: 0 auto;
}

.img {
  margin-top: 60px;
}

.cocktails {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-content: space-between;
  align-items: start;
  margin-top: 60px;
  flex-wrap: wrap;
  gap: 41px 38px;
  max-height: 400px;
  overflow-y: auto;
  max-width: 555px;
  margin: 0 auto;
}

</style>