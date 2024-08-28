<template>
  <div class="container">
    <div class="title-about-us">
      <div class="title-about-us__wrapper">
        <div class="title-about-us__wrapper--info">
          <h1 class="title-about-us__wrapper--info__name">About us</h1>
          <p class="title-about-us__wrapper--info__text">We tell you in detail about the conditions of financial products and help you find the most suitable offers</p>
        </div>
        <div class="title-about-us__wrapper--bloc">
          <img src="../assets/page_about_us/title_bloc_one.svg" alt="">
          <img src="../assets/page_about_us/title_bloc_two.svg" alt="">
          <img src="../assets/page_about_us/title_bloc_three.svg" alt="">
        </div>
      </div>
    </div>

    <div class="title-about-us-mobil">
      <div class="title-about-us-mobil__wrapper">
        <div class="title-about-us-mobil__wrapper--info">
          <h1 class="title-about-us-mobil__wrapper--info__name">About us</h1>
          <p class="title-about-us-mobil__wrapper--info__text">We tell you in detail about the conditions of financial products and help you find the most suitable offers</p>
        </div>
        <div class="title-about-us-mobil__wrapper--bloc">
          <img src="../assets/page_about_us/title_bloc_one_mobil.svg" alt="">
          <img src="../assets/page_about_us/title_bloc_two_mobil.svg" alt="">
          <img src="../assets/page_about_us/title_bloc_three_mobil.svg" alt="">
        </div>
      </div>
    </div>

    <banner-offers class="mt--40"/>

    <div class="services">
      <h2 class="services__title">Why us?</h2>
      <p class="services__text">Our services help you find the best deals on the market</p>
      <div class="services__grid">
        <div class="services__grid--box">
          <div class="services__grid--box__title">
            <img src="@/assets/page_about_us/bag_money.svg" alt="" class="services__grid--box__title--img">
            <h3 class="services__grid--box__title--text">We know where it profitable</h3>
          </div>
          <p class="services__grid--box__content">We will select the most profitable financial product for you and help you submit an application for the product you are interested in.</p>
        </div>
        <div class="services__grid--box">
          <div class="services__grid--box__title">
            <img src="@/assets/page_about_us/clock.svg" alt="" class="services__grid--box__title--img">
            <h3 class="services__grid--box__title--text">We care about your time</h3>
          </div>
          <p class="services__grid--box__content">With smart filter you don't have to spend hours comparing conditions on the websites of different companies.</p>
        </div>
        <div class="services__grid--box">
          <div class="services__grid--box__title">
            <img src="@/assets/page_about_us/comments.svg" alt="" class="services__grid--box__title--img">
            <h3 class="services__grid--box__title--text">We will help you resolve issues</h3>
          </div>
          <p class="services__grid--box__content">On Allbanks.ph you can study bank ratings, responses from users and representatives of organizations, and also write a request yourself - we will help you promptly.</p>
        </div>
        <div class="services__grid--box">
          <div class="services__grid--box__title">
            <img src="@/assets/page_about_us/calendar.svg" alt="" class="services__grid--box__title--img">
            <h3 class="services__grid--box__title--text">Only current information</h3>
          </div>
          <p class="services__grid--box__content">The Allbanks.ph team regularly updates information about products and monitors the latest changes in the financial market, so you see only current offers.</p>
        </div>
      </div>
    </div>

    <div class="partners">
      <h2 class="partners__title">Our partners</h2>
      <p class="partners__text">We work with a large number of banks, insurance companies and microfinance organizations</p>
      <div class="partners__logo-banks">
        <img src="@/assets/page_svg/cinabank_img.svg" alt="">
        <img src="@/assets/page_svg/BDO_img.svg" alt="">
        <img src="@/assets/page_svg/BPI_img.svg" alt="">
        <img src="@/assets/page_svg/Metrobank_img.svg" alt="">
        <img src="@/assets/page_svg/eastwest_img.svg" alt="">
        <img src="@/assets/page_svg/security_bank_img.svg" alt="">
        <img src="@/assets/page_svg/bank_plank_img.svg" alt="">
      </div>
      <img src="@/assets/page_about_us/picture_allbanks.svg" alt="" class="partners__picture">
    </div>

    <div class="partners-mobil">
      <div class="partners-mobil__wrapper">
        <h2 class="partners-mobil__wrapper--title">Our partners</h2>
        <p class="partners-mobil__wrapper--text">We work with a large number of banks, insurance companies and microfinance organizations</p>
        <div class="allbanks-mobil">
          <Splide :options="{ rewind: true, width: 350, type: 'loop', arrows: false, pagination: false, gap: 55, preloadPages: 3}" aria-label="" >
            <SplideSlide  v-for="banks in AllBanks" class="Slide_Element">
              <div class="bank-box">
                <img :src="banks" alt="" class="">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <img src="@/assets/page_about_us/picture_allbanks_mobil.svg" alt="">
      </div>
    </div>

    <div class="our-services">
      <h2 class="our-services__title">Our services</h2>
      <p class="our-services__text">A large number of financial services are available on the Credit Card, which can be used at any convenient time</p>
      <div class="our-services__wrapper">
        <div class="our-services__wrapper--button">
          <div class="our-services__wrapper--button__img">
            <img src="@/assets/page_about_us/our_services/credit-card.svg" alt="">
          </div>
          <h3 class="our-services__wrapper--button__text">Cards</h3>
        </div>
        <div class="our-services__wrapper--button">
          <div class="our-services__wrapper--button__img">
            <img src="@/assets/page_about_us/our_services/piggy-bank.svg" alt="">
          </div>
          <h3 class="our-services__wrapper--button__text">Loans</h3>
        </div>
        <div class="our-services__wrapper--button">
          <div class="our-services__wrapper--button__img">
            <img src="@/assets/page_about_us/our_services/calculator.svg" alt="">
          </div>
          <h3 class="our-services__wrapper--button__text">Loan selection</h3>
        </div>
        <div class="our-services__wrapper--button">
          <div class="our-services__wrapper--button__img">
            <img src="@/assets/page_about_us/our_services/bank.svg" alt="">
          </div>
          <h3 class="our-services__wrapper--button__text">Banks</h3>
        </div>
        <div class="our-services__wrapper--button">
          <div class="our-services__wrapper--button__img">
            <img src="@/assets/page_about_us/our_services/pulse.svg" alt="">
          </div>
          <h3 class="our-services__wrapper--button__text">Credit rating</h3>
        </div>
      </div>
    </div>

    <div class="our-services-mobil">
      <div class="our-services-mobil__wrapper">
        <h2 class="our-services-mobil__wrapper--title">Our partners</h2>
        <p class="partners-mobil__wrapper--text">We work with a large number of banks, insurance companies and microfinance organizations</p>
        <div class="our-services-mobil__wrapper--btn-carousel">
          <Splide :options="{ rewind: true, width: 350, type: 'loop', arrows: false, pagination: false, gap: 30, preloadPages: 3}" aria-label="" >
            <SplideSlide class="Slide_Element">
              <div class="our-services-mobil__wrapper--btn-carousel__btn-box">
                <img src="@/assets/page_about_us/our_services/credit-card.svg" alt="">
                <button-gradient class="our-services-mobil__wrapper--btn-carousel__btn-box--button">Cards</button-gradient>
              </div>
            </SplideSlide>
            <SplideSlide class="Slide_Element">
              <div class="our-services-mobil__wrapper--btn-carousel__btn-box">
                <img src="@/assets/page_about_us/our_services/piggy-bank.svg" alt="">
                <button-gradient class="our-services-mobil__wrapper--btn-carousel__btn-box--button">Loans</button-gradient>
              </div>
            </SplideSlide>
            <SplideSlide class="Slide_Element">
              <div class="our-services-mobil__wrapper--btn-carousel__btn-box">
                <img src="@/assets/page_about_us/our_services/calculator.svg" alt="">
                <button-gradient class="our-services-mobil__wrapper--btn-carousel__btn-box--button">Loan selection</button-gradient>
              </div>
            </SplideSlide>
            <SplideSlide class="Slide_Element">
              <div class="our-services-mobil__wrapper--btn-carousel__btn-box">
                <img src="@/assets/page_about_us/our_services/bank.svg" alt="">
                <button-gradient class="our-services-mobil__wrapper--btn-carousel__btn-box--button">Banks</button-gradient>
              </div>
            </SplideSlide>
            <SplideSlide class="Slide_Element">
              <div class="our-services-mobil__wrapper--btn-carousel__btn-box">
                <img src="@/assets/page_about_us/our_services/pulse.svg" alt="">
                <button-gradient class="our-services-mobil__wrapper--btn-carousel__btn-box--button">Credit rating</button-gradient>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>

    <client-reviews/>

    <div class="input-message">
      <h2 class="input-message__title">Write to us</h2>
      <p class="input-message__text">Are you interested in work, advertising or cooperation? Can you suggest steps to improve the service or point out shortcomings? Write to us about this and we will respond as soon as possible.</p>
      <div class="input-message__wrapper">
        <div class="input-message__wrapper--input-data">
          <select class="input-message__wrapper--input-data__select">
            <option class="input-message__wrapper--input-data__select--option">About</option>
            <option>Cooperation</option>
            <option>Add</option>
            <option>Proposal</option>
            <option>Site error</option>
            <option>Other</option>
          </select>
          <input type="email" placeholder="email" pattern=".+@beststartupever\.com" class="input-message__wrapper--input-data__input-email" />
        </div>
        <input type="text" placeholder="Your message" class="input-message__wrapper--message">
      </div>
      <button-gradient class="input-message__btn-send">Send</button-gradient>
    </div>
  </div>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import InputText from "@/components/Input-text.vue";
import ClientReviews from "@/components/Client-reviews.vue";
import BannerOffers from "@/components/Banner-offers.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: 'AboutUs',
  components: {BannerOffers, ClientReviews, InputText, ButtonGradient, Splide, SplideSlide},
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