<template>
  <div class="reviews-btn">
    <h2 class="reviews-btn__title">Bank rating</h2>
    <rating-checkbox class="rating-bg"/>
  </div>
  <reviews-block/>
</template>

<script>


import ReviewsBlock from "@/components/Reviews-block.vue";
import RatingCheckbox from "@/components/Rating-checkbox.vue";

export default {
  name: "ReviewsBanks",
  components: {RatingCheckbox, ReviewsBlock},
}
</script>