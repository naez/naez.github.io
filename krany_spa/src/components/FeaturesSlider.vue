<template>
  <div class="slider-wrapper">
    <div class="slider-container">
      <div class="features-slider">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <article class="features-slider__item">
              <div v-if="slide.type" class="features-slider__item-type">{{ slide.type }}</div>
              <h2 class="features-slider__heading">{{ slide.title }}</h2>
              <div class="features-slider__descr">
                <p>{{ slide.text }}</p>
              </div>
              <a :href="slide.link" class="link">Learn more</a>
            </article>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" id="sliderPagination" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
 
export default {
    name: 'features-slider',
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        slides: [
          {
            id: 1, 
            title: 'First Feature', 
            text: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.', 
            link: '#'
          }, {
            id: 2, 
            title: 'Second Feature', 
            text: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.', 
            link: '#'
          }, {
            id: 3, 
            title: 'Third Feature', 
            text: 'The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother\'s bed, and ate her up.', 
            link: '#'
          }, {
            id: 4,
            type: 'New',
            title: 'Fourth Feature', 
            text: 'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.', 
            link: '#'
          },
        ],
        swiperOptions: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 40,
          pagination: {
            el: '#sliderPagination',
            clickable: true
          },
          breakpoints: {
            1380: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 120
            }, 
            620: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 130
            } 
          }
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  .features-slider {
    max-width: 100%;
  }
  .swiper-slide {
    height: auto;
    display: flex;
  }
  .swiper-container {
    overflow: visible;
  }
  .swiper-slide {
    padding-right: 1.5vw;
    display: flex;
    justify-content: center;
    @media (min-width: 993px) {
      padding-right: 0;
    }
    @media (min-width: 621px) {
      padding-left: 1.5vw;
    }
  }
  .swiper-pagination {
    left: 0;
    right: 0;
    top: 86%;
    text-align: center;
    @media (min-width: 621px) {
      bottom: 10%;
      top: auto;
      right: auto;
    }
  }

</style>
