<template>
  <div class="input_credit">
    <div class="input_credit__wrapper">
      <h3 class="input_credit__wrapper--text">Select a credit card options</h3>
      <div class="input_credit__wrapper--filters">
        <img src="../assets/page_svg/filters.svg" alt="">
        <p>Filters</p>
      </div>
      <div class="input_credit__wrapper--display">
        <input type="text" class="input_credit__wrapper--display__input-text" placeholder="Credit limit is 40 000 ₱">
        <button-gradient class="">Selected 78 cards</button-gradient>
      </div>
      <input type="range" min="0" max="200" value="100" class="input_credit__wrapper--input-range" />
    </div>
  </div>
</template>

<script>
  import ButtonGradient from "@/components/Button-gradient.vue";

  export default {
    name: "InputCreditCard",
    components: {ButtonGradient}
  }
</script>