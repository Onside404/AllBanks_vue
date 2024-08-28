<template>
  <div class="navi-card">
    <div class="card-head">
      <div class="card-head__description">
        <div class="card-head__description--logo">
          <img src="@/assets/page_credit_cards/page_card/logo_bank.svg" alt="">
          <div class="card-head__description--logo__name">
            <h1 class="card-head__description--logo__name--title">Platinum</h1>
            <h3 class="card-head__description--logo__name--text">Security bank</h3>
          </div>
        </div>
        <div class="card-head__description--params">
          <div class="card-head__description--params__item">
            <p class="card-head__description--params__item--title">Grace period</p>
            <h4 class="card-head__description--params__item--text">Up to 55 d.</h4>
          </div>
          <div class="card-head__description--params__item">
            <p class="card-head__description--params__item--title">Credit limit</p>
            <h4 class="card-head__description--params__item--text">Up to 1 000 000 ₱</h4>
          </div>
          <div class="card-head__description--params__item">
            <p class="card-head__description--params__item--title">Service cost</p>
            <h4 class="card-head__description--params__item--text">5 000 ₱ a year</h4>
          </div>
        </div>
      </div>
      <div class="card-head__btn">
        <img src="@/assets/credit_cards/SecurityBank_card.png" alt="" class="card-head__btn--img">
        <button-gradient>Apply for a card</button-gradient>
      </div>
    </div>
    <div class="card-head-mobil">
      <div class="card-head-mobil__logo">
        <img src="@/assets/page_credit_cards/page_card/logo_bank.svg" alt="" class="card-head-mobil__logo--img">
        <div class="card-head-mobil__logo--name">
          <h1 class="card-head-mobil__logo--name__title">Platinum</h1>
          <h3 class="card-head-mobil__logo--name__text">Security bank</h3>
        </div>
      </div>
      <div class="card-head-mobil__wrapper">
        <img src="@/assets/credit_cards/SecurityBank_card.png" alt="" class="card-head-mobil__wrapper--img">
        <div class="card-head-mobil__wrapper--description">
          <div class="card-head-mobil__wrapper--description__item">
            <p class="card-head-mobil__wrapper--description__item__title">Grace period</p>
            <h4 class="card-head-mobil__wrapper--description__item__text">Up to 55 d.</h4>
          </div>
          <div class="card-head-mobil__wrapper--description__item">
            <p class="card-head-mobil__wrapper--description__item__title">Credit limit</p>
            <h4 class="card-head-mobil__wrapper--description__item__text">Up to 1 000 000 ₱</h4>
          </div>
          <div class="card-head-mobil__wrapper--description__item">
            <p class="card-head-mobil__wrapper--description__item__title">Service cost</p>
            <h4 class="card-head-mobil__wrapper--description__item__text">5 000 ₱ a year</h4>
          </div>
        </div>
        <button-gradient>Apply for a card</button-gradient>
      </div>
    </div>
    <div class="navi-card__btn-switch">
      <button :class="[SwitchClass === 'About' ? isActive : '']" class="navi-card__btn-switch--button" @click="SwitchAbout">About</button>
      <button :class="[SwitchClass === 'Reviews' ? isActive : '']" class="navi-card__btn-switch--button" @click="SwitchReviews">Reviews</button>
    </div>
  </div>

  <AboutBlock v-if="SwitchPage === 'About'"/>
  <ReviewsBlock v-if="SwitchPage === 'Reviews'" />

  <best-options v-if="SwitchPage === 'About'"/>

  <offer-banks v-if="SwitchPage === 'About'"/>
  <offers-links v-if="SwitchPage === 'About'"/>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import OfferBanks from "@/components/Offer-banks.vue";
import OffersLinks from "@/components/Offers-links.vue";
import AboutBlock from "@/components/About-block.vue";
import ReviewsBlock from "@/components/Reviews-block.vue";
import BestOptions from "@/components/Best-options.vue";

export default {
  name: "Card",
  components: {BestOptions, ReviewsBlock, AboutBlock, OffersLinks, OfferBanks, ButtonGradient},
  data() {
    return {
      SwitchPage: 'About',
      SwitchClass: 'About',
      isActive: 'active_page',
    }
  },
  methods: {
    SwitchAbout() {
      this.SwitchPage = 'About';
      this.SwitchClass = 'About';
    },
    SwitchReviews() {
      this.SwitchPage = 'Reviews';
      this.SwitchClass = 'Reviews';
    },
  }
}
</script>