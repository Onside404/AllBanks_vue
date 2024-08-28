<template>
  <div class="about">
    <h2 class="about__title">About credit card</h2>
    <div class="about__btn-switch-desk">
      <button :class="[isSwitch === 'Rates' ? isActive : '']" class="about__btn-switch-desk--button" @click="SwitchRates">Rates</button>
      <button :class="[isSwitch === 'Bonuses' ? isActive : '']" class="about__btn-switch-desk--button" @click="SwitchBonuses">Bonuses</button>
      <button :class="[isSwitch === 'Requirements and documents' ? isActive : '']" class="about__btn-switch-desk--button">Requirements and documents</button>
      <button :class="[isSwitch === 'Rating and reviews' ? isActive : '']" class="about__btn-switch-desk--button" @click="SwitchRating">Rating and reviews</button>
    </div>
    <div v-if="SwitchTable === 'Rates'" class="about__table">
      <div class="about__table--row table-bg-dark">
        <h3 class="about__table--row__name">Credit limit</h3>
        <h3 class="about__table--row__date">Up to 1 000 000 ₱</h3>
      </div>
      <div class="about__table--row">
        <h3 class="about__table--row__name">Grace period</h3>
        <h3 class="about__table--row__date">Up to 55 days</h3>
      </div>
      <div class="about__table--row table-bg-dark">
        <h3 class="about__table--row__name">Credit rate</h3>
        <h3 class="about__table--row__date">From 20% per annum</h3>
      </div>
      <div class="about__table--row">
        <h3 class="about__table--row__name">Service cost</h3>
        <h3 class="about__table--row__date">Free</h3>
      </div>
      <div class="about__table--row table-bg-dark">
        <h3 class="about__table--row__name">Cash withdrawal fee</h3>
        <h3 class="about__table--row__date">Free</h3>
      </div>
      <div class="about__table--row">
        <h3 class="about__table--row__name">Key Benefits</h3>
        <ul class="about__table--row__list">
          <li class="about__table--row__list--item">1000 points are awarded for purchases over ₱ 10,000 when you issue a card before 12/31/2023 through the State Services portal.</li>
          <li class="about__table--row__list--item">7% in the Entertainment category</li>
          <li class="about__table--row__list--item">4% in the categories “Clothes and shoes”, “Beauty”, “Cafes, restaurants”</li>
          <li class="about__table--row__list--item">1% on other purchases</li>
        </ul>
      </div>
    </div>
    <div v-if="SwitchTable === 'Bonuses'" class="about__table">
      <div class="about__table--row table-bg-dark">
        <h3 class="about__table--row__name">Bonus type</h3>
        <h3 class="about__table--row__date">Miles</h3>
      </div>
      <div class="about__table--row">
        <h3 class="about__table--row__name">The name of the program</h3>
        <h3 class="about__table--row__date">JSC Credit Europe loyalty program</h3>
      </div>
      <div class="about__table--row table-bg-dark">
        <h3 class="about__table--row__name">Accrual procedure</h3>
        <h3 class="about__table--row__date">1-7% points</h3>
      </div>
      <div class="about__table--row">
        <h3 class="about__table--row__name">Point categories</h3>
        <ul class="about__table--row__list">
          <li class="about__table--row__list--item">7% in the Entertainment category</li>
          <li class="about__table--row__list--item">4% in the categories “Clothes and shoes”, “Beauty”, “Cafes, restaurants”</li>
          <li class="about__table--row__list--item">1% on other purchases</li>
        </ul>
      </div>
      <div class="about__table--row table-bg-dark">
        <h3 class="about__table--row__name">
          Point conversion</h3>
        <h3 class="about__table--row__date">1 point = 1₱</h3>
      </div>
    </div>
    <rating-reviews v-if="SwitchTable === 'Rating and reviews'" class="rating reviews-card__wrapper--box"/>
  </div>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import RatingReviews from "@/components/Rating-reviews.vue";

export default {
  name: "AboutBlock",
  components: {RatingReviews, ButtonGradient},
  data() {
    return{
      SwitchTable: 'Rates',
      isSwitch: 'Rates',
      isActive: 'active_switch',
    }
  },
  methods: {
    SwitchRates() {
      this.SwitchTable = 'Rates';
      this.isSwitch = 'Rates';
    },
    SwitchBonuses() {
      this.SwitchTable = 'Bonuses';
      this.isSwitch = 'Bonuses';
    },
    SwitchRating() {
      this.SwitchTable = 'Rating and reviews';
      this.isSwitch = 'Rating and reviews';
    }
  }
}
</script>