<template>
  <div class="container-review">
    <div class="container-review__btn">
      <button-back />
    </div>

    <div class="container-review__box">
      <div class="container-review__box__title">
        <div class="container-review__box__title--user">
          <div class="container-review__box__title--user__avatar">
            <img src="../assets/item_svg/reused-img/avatar_img.svg" alt="">
          </div>
          <div class="container-review__box__title--user__item">
            <h5 class="container-review__box__title--user__item--name">Mike</h5>
            <p class="container-review__box__title--user__item--date">April 19 2016</p>
          </div>
        </div>
        <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="container-review__box__title--stars">
      </div>
      <div class="container-review__box__body">
        <h3 class="container-review__box__body--title">Consultation with Artyom)</h3>
        <p class="container-review__box__body--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him! It’s good that now you can find out everything while lying in a warm crib, and also issue this very card for your child, then the courier will bring it home to you) At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him! It’s good that now you can find out everything while lying in a warm crib, and also issue this very card for your child, then the courier will bring it home to you)</p>
      </div>
      <div class="container-review__box__overflow">
        <div class="container-review__box__overflow--info-card">
          <img src="@/assets/page_credit_cards/page_card/security_img_mini.svg" alt="">
          <p class="container-review__box__overflow--info-card__text">Credit cards</p>
        </div>
      </div>
      <div class="container-review__box__message">
        <div class="container-review__box__message--img">
          <img src="../assets/item_svg/reused-img/verified.svg" alt="" class="container-review__box__message--img__img-one">
          <img src="../assets/item_svg/reused-img/answer.svg" alt="" class="container-review__box__message--img__img-two">
        </div>
        <div class="container-review__box__message--buttons">
          <div class="container-review__box__message--buttons__like">
            <p class="container-review__box__message--buttons__like--text">Did the review help?</p>
            <img src="../assets/item_svg/reused-img/like_img.svg" alt="" class="container-review__box__message--buttons__like--btn">
          </div>
          <div class="container-review__box__message--buttons__answers">
            <p class="container-review__box__message--buttons__answers--number">4</p>
            <img src="../assets/item_svg/reused-img/message.svg" alt="" class="container-review__box__message--buttons__answers--btn">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="review-comment">
    <div class="review-comment__wrapper">
      <h3 class="review-comment__wrapper--title">No one has left a comment yet, you can be the first</h3>
      <p class="review-comment__wrapper--login"><a href="" class="review-comment__wrapper--login__link">Login</a> to leave a comment.</p>
      <input type="text" placeholder="Your comment" class="review-comment__wrapper--input">
    </div>
    <button-gradient class="review-comment__btn">Send a review</button-gradient>
  </div>

  <comments/>

  <reviews-block/>
</template>

<script>
import ButtonBack from "@/components/btn-back.vue";
import ButtonGradient from "@/components/Button-gradient.vue";
import ReviewsBlock from "@/components/Reviews-block.vue";
import Comments from "@/components/comments.vue";

export default {
  name: "ReviewsPage",
  components: {Comments, ReviewsBlock, ButtonGradient, ButtonBack},
}
</script>