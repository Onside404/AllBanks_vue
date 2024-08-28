<template>
  <div class="reviews full-none">
    <h2 class="reviews__title">Client reviews</h2>
    <p class="reviews__text">Latest reviews about banking products</p>
    <div class="reviews__wrapper">
      <div class="reviews__wrapper--box">
        <img src="../assets/page_svg/reviews_img_1.svg" alt="" class="reviews__wrapper--box__img">
        <h3 class="reviews__wrapper--box__title">Lowest percent on credit cards!</h3>
        <p class="reviews__wrapper--box__text">In June I applied for a credit card from this bank and was pleased with its...</p>
        <a href="" class="reviews__wrapper--box__link">Read whole</a>
        <div class="reviews__wrapper--box__grade">
          <img src="../assets/page_svg/stars.svg" alt="">
          <p>02.02.2024</p>
        </div>
      </div>
      <div class="reviews__wrapper--box">
        <img src="../assets/page_svg/reviews_img_2.svg" alt="" class="reviews__wrapper--box__img">
        <h3 class="reviews__wrapper--box__title">Great card</h3>
        <p class="reviews__wrapper--box__text">I have never seen such a cashback before!!! Easy to use, works with any  I have never seen such a cashback...</p>
        <a href="" class="reviews__wrapper--box__link">Read whole</a>
        <div class="reviews__wrapper--box__grade">
          <img src="../assets/page_svg/stars.svg" alt="">
          <p>02.02.2024</p>
        </div>
      </div>
      <div class="reviews__wrapper--box">
        <img src="../assets/page_svg/reviews_img_3.svg" alt="" class="reviews__wrapper--box__img">
        <h3 class="reviews__wrapper--box__title">Didn’t get my cashback...(</h3>
        <p class="reviews__wrapper--box__text">I have always considered this bank to be reliable, serious and with a good  I have never seen such a cashback...</p>
        <a href="" class="reviews__wrapper--box__link">Read whole</a>
        <div class="reviews__wrapper--box__grade">
          <img src="../assets/page_svg/stars.svg" alt="">
          <p>02.02.2024</p>
        </div>
      </div>
    </div>
    <button-gradient class="btn_reviews">All reviews</button-gradient>
  </div>
  <div class="reviews-mobil">
    <h2 class="reviews-mobil__title">Client reviews</h2>
    <p class="reviews-mobil__text">Latest reviews about banking products</p>
    <div class="reviews-mobil__wrapper">
      <Splide :options="{ rewind: true, width: 350, type: 'loop',arrows: false, gap: 16}" aria-label="" >
        <SplideSlide class="Slide_Element">
          <div class="reviews-mobil__wrapper--box">
            <img src="../assets/page_svg/reviews_img_1.svg" alt="">
            <h3 class="reviews-mobil__wrapper--box__title">Lowest percent on credit cards!</h3>
            <p class="reviews-mobil__wrapper--box__text">In June I applied for a credit card from this bank and was pleased with its...</p>
            <div class="reviews-mobil__wrapper--box__bottom">
              <div class="reviews-mobil__wrapper--box__bottom--grade">
                <img src="../assets/page_svg/stars.svg" alt="">
                <p>02.02.2024</p>
              </div>
              <a href="" class="reviews-mobil__wrapper--box__bottom--link">Read whole</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="Slide_Element">
          <div class="reviews-mobil__wrapper--box">
            <img src="../assets/page_svg/reviews_img_2.svg" alt="">
            <h3 class="reviews-mobil__wrapper--box__title">Great card</h3>
            <p class="reviews-mobil__wrapper--box__text">I have never seen such a cashback before!!! Easy to use, works with any  I have never seen such a cashback...</p>
            <div class="reviews-mobil__wrapper--box__bottom">
              <div class="reviews-mobil__wrapper--box__bottom--grade">
                <img src="../assets/page_svg/stars.svg" alt="">
                <p>02.02.2024</p>
              </div>
              <a href="" class="reviews-mobil__wrapper--box__bottom--link">Read whole</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="Slide_Element">
          <div class="reviews-mobil__wrapper--box">
            <img src="../assets/page_svg/reviews_img_3.svg" alt="">
            <h3 class="reviews-mobil__wrapper--box__title">Didn’t get my cashback...</h3>
            <p class="reviews-mobil__wrapper--box__text">I have always considered this bank to be reliable, serious and with a good  I have never seen such a cashback...</p>
            <div class="reviews-mobil__wrapper--box__bottom">
              <div class="reviews-mobil__wrapper--box__bottom--grade">
                <img src="../assets/page_svg/stars.svg" alt="">
                <p>02.02.2024</p>
              </div>
              <a href="" class="reviews-mobil__wrapper--box__bottom--link">Read whole</a>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <button-gradient class="btn_reviews">All reviews</button-gradient>
    </div>
  </div>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

  export default {
    name: "ClientReviews",
    components: {ButtonGradient, Splide, SplideSlide}
  }
</script>
