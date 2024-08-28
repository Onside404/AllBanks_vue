<template>
  <div class="reviews-page-title">
    <div class="reviews-page-title__wrapper">
      <h1 class="reviews-page-title__wrapper--title">Reviews about banks</h1>
      <p class="reviews-page-title__wrapper--text">Reviews of bank services with a convenient filter by product, ratings, and time of addition</p>
      <div class="reviews-page-title__wrapper--write-review">
        <input type="text" placeholder="Your bank" class="reviews-page-title__wrapper--write-review__input">
        <button-gradient class="reviews-page-title__wrapper--write-review__button" @click="$router.push(`/write-review`)">Write a review</button-gradient>
      </div>
    </div>
  </div>

  <div class="reviews-content">
    <rating-checkbox class="rating-bg"/>
  </div>

  <reviews-block/>
</template>

<script>
import ButtonGradient from "@/components/Button-gradient.vue";
import ReviewsBlock from "@/components/Reviews-block.vue";
import ReviewsBanks from "@/components/Reviews-bank.vue";
import RatingCheckbox from "@/components/Rating-checkbox.vue";

export default {
  name: "ReviewsPage",
  components: {RatingCheckbox, ReviewsBanks, ReviewsBlock, ButtonGradient},
}
</script>