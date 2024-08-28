<template>
  <div class="write-title">
    <div class="write-title__wrapper">
      <button-back class="write-title__wrapper--btn"/>
      <h1 class="write-title__wrapper--text">Write your review about the bank</h1>
    </div>
  </div>

  <div class="bank-details">
    <div class="bank-details__wrapper">
      <div class="bank-details__wrapper--line-one">
        <div class="bank-details__wrapper--line-one__input-bank">
          <select class="bank-details__wrapper--line-one__input-bank--select">
            <option class="bank-details__wrapper--line-one__input-bank--select--option">Security Bank</option>
          </select>
        </div>
        <div class="bank-details__wrapper--line-one__switch">
          <button :class="[SwitchClass === 'Personal' ? isActive : '']" class="bank-details__wrapper--line-one__switch--btn" @click="SwitchPersonal">Personal</button>
          <button :class="[SwitchClass === 'Legal' ? isActive : '']" class="bank-details__wrapper--line-one__switch--btn" @click="SwitchLegal">Legal</button>
        </div>
      </div>
      <div class="bank-details__wrapper--line-two">
        <div class="bank-details__wrapper--line-two__input-product">
          <select class="bank-details__wrapper--line-two__input-product--select">
            <option class="bank-details__wrapper--line-two__input-product--select--option">Credit card (Platinum)</option>
          </select>
        </div>
        <div class="bank-details__wrapper--line-two__search">
          <img src="@/assets/item_svg/reused-img/search-img.svg" alt="">
          <input type="text" placeholder="Your city" class="bank-details__wrapper--line-two__search--input">
        </div>
      </div>
    </div>
  </div>
  
  <div class="rating-stars">
    <div class="rating-stars__wrapper">
      <h3 class="rating-stars__wrapper--title">Evaluate the bank's performance</h3>
      <p class="rating-stars__wrapper--text">Indicate the number of stars how you rate the bank’s work on a scale from 1 to 5</p>
      <img src="@/assets/page_review/write_review/empty-stars.svg" alt="" class="rating-stars__wrapper--stars">
    </div>
  </div>

  <div class="review-user">
    <div class="review-user__wrapper">
      <div class="review-user__wrapper--topic">
        <h3 class="review-user__wrapper--topic__title">Write a review topic</h3>
        <input type="text" placeholder="Your topic" class="review-user__wrapper--topic__input"/>
      </div>
      <div class="review-user__wrapper--experience">
        <h3 class="review-user__wrapper--experience__title">Tell us about your experience</h3>
        <input type="text" placeholder="Your message" class="review-user__wrapper--experience__input"/>
      </div>
    </div>
  </div>

  <div class="user-info">
    <div class="user-info__wrapper">
      <h3 class="user-info__wrapper--title">Add secret information</h3>
      <p class="user-info__wrapper--text">The problem can be resolved faster if you indicate your full name, date of birth or your contract number. The information is not published in the review and will only be available to the administrator and bank employee. By submitting this data, you <a href="" class="user-info__wrapper--text__link">consent to the processing of data.</a></p>
      <div class="user-info__wrapper--user-date">
        <input type="text" placeholder="Full name" class="user-info__wrapper--user-date__input">
        <input type="text" placeholder="Mail" class="user-info__wrapper--user-date__input">
        <input type="text" placeholder="Date of birth" class="user-info__wrapper--user-date__input">
      </div>
      <input type="text" placeholder="Your message" class="user-info__wrapper--message">
    </div>
  </div>

  <div class="login">
    <div class="login__wrapper">
      <h3 class="login__wrapper--title">Log in to AllBanks to leave a review</h3>
      <button-gradient>Sign up/Log in</button-gradient>
    </div>
  </div>
  <div class="send-button">
    <button-gradient>Send a review</button-gradient>
  </div>
</template>

<script>
import ButtonBack from "@/components/btn-back.vue";
import ButtonGradient from "@/components/Button-gradient.vue";

export default {
  name: 'WriteReview',
  components: {ButtonGradient, ButtonBack},
  data() {
    return {
      SwitchClass: 'Legal',
      isActive: 'active-btn',
    }
  },
  methods: {
    SwitchPersonal() {
      this.SwitchClass = 'Personal';
    },
    SwitchLegal() {
      this.SwitchClass = 'Legal';
    },
  }
}
</script>