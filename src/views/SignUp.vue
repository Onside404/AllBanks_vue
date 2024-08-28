<template>
  <div class="sign-up">
    <div class="sign-up__wrapper">
      <button-back class="sign-up__wrapper--end-back" @click="$router.push(`/`)"/>
      <div class="sign-up__wrapper--box">
        <img src="@/assets/item_svg/reused-img/logo_sign_up.svg" alt="" class="sign-up__wrapper--box__img">
        <h3 class="sign-up__wrapper--box__title">Sign up</h3>
        <div class="sign-up__wrapper--box__input-email">
          <p class="sign-up__wrapper--box__input-email--placeholder">Your email</p>
          <input type="email" placeholder="Your email" class="sign-up__wrapper--box__input-email--input">
        </div>
        <div class="sign-up__wrapper--box__input-name">
          <p class="sign-up__wrapper--box__input-name--placeholder">Your name</p>
          <input type="text" placeholder="Your email" class="sign-up__wrapper--box__input-name--input">
        </div>
      </div>
    </div>
    <button-gradient class="sign-up__wrapper--get-code">Get code</button-gradient>
    <button class="sign-up__wrapper--account-btn">Allready have an account</button>
  </div>
</template>

<script>
import ButtonBack from "@/components/btn-back.vue";
import ButtonGradient from "@/components/Button-gradient.vue";

export default {
  name: 'SignUp',
  components: {ButtonGradient, ButtonBack},
}
</script>