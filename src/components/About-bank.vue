<template>
  <div class="products">
    <h2 class="products__title">Security Bank products</h2>
    <div class="products__wrapper">
      <div class="products__wrapper--box">
        <h3 class="products__wrapper--box__title">Credit cards</h3>
        <div class="products__wrapper--box__grade">
          <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="products__wrapper--box__grade--stars">
          <p class="products__wrapper--box__grade--quantity">Reviews: 13 546</p>
        </div>
        <div class="products__wrapper--box__options">
          <h4 class="products__wrapper--box__options--number">16</h4>
          <p class="products__wrapper--box__options--text">options</p>
        </div>
        <img src="@/assets/page_bank/credit_card.svg" alt="" class="products__wrapper--box__img">
      </div>
      <div class="products__wrapper--box">
        <h3 class="products__wrapper--box__title">Loans</h3>
        <div class="products__wrapper--box__grade">
          <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="products__wrapper--box__grade--stars">
          <p class="products__wrapper--box__grade--quantity">Reviews: 13 546</p>
        </div>
        <div class="products__wrapper--box__options">
          <h4 class="products__wrapper--box__options--number">16</h4>
          <p class="products__wrapper--box__options--text">options</p>
        </div>
        <img src="@/assets/page_bank/calculator.svg" alt="" class="products__wrapper--box__img">
      </div>
    </div>
  </div>

  <best-options/>

  <div class="about-bank">
    <h2 class="about-bank__title">About Security Bank</h2>
    <div class="about-bank__btn-wrapper">
      <button :class="[isSwitch === 'Rating' ? isActive : '']" class="about-bank__btn-wrapper--button" @click="SwitchRating">Rating and reviews</button>
      <button :class="[isSwitch === 'Contacts' ? isActive : '']" class="about-bank__btn-wrapper--button" @click="SwitchContacts">Contacts</button>
      <button :class="[isSwitch === 'About' ? isActive : '']" class="about-bank__btn-wrapper--button" @click="SwitchAbout">About</button>
    </div>
    <div v-if="SwitchTable === 'Rating'" class="rating-bank-page">
      <h3 class="rating-bank-page--title">Rating and reviews</h3>
      <div class="rating-bank-page--grade">
        <div class="rating-bank-page--grade__star">
          <img src="@/assets/page_credit_cards/page_card/grade_star.svg" alt="" class="rating-bank-page--grade__star--img">
        </div>
        <h2 class="rating-bank-page--grade__number">4,84</h2>
      </div>
      <p class="rating-bank-page--text">Whole rating</p>
      <div class="rating-bank-page--report">
        <div class="rating-bank-page--report__item">
          <p class="rating-bank-page--report__item--name">Reviews</p>
          <h5 class="rating-bank-page--report__item--text">23 450</h5>
        </div>
        <div class="rating-bank-page--report__item">
          <p class="rating-bank-page--report__item--name">Problems solved</p>
          <h5 class="rating-bank-page--report__item--text">890</h5>
        </div>
        <div class="rating-bank-page--report__item">
          <p class="rating-bank-page--report__item--name">Bank answers</p>
          <h5 class="rating-bank-page--report__item--text">22 798</h5>
        </div>
      </div>
      <div class="rating-bank-page--switch-btn">
        <button class="rating-bank-page--switch-btn__button active_switch_bank_page">All services</button>
        <button class="rating-bank-page--switch-btn__button">Credit cards</button>
        <button class="rating-bank-page--switch-btn__button">Loans</button>
      </div>
      <div class="gap-25">
        <div class="rating-bank-page--index">
          <p class="rating-bank-page--index__number">5</p>
          <img src="@/assets/page_credit_cards/page_card/index_stars.svg" alt="" class="rating-bank-page--index__stars">
          <input class="rating-bank-page--index__input" type="range" value="87" />
          <p class="rating-bank-page--index__reviews">45 789</p>
          <p class="rating-bank-page--index__percent">87%</p>
        </div>
        <div class="rating-bank-page--index">
          <p class="rating-bank-page--index__number ">4</p>
          <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="rating-bank-page--index__stars">
          <input class="rating-bank-page--index__input two-percent" type="range" value="2" />
          <p class="rating-bank-page--index__reviews">678</p>
          <p class="rating-bank-page--index__percent">2%</p>
        </div>
        <div class="rating-bank-page--index">
          <p class="rating-bank-page--index__number">3</p>
          <img src="@/assets/page_credit_cards/page_card/three_stars.svg" alt="" class="rating-bank-page--index__stars">
          <input class="rating-bank-page--index__input thirteen-percent" type="range" value="13" />
          <p class="rating-bank-page--index__reviews">5 678</p>
          <p class="rating-bank-page--index__percent">13%</p>
        </div>
        <div class="rating-bank-page--index">
          <p class="rating-bank-page--index__number">2</p>
          <img src="@/assets/page_credit_cards/page_card/two_stars.svg" alt="" class="rating-bank-page--index__stars">
          <input class="rating-bank-page--index__input one-percent" type="range" value="1" />
          <p class="rating-bank-page--index__reviews">341</p>
          <p class="rating-bank-page--index__percent">1%</p>
        </div>
        <div class="rating-bank-page--index">
          <p class="rating-bank-page--index__number">1</p>
          <img src="@/assets/page_credit_cards/page_card/one_stars.svg" alt="" class="rating-bank-page--index__stars">
          <input class="rating-bank-page--index__input two-percent" type="range" value="2" />
          <p class="rating-bank-page--index__reviews">567</p>
          <p class="rating-bank-page--index__percent">2%</p>
        </div>
      </div>
    </div>
    <div v-if="SwitchTable === 'Rating'" class="reviews-bank-page">
      <div class="reviews-bank-page__wrapper">
        <div class="reviews-bank-page__wrapper--box">
          <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-bank-page__wrapper--box__img">
          <h3 class="reviews-bank-page__wrapper--box__title">Lowest percent on credit cards!</h3>
          <p class="reviews-bank-page__wrapper--box__text">In June I applied for a credit card from this bank and was pleased with its...</p>
          <a href="" class="reviews-bank-page__wrapper--box__link">Read whole</a>
          <div class="reviews-bank-page__wrapper--box__grade">
            <img src="../assets/page_svg/stars.svg" alt="">
            <p>02.02.2024</p>
          </div>
        </div>
        <div class="reviews-bank-page__wrapper--box">
          <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-bank-page__wrapper--box__img">
          <h3 class="reviews-bank-page__wrapper--box__title">Great card</h3>
          <p class="reviews-bank-page__wrapper--box__text">I have never seen such a cashback before!!! Easy to use, works with any  I have never seen such a cashback...</p>
          <a href="" class="reviews-bank-page__wrapper--box__link">Read whole</a>
          <div class="reviews-bank-page__wrapper--box__grade">
            <img src="../assets/page_svg/stars.svg" alt="">
            <p>02.02.2024</p>
          </div>
        </div>
        <div class="reviews-bank-page__wrapper--box">
          <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-bank-page__wrapper--box__img">
          <h3 class="reviews-bank-page__wrapper--box__title">Didn’t get my cashback...(</h3>
          <p class="reviews-bank-page__wrapper--box__text">I have always considered this bank to be reliable, serious and with a good  I have never seen such a cashback...</p>
          <a href="" class="reviews-bank-page__wrapper--box__link">Read whole</a>
          <div class="reviews-bank-page__wrapper--box__grade">
            <img src="../assets/page_svg/stars.svg" alt="">
            <p>02.02.2024</p>
          </div>
        </div>
      </div>
      <button-gradient class="btn_reviews">All reviews</button-gradient>
    </div>
    <div v-if="SwitchTable === 'Rating'" class="reviews-bank-page-mobil">
      <Splide :options="{ rewind: true, width: 350, type: 'loop',arrows: false, gap: 25}" aria-label="" >
        <SplideSlide class="Slide_Element">
          <div class="reviews-bank-page-mobil__box">
            <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-bank-page-mobil__box--img">
            <h3 class="reviews-bank-page-mobil__box--title">Lowest percent on credit cards!</h3>
            <p class="reviews-bank-page-mobil__box--text">In June I applied for a credit card from this bank and was pleased with its...</p>
            <div class="reviews-bank-page-mobil__box--bottom">
              <div class="reviews-bank-page-mobil__box--bottom__grade">
                <img src="../assets/page_svg/stars.svg" alt="">
                <p>02.02.2024</p>
              </div>
              <a href="" class="reviews-bank-page-mobil__box--bottom__link">Read whole</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="Slide_Element">
          <div class="reviews-bank-page-mobil__box">
            <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-bank-page-mobil__box--img">
            <h3 class="reviews-bank-page-mobil__box--title">Great card</h3>
            <p class="reviews-bank-page-mobil__box--text">I have never seen such a cashback before!!! Easy to use, works with any  I have never seen such a cashback...</p>
            <div class="reviews-bank-page-mobil__box--bottom">
              <div class="reviews-bank-page-mobil__box--bottom__grade">
                <img src="../assets/page_svg/stars.svg" alt="">
                <p>02.02.2024</p>
              </div>
              <a href="" class="reviews-bank-page-mobil__box--bottom__link">Read whole</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="Slide_Element">
          <div class="reviews-bank-page-mobil__box">
            <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-bank-page-mobil__box--img">
            <h3 class="reviews-bank-page-mobil__box--title">Didn’t get my cashback...(</h3>
            <p class="reviews-bank-page-mobil__box--text">I have always considered this bank to be reliable, serious and with a good  I have never seen such a cashback...</p>
            <div class="reviews-bank-page-mobil__box--bottom">
              <div class="reviews-bank-page-mobil__box--bottom__grade">
                <img src="../assets/page_svg/stars.svg" alt="">
                <p>02.02.2024</p>
              </div>
              <a href="" class="reviews-bank-page-mobil__box--bottom__link">Read whole</a>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <button-gradient class="btn_reviews">All reviews</button-gradient>
    </div>
    <contacts v-if="SwitchTable === 'Contacts'"/>
    <AboutInfoBank v-if="SwitchTable === 'About'"/>
  </div>

  <div class="bank-map">
    <h2 class="bank-map__title">Security Bank offices in <span class="bank-map__title--grey">Manila</span></h2>
    <h2 class="bank-map__title-mobil">All banks of <span class="bank-map__title--grey">Manila</span></h2>
    <div class="bank-map__input">
      <img src="@/assets/item_svg/reused-img/search-img.svg" alt="">
      <input type="text" placeholder="Your city"/>
    </div>
    <div class="bank-map__search">
      <img src="@/assets/page_bank/map_bank.png" alt="" class="bank-map__search--map">
    </div>
  </div>
</template>

<script>

import BestOptions from "@/components/Best-options.vue";
import RatingReviews from "@/components/Rating-reviews.vue";
import ButtonGradient from "@/components/Button-gradient.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Contacts from "@/components/Contacts-bank.vue";
import AboutInfoBank from "@/components/About-info-bank.vue";

export default {
  name: "AboutBank",
  components: {AboutInfoBank, Contacts, ButtonGradient, RatingReviews, BestOptions, Splide, SplideSlide},
  data() {
    return{
      SwitchTable: 'Rating',
      isSwitch: 'Rating',
      isActive: 'active_switch_bank_page',
    }
  },
  methods: {
    SwitchRating() {
      this.SwitchTable = 'Rating';
      this.isSwitch = 'Rating';
    },
    SwitchContacts() {
      this.SwitchTable = 'Contacts';
      this.isSwitch = 'Contacts';
    },
    SwitchAbout() {
      this.SwitchTable = 'About';
      this.isSwitch = 'About';
    }
  }
}
</script>