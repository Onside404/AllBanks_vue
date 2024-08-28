<template>
  <div class="title">
    <div class="title--wrapper">
      <h1 class="title--wrapper__text">Selecting and<br> comparing of <br><span class="title--wrapper__text--yellow">CREDIT PRODUCTS</span></h1>
      <div class="title--wrapper__img">
        <img class="" src="@/assets/page_svg/title_img.svg" alt="">
      </div>
    </div>
  </div>
  <div class="title-mobil">
    <div class="title-mobil__wrapper">
      <h1 class="title-mobil__wrapper--title">Selecting and comparing of </h1>
      <span class="title-mobil__wrapper--yellow">CREDIT PRODUCTS</span>
      <p class="title-mobil__wrapper--text">Profitable propositions of banks in 2024</p>
    </div>
    <img class="title-mobil__img" src="@/assets/page_svg/title_img_mobil.svg" alt="">
  </div>

  <input-credit-card></input-credit-card>

  <div class="container_allbanks">
    <h2 class="container_allbanks__title">All banks of <span class="container_allbanks__title--grey">Manila</span></h2>
    <p class="container_allbanks__text">On Kreditka.com You’ll always find a bank, wich will approve your loan</p>
    <div class="container_allbanks__input">
      <InputText v-model:aria-placeholder="bank"></InputText>
      <InputText class="full-none"></InputText>
    </div>
    <div class="container_allbanks__logo-banks">
      <img src="@/assets/page_svg/cinabank_img.svg" alt="">
      <img src="@/assets/page_svg/BDO_img.svg" alt="">
      <img src="@/assets/page_svg/BPI_img.svg" alt="">
      <img src="@/assets/page_svg/Metrobank_img.svg" alt="">
      <img src="@/assets/page_svg/eastwest_img.svg" alt="">
      <img src="@/assets/page_svg/security_bank_img.svg" alt="">
      <img src="@/assets/page_svg/bank_plank_img.svg" alt="">
    </div>
  </div>
  <div class="allbanks-mobil">
    <Splide :options="{ rewind: true, width: 350, type: 'loop', arrows: false, pagination: false, gap: 55, preloadPages: 3}" aria-label="" >
      <SplideSlide  v-for="banks in AllBanks" class="Slide_Element">
        <div class="bank-box">
          <img :src="banks" alt="" class="">
        </div>
      </SplideSlide>
    </Splide>
  </div>

  <div class="loans">
    <h2 class="loans__title">Loan with accurate conditions</h2>
    <p class="loans__text">Find your best options on Kreditka.com</p>
    <div class="loans__wrapper">
      <div class="loans__wrapper--box">
        <h3 class="loans__wrapper--box__title">We’ll find a loan for you</h3>
        <ul class="loans__wrapper--box__list">
          <li class="list-dash">We’ll help you a loan for your parameteres with the best % rate, fast</li>
          <li class="list-dash">We use only relevant information about banks propositions</li>
          <li class="list-dash">All data is reserved and proceed in syphered conditions</li>
        </ul>
      </div>
      <div class="loans__wrapper--box">
        <h3 class="loans__wrapper--box__title">Fill your own blank</h3>
        <ul class="loans__wrapper--box__list">
          <li class="list-dash mb-8">Send your application within martch 22 - june 23</li>
          <li class="list-dash">Apply for a loan before the 9th of july</li>
        </ul>
        <button-gradient class="btn_loans">Apply</button-gradient>
      </div>
    </div>
  </div>

  <div class="loans-mobil">
    <h2 class="loans-mobil__title">Loan with accurate conditions</h2>
    <p class="loans-mobil__text">Find your best options on Kreditka.com</p>
    <div class="loans-mobil__wrapper">
      <div class="loans-mobil__wrapper--box mb-25">
        <h3 class="loans-mobil__wrapper--box__title">We’ll find a loan for you</h3>
        <ul class="loans-mobil__wrapper--box__list">
          <li class="list-dash">We’ll help you a loan for your parameteres with the best % rate, fast</li>
          <li class="list-dash">We use only relevant information about banks propositions</li>
          <li class="list-dash">All data is reserved and proceed in syphered conditions</li>
        </ul>
      </div>
      <div class="loans-mobil__wrapper--box">
        <h3 class="loans-mobil__wrapper--box__title">Fill your own blank</h3>
        <ul class="loans-mobil__wrapper--box__list">
          <li class="list-dash mb-10">Send your application within martch 22 - june 23</li>
          <li class="list-dash">Apply for a loan before the 9th of july</li>
        </ul>
        <button-gradient class="btn_loans">Apply</button-gradient>
      </div>
    </div>
  </div>

  <div class="priv">
    <h2 class="priv__title">Our priviledges</h2>
    <div class="priv__wrapper">
      <div class="priv__wrapper--box">
        <img src="../assets/page_svg/priv_img_1.svg" alt="">
        <div class="priv__wrapper--box__content">
          <h3 class="priv__wrapper--box__content--title w-125">Wide choice</h3>
          <p class="priv__wrapper--box__content--text">Access to wide variety of finantial products from different banks</p>
        </div>
      </div>
      <div class="priv__wrapper--box">
        <img src="../assets/page_svg/priv_img_2.svg" alt="">
        <div class="priv__wrapper--box__content">
          <h3 class="priv__wrapper--box__content--title">Apply where it’s convenient</h3>
          <p class="priv__wrapper--box__content--text">You can choose going to an office or do everything online</p>
        </div>
      </div>
      <div class="priv__wrapper--box">
        <img src="../assets/page_svg/priv_img_3.svg" alt="">
        <div class="priv__wrapper--box__content">
          <h3 class="priv__wrapper--box__content--title">No hidden conditions</h3>
          <p class="priv__wrapper--box__content--text">Neutral and objective information about accessable products</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bank-rating">
    <h2 class="bank-rating__title">Bank rating</h2>
    <div class="bank-rating__wrapper">
      <div class="bank-rating__wrapper--header">
        <p class="bank-rating__wrapper--header__text pr-220">Bank</p>
        <p class="bank-rating__wrapper--header__text pr-95">Rating</p>
        <p class="bank-rating__wrapper--header__text pr-65">Reviews</p>
        <p class="bank-rating__wrapper--header__text pr-55">Answered</p>
        <p class="bank-rating__wrapper--header__text">Problems solved</p>
      </div>
      <div class="bank-rating__wrapper--gap">
        <div class="bank-rating__wrapper--gap__box">
          <div class="bank-rating__wrapper--gap__box__place">
            <img src="../assets/item_svg/bank-rating/first_place_left.svg" alt="" class="bank-rating__wrapper--gap__box__place--crown">
            <p class="bank-rating__wrapper--gap__box__place--number first">1</p>
            <img src="../assets/item_svg/bank-rating/first_place_right.svg" alt="" class="bank-rating__wrapper--gap__box__place--crown">
          </div>
          <div class="bank-rating__wrapper--gap__box__logo">
            <img src="@/assets/item_svg/bank-rating/BDO_bank.svg" alt="">
          </div>
          <img src="@/assets/item_svg/bank-rating/stars_five.svg" alt="" class="bank-rating__wrapper--gap__box__grade">
          <p class="bank-rating__wrapper--gap__box__text">45 000</p>
          <p class="bank-rating__wrapper--gap__box__text">30 000</p>
          <p class="bank-rating__wrapper--gap__box__text">80%</p>
        </div>
        <div class="bank-rating__wrapper--gap__box">
          <div class="bank-rating__wrapper--gap__box__place">
            <img src="../assets/item_svg/bank-rating/second_place_left.svg" alt="" class="bank-rating__wrapper--gap__box__place--crown">
            <p class="bank-rating__wrapper--gap__box__place--number second">2</p>
            <img src="../assets/item_svg/bank-rating/second_place_right.svg" alt="" class="bank-rating__wrapper--gap__box__place--crown">
          </div>
          <div class="bank-rating__wrapper--gap__box__logo">
            <img src="@/assets/item_svg/bank-rating/RCBC.svg" alt="">
          </div>
          <img src="@/assets/item_svg/bank-rating/stars_five.svg" alt="" class="bank-rating__wrapper--gap__box__grade">
          <p class="bank-rating__wrapper--gap__box__text">45 000</p>
          <p class="bank-rating__wrapper--gap__box__text">30 000</p>
          <p class="bank-rating__wrapper--gap__box__text">80%</p>
        </div>
        <div class="bank-rating__wrapper--gap__box">
          <div class="bank-rating__wrapper--gap__box__place">
            <img src="../assets/item_svg/bank-rating/third_place_left.svg" alt="" class="bank-rating__wrapper--gap__box__place--crown">
            <p class="bank-rating__wrapper--gap__box__place--number third">3</p>
            <img src="../assets/item_svg/bank-rating/third_place_right.svg" alt="" class="bank-rating__wrapper--gap__box__place--crown">
          </div>
          <div class="bank-rating__wrapper--gap__box__logo">
            <img src="@/assets/item_svg/bank-rating/cinabank_img.svg" alt="" >
          </div>
          <img src="@/assets/item_svg/bank-rating/stars_five.svg" alt="" class="bank-rating__wrapper--gap__box__grade">
          <p class="bank-rating__wrapper--gap__box__text">45 000</p>
          <p class="bank-rating__wrapper--gap__box__text">30 000</p>
          <p class="bank-rating__wrapper--gap__box__text">80%</p>
        </div>
        <div class="bank-rating__wrapper--gap__box">
          <div class="bank-rating__wrapper--gap__box__place">
            <p class="bank-rating__wrapper--gap__box__place--number">4</p>
          </div>
          <div class="bank-rating__wrapper--gap__box__logo">
            <img src="@/assets/item_svg/bank-rating/DBP.svg" alt="" >
          </div>
          <img src="@/assets/item_svg/bank-rating/stars_four.svg" alt="" class="bank-rating__wrapper--gap__box__grade">
          <p class="bank-rating__wrapper--gap__box__text">45 000</p>
          <p class="bank-rating__wrapper--gap__box__text">30 000</p>
          <p class="bank-rating__wrapper--gap__box__text">80%</p>
        </div>
      </div>
      <div class="bank-rating__wrapper--btn">
        <button-gradient>View whole rating</button-gradient>
      </div>
    </div>
  </div>

  <div class="bank-rating-mobil">
    <h2 class="bank-rating-mobil__title">Bank rating</h2>
    <Splide :options="{ rewind: true, width: 350, type: 'loop', arrows: false, pagination: false, gap: 55, preloadPages: 3}" aria-label="" >
      <SplideSlide class="bank-rating-mobil__wrapper Slide_Element">
        <div class="bank-rating-mobil__wrapper--header">
          <p class="bank-rating-mobil__wrapper--header__text">Bank</p>
        </div>
        <div class="bank-rating-mobil__wrapper--box">
          <div class="bank-rating-mobil__wrapper--box__place">
            <img src="../assets/item_svg/bank-rating/first_place_left.svg" alt="" class="bank-rating-mobil__wrapper--box__place--crown">
            <p class="bank-rating-mobil__wrapper--box__place--number first">1</p>
            <img src="../assets/item_svg/bank-rating/first_place_right.svg" alt="" class="bank-rating-mobil__wrapper--box__place--crown">
          </div>
          <div class="bank-rating-mobil__wrapper--box__logo">
            <img src="@/assets/item_svg/bank-rating/BDO_bank.svg" alt="">
          </div>
        </div>
        <hr class="bank-rating-mobil__wrapper--line" />
      </SplideSlide>
      <SplideSlide class="bank-rating-mobil__wrapper Slide_Element">
        <div class="bank-rating-mobil__wrapper--header">
          <p class="bank-rating-mobil__wrapper--header__text">Rating</p>
        </div>
        <div class="bank-rating-mobil__wrapper--box">
          <div class="bank-rating-mobil__wrapper--box__grade">
            <img src="@/assets/item_svg/bank-rating/stars_five.svg" alt="">
          </div>
        </div>
        <hr class="bank-rating-mobil__wrapper--line" />
      </SplideSlide>
      <SplideSlide class="bank-rating-mobil__wrapper Slide_Element">
        <div class="bank-rating-mobil__wrapper--header">
          <p class="bank-rating-mobil__wrapper--header__text">Reviews</p>
        </div>
        <div class="bank-rating-mobil__wrapper--box">
          <p class="bank-rating-mobil__wrapper--box__text">45 000</p>
        </div>
        <hr class="bank-rating-mobil__wrapper--line" />
      </SplideSlide>
      <SplideSlide class="bank-rating-mobil__wrapper Slide_Element">
        <div class="bank-rating-mobil__wrapper--header">
          <p class="bank-rating-mobil__wrapper--header__text">Answered</p>
        </div>
        <div class="bank-rating-mobil__wrapper--box">
          <p class="bank-rating-mobil__wrapper--box__text">30 000</p>
        </div>
        <hr class="bank-rating-mobil__wrapper--line" />
      </SplideSlide>
      <SplideSlide class="bank-rating-mobil__wrapper Slide_Element">
        <div class="bank-rating-mobil__wrapper--header">
          <p class="bank-rating-mobil__wrapper--header__text">Problems solved</p>
        </div>
        <div class="bank-rating-mobil__wrapper--box">
          <p class="bank-rating-mobil__wrapper--box__text">80%</p>
        </div>
        <hr class="bank-rating-mobil__wrapper--line" />
      </SplideSlide>
    </Splide>
  </div>

  <ClientReviews/>

</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import InputText from "@/components/Input-text.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import InputCreditCard from "@/components/Input-credit-card.vue";
import ClientReviews from "@/components/Client-reviews.vue";

export default {
  name: 'HomeView',
  components: {ClientReviews, InputCreditCard, Footer, Navbar, InputText, ButtonGradient, Splide, SplideSlide},
  data() {
    return {
      AllBanks: [
        require('@/assets/page_svg/cinabank_img.svg'),
        require('@/assets/page_svg/BDO_img.svg'),
        require('@/assets/page_svg/BPI_img.svg'),
        require('@/assets/page_svg/Metrobank_img.svg'),
        require('@/assets/page_svg/eastwest_img.svg'),
        require('@/assets/page_svg/security_bank_img.svg'),
        require('@/assets/page_svg/bank_plank_img.svg'),

      ]
    }
  }
}
</script>
