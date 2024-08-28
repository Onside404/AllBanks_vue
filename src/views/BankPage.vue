<template>
  <div class="bank-title">
    <div class="bank-title__wrapper">
      <div class="bank-title__wrapper--logo">
        <img src="@/assets/page_bank/logo_security_bank.svg" alt="" class="bank-title__wrapper--logo__img">
        <div class="bank-title__wrapper--logo__name">
          <h1 class="bank-title__wrapper--logo__name--text">Security Bank</h1>
          <div class="bank-title__wrapper--logo__name--grade">
            <img src="@/assets/page_bank/star_grade.svg" alt="" class="bank-title__wrapper--logo__name--grade__star">
            <p class="bank-title__wrapper--logo__name--grade__number">4,84</p>
          </div>
        </div>
      </div>
      <div class="bank-title__wrapper--write-review">
        <div class="bank-title__wrapper--write-review__input">
          <img src="@/assets/page_bank/crown.svg" alt="">
          <input type="text" placeholder="Best loan option on AllBanks" >
        </div>
        <button-gradient class="bank-title__wrapper--write-review__btn">Write a review</button-gradient>
      </div>
      <div class="bank-title__wrapper--btn-switch">
        <button :class="[SwitchClass === 'About' ? isActive : '']" class="bank-title__wrapper--btn-switch__button" @click="SwitchAbout">About</button>
        <button class="bank-title__wrapper--btn-switch__button">Credit cards</button>
        <button class="bank-title__wrapper--btn-switch__button">Apply online</button>
        <button :class="[SwitchClass === 'Reviews' ? isActive : '']" class="bank-title__wrapper--btn-switch__button" @click="SwitchReviews">Reviews</button>
      </div>
    </div>
  </div>

  <about-bank v-if="SwitchPage === 'About'"/>
  <reviews-banks v-if="SwitchPage === 'Reviews'"/>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import BestOptions from "@/components/Best-options.vue";
import RatingReviews from "@/components/Rating-reviews.vue";
import AboutBank from "@/components/About-bank.vue";
import ReviewsBanks from "@/components/Reviews-bank.vue";

export default {
  name: "BankPage",
  components: {ReviewsBanks, AboutBank, RatingReviews, BestOptions, ButtonGradient},
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
