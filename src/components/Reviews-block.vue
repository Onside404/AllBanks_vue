<template>
  <div class="reviews-card">
    <button class="reviews-card__filter-btn">
      <img src="@/assets/page_svg/filters_popular.svg" alt="">
    </button>
    <div class="reviews-card__wrapper">
      <a href="/review">
      <div class="reviews-card__wrapper--box">
        <div class="reviews-card__wrapper--box__title">
          <div class="reviews-card__wrapper--box__title--user">
            <div class="reviews-card__wrapper--box__title--user__avatar">
              <img src="../assets/item_svg/reused-img/avatar_img.svg" alt="">
            </div>
            <div class="reviews-card__wrapper--box__title--user__item">
              <h5 class="reviews-card__wrapper--box__title--user__item--name">Mike</h5>
              <p class="reviews-card__wrapper--box__title--user__item--date">April 19 2016</p>
            </div>
          </div>
          <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="reviews-card__wrapper--box__title--stars">
        </div>
        <div :class="[ButtonHide === 'Hide' ? HideClass : '']" class="reviews-card__wrapper--box__body">
          <h3 class="reviews-card__wrapper--box__body--title">Consultation with Artyom)</h3>
          <p class="reviews-card__wrapper--box__body--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him! It’s good that now you can find out everything while lying in a warm crib, and also issue this very card for your child, then the courier will bring it home to you) At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him! It’s good that now you can find out everything while lying in a warm crib, and also issue this very card for your child, then the courier will bring it home to you)</p>
        </div>
        <div class="reviews-card__wrapper--box__overflow">
          <div class="reviews-card__wrapper--box__overflow--info-card">
            <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="" class="reviews-card__wrapper--box__overflow--info-card__img">
            <p class="reviews-card__wrapper--box__overflow--info-card__text">Credit cards</p>
          </div>
          <button v-if="ButtonHide === 'Hide'" class="reviews-card__wrapper--box__overflow__btn" @click="ShowText">Read whole</button>
          <button v-if="ButtonHide === 'Show'" class="reviews-card__wrapper--box__overflow__btn" @click="HideText">Hide text</button>
        </div>
        <div class="reviews-card__wrapper--box__message">
          <div class="reviews-card__wrapper--box__message--img">
            <img src="../assets/item_svg/reused-img/verified.svg" alt="" class="reviews-card__wrapper--box__message--img__img-one">
            <img src="../assets/item_svg/reused-img/answer.svg" alt="" class="reviews-card__wrapper--box__message--img__img-two">
          </div>
          <div class="reviews-card__wrapper--box__message--buttons">
            <div class="reviews-card__wrapper--box__message--buttons__like">
              <p class="reviews-card__wrapper--box__message--buttons__like--text">Did the review help?</p>
              <img src="../assets/item_svg/reused-img/like_img.svg" alt="" class="reviews-card__wrapper--box__message--buttons__like--btn">
            </div>
            <div class="reviews-card__wrapper--box__message--buttons__answers">
              <p class="reviews-card__wrapper--box__message--buttons__answers--number">4</p>
              <img src="../assets/item_svg/reused-img/message.svg" alt="" class="reviews-card__wrapper--box__message--buttons__answers--btn">
            </div>
          </div>
        </div>
      </div>
      </a>
      <div class="reviews-card__wrapper--box">
        <div class="reviews-card__wrapper--box__title">
          <div class="reviews-card__wrapper--box__title--user">
            <div class="reviews-card__wrapper--box__title--user__avatar">
              <img src="../assets/item_svg/reused-img/avatar_img.svg" alt="">
            </div>
            <div class="reviews-card__wrapper--box__title--user__item">
              <h5 class="reviews-card__wrapper--box__title--user__item--name">Mike</h5>
              <p class="reviews-card__wrapper--box__title--user__item--date">April 19 2016</p>
            </div>
          </div>
          <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="reviews-card__wrapper--box__title--stars">
        </div>
        <div :class="[ButtonHide === 'Hide' ? HideClass : '']" class="reviews-card__wrapper--box__body">
          <h3 class="reviews-card__wrapper--box__body--title">Consultation with Artyom)</h3>
          <p class="reviews-card__wrapper--box__body--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him! It’s good that now you can find out everything while lying in a warm crib, and also issue this very card for your child, then the courier will bring it home to you) At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him! It’s good that now you can find out everything while lying in a warm crib, and also issue this very card for your child, then the courier will bring it home to you)</p>
        </div>
        <div class="reviews-card__wrapper--box__overflow">
          <div class="reviews-card__wrapper--box__overflow--info-card">
            <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="">
            <p class="reviews-card__wrapper--box__overflow--info-card__text">Credit cards</p>
          </div>
          <button v-if="ButtonHide === 'Hide'" class="reviews-card__wrapper--box__overflow__btn" @click="ShowText">Read whole</button>
          <button v-if="ButtonHide === 'Show'" class="reviews-card__wrapper--box__overflow__btn" @click="HideText">Hide text</button>
        </div>
        <div class="reviews-card__wrapper--box__message">
          <div class="reviews-card__wrapper--box__message--img">
            <img src="../assets/item_svg/reused-img/verified.svg" alt="" class="reviews-card__wrapper--box__message--img__img-one">
            <img src="../assets/item_svg/reused-img/answer.svg" alt="" class="reviews-card__wrapper--box__message--img__img-two">
          </div>
          <div class="reviews-card__wrapper--box__message--buttons">
            <div class="reviews-card__wrapper--box__message--buttons__like">
              <p class="reviews-card__wrapper--box__message--buttons__like--text">Did the review help?</p>
              <img src="../assets/item_svg/reused-img/like_img.svg" alt="" class="reviews-card__wrapper--box__message--buttons__like--btn">
            </div>
            <div class="reviews-card__wrapper--box__message--buttons__answers">
              <p class="reviews-card__wrapper--box__message--buttons__answers--number">4</p>
              <img src="../assets/item_svg/reused-img/message.svg" alt="" class="reviews-card__wrapper--box__message--buttons__answers--btn">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsBlock",
  data() {
    return {
      ButtonHide: 'Hide',
      HideClass: 'hide-text',
    }
  },
  methods: {
    HideText() {
      this.ButtonHide = 'Hide';
    },
    ShowText() {
      this.ButtonHide = 'Show';
    }
  }
}
</script>