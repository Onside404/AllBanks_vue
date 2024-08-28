<template>
  <div class="banner-offers">
    <div class="banner-offers__wrapper">
      <img src="../assets/item_svg/reused-img/banner_allbanks.svg" alt="" class="banner-offers__wrapper--img">
      <div class="banner-offers__wrapper--info">
        <h2 class="banner-offers__wrapper--info__title">More than 10 000 loan offers</h2>
        <p class="banner-offers__wrapper--info__text">Our services help you find the best deals on the market</p>
      </div>
      <button-gradient class="banner-offers__wrapper--btn">Our credit card offers</button-gradient>
    </div>
  </div>
</template>
 <script>
 import ButtonGradient from "@/components/Button-gradient.vue";

 export default {
   name: "BannerOffers",
   components: {ButtonGradient},
 }
 </script>