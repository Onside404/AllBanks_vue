<template>
  <div class="rating">
    <h3 class="rating--title">Rating and reviews</h3>
    <div class="rating--grade">
      <div class="rating--grade__star">
        <img src="@/assets/page_credit_cards/page_card/grade_star.svg" alt="" class="rating--grade__star--img">
      </div>
      <h2 class="rating--grade__number">4,84</h2>
    </div>
    <p class="rating--text">Whole rating</p>
    <div class="rating--report">
      <div class="rating--report__item">
        <p class="rating--report__item--name">Reviews</p>
        <h5 class="rating--report__item--text">23 450</h5>
      </div>
      <div class="rating--report__item">
        <p class="rating--report__item--name">Problems solved</p>
        <h5 class="rating--report__item--text">890</h5>
      </div>
      <div class="rating--report__item">
        <p class="rating--report__item--name">Bank answers</p>
        <h5 class="rating--report__item--text">22 798</h5>
      </div>
    </div>
    <div class="rating--switch-btn">
      <button class="rating--switch-btn__button active_switch">All services</button>
      <button class="rating--switch-btn__button">Credit cards</button>
      <button class="rating--switch-btn__button">Loans</button>
    </div>
    <div class="gap-25">
      <div class="rating--index">
        <p class="rating--index__number">5</p>
        <img src="@/assets/page_credit_cards/page_card/index_stars.svg" alt="" class="rating--index__stars">
        <input class="rating--index__input" type="range" value="87" />
        <p class="rating--index__reviews">45 789</p>
        <p class="rating--index__percent">87%</p>
      </div>
      <div class="rating--index">
        <p class="rating--index__number ">4</p>
        <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="rating--index__stars">
        <input class="rating--index__input two-percent" type="range" value="2" />
        <p class="rating--index__reviews">678</p>
        <p class="rating--index__percent">2%</p>
      </div>
      <div class="rating--index">
        <p class="rating--index__number">3</p>
        <img src="@/assets/page_credit_cards/page_card/three_stars.svg" alt="" class="rating--index__stars">
        <input class="rating--index__input thirteen-percent" type="range" value="13" />
        <p class="rating--index__reviews">5 678</p>
        <p class="rating--index__percent">13%</p>
      </div>
      <div class="rating--index">
        <p class="rating--index__number">2</p>
        <img src="@/assets/page_credit_cards/page_card/two_stars.svg" alt="" class="rating--index__stars">
        <input class="rating--index__input one-percent" type="range" value="1" />
        <p class="rating--index__reviews">341</p>
        <p class="rating--index__percent">1%</p>
      </div>
      <div class="rating--index">
        <p class="rating--index__number">1</p>
        <img src="@/assets/page_credit_cards/page_card/one_stars.svg" alt="" class="rating--index__stars">
        <input class="rating--index__input two-percent" type="range" value="2" />
        <p class="rating--index__reviews">567</p>
        <p class="rating--index__percent">2%</p>
      </div>
    </div>
  </div>
  <div class="reviews-bank">
    <div class="reviews-bank__wrapper">
      <div class="reviews-bank__wrapper--box">
        <img src="../assets/page_credit_cards/page_card/security_img.svg" alt="" class="reviews-bank__wrapper--box__img">
        <h3 class="reviews-bank__wrapper--box__title">Lowest percent on credit cards!</h3>
        <p class="reviews-bank__wrapper--box__text">In June I applied for a credit card from this bank and was pleased with its...</p>
        <a href="" class="reviews-bank__wrapper--box__link">Read whole</a>
        <div class="reviews-bank__wrapper--box__grade">
          <img src="../assets/page_svg/stars.svg" alt="">
          <p>02.02.2024</p>
        </div>
      </div>
      <div class="reviews-bank__wrapper--box">
        <img src="../assets/page_credit_cards/page_card/security_img.svg" alt="" class="reviews-bank__wrapper--box__img">
        <h3 class="reviews-bank__wrapper--box__title">Great card</h3>
        <p class="reviews-bank__wrapper--box__text">I have never seen such a cashback before!!! Easy to use, works with any  I have never seen such a cashback...</p>
        <a href="" class="reviews-bank__wrapper--box__link">Read whole</a>
        <div class="reviews-bank__wrapper--box__grade">
          <img src="../assets/page_svg/stars.svg" alt="">
          <p>02.02.2024</p>
        </div>
      </div>
      <div class="reviews-bank__wrapper--box">
        <img src="../assets/page_credit_cards/page_card/security_img.svg" alt="" class="reviews-bank__wrapper--box__img">
        <h3 class="reviews-bank__wrapper--box__title">Didn’t get my cashback...(</h3>
        <p class="reviews-bank__wrapper--box__text">I have always considered this bank to be reliable, serious and with a good  I have never seen such a cashback...</p>
        <a href="" class="reviews-bank__wrapper--box__link">Read whole</a>
        <div class="reviews-bank__wrapper--box__grade">
          <img src="../assets/page_svg/stars.svg" alt="">
          <p>02.02.2024</p>
        </div>
      </div>
    </div>
    <button-gradient class="btn_reviews">All reviews</button-gradient>
  </div>
  <div class="reviews-bank-mobil">
    <Splide :options="{ rewind: true, width: 350, type: 'loop',arrows: false, gap: 25}" aria-label="" >
      <SplideSlide class="Slide_Element">
        <div class="reviews-bank-mobil__box">
          <img src="../assets/page_credit_cards/page_card/security_img.svg" alt="" class="reviews-bank-mobil__box--img">
          <h3 class="reviews-bank-mobil__box--title">Lowest percent on credit cards!</h3>
          <p class="reviews-bank-mobil__box--text">In June I applied for a credit card from this bank and was pleased with its...</p>
          <div class="reviews-bank-mobil__box--bottom">
            <div class="reviews-bank-mobil__box--bottom__grade">
              <img src="../assets/page_svg/stars.svg" alt="">
              <p>02.02.2024</p>
            </div>
            <a href="" class="reviews-bank-mobil__box--bottom__link">Read whole</a>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="Slide_Element">
        <div class="reviews-bank-mobil__box">
          <img src="../assets/page_credit_cards/page_card/security_img.svg" alt="" class="reviews-bank-mobil__box--img">
          <h3 class="reviews-bank-mobil__box--title">Great card</h3>
          <p class="reviews-bank-mobil__box--text">I have never seen such a cashback before!!! Easy to use, works with any  I have never seen such a cashback...</p>
          <div class="reviews-bank-mobil__box--bottom">
            <div class="reviews-bank-mobil__box--bottom__grade">
              <img src="../assets/page_svg/stars.svg" alt="">
              <p>02.02.2024</p>
            </div>
            <a href="" class="reviews-bank-mobil__box--bottom__link">Read whole</a>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="Slide_Element">
        <div class="reviews-bank-mobil__box">
          <img src="../assets/page_credit_cards/page_card/security_img.svg" alt="" class="reviews-bank-mobil__box--img">
          <h3 class="reviews-bank-mobil__box--title">Didn’t get my cashback...(</h3>
          <p class="reviews-bank-mobil__box--text">I have always considered this bank to be reliable, serious and with a good  I have never seen such a cashback...</p>
          <div class="reviews-bank-mobil__box--bottom">
            <div class="reviews-bank-mobil__box--bottom__grade">
              <img src="../assets/page_svg/stars.svg" alt="">
              <p>02.02.2024</p>
            </div>
            <a href="" class="reviews-bank-mobil__box--bottom__link">Read whole</a>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <button-gradient class="btn_reviews">All reviews</button-gradient>
  </div>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: "RatingReviews",
  components: {ButtonGradient, Splide, SplideSlide},
}
</script>