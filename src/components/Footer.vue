<template>
  <div class="footer-bg" v-if="$route.name !== 'sign-up'">
    <div class="footer">
      <div class="footer__title">
        <div class="footer__title--logo">
          <img src="@/assets/item_svg/footer-img/footer_logo.svg" alt="" class="footer__title--logo__img">
          <a href="" class="footer__title--logo__doc mb-20">PRIVACY POLICY</a>
          <a href="" class="footer__title--logo__doc">USER AGREEMENT</a>
        </div>
        <div class="footer__title--links">
          <a href=""><img src="@/assets/item_svg/footer-img/instagram_img.svg" alt="" class="footer__title--links__img"></a>
          <a href=""><img src="@/assets/item_svg/footer-img/telegram_img.svg" alt="" class="footer__title--links__img"></a>
        </div>
      </div>
      <h3 class="footer__kreditka">Kreditka.com — a financial service created to help users find and compare loan offers from various banks and financial institutions. We strive to be a trusted and convenient resource for making informed financial decisions.</h3>
      <div class="footer__content">
        <div class="footer__content--text">
          <p>Kreditka.com LLC uses cookies to improve user convenience, provide more opportunities and ensure the proper level of performance of the site and services. Cookies are small files that contain information about preferences and previous visits to a website. If you do not want to use cookies, you can change your browser settings. Read more about the terms of use here.</p>
        </div>
        <div class="footer__content--disclaimer">
          <p class="footer__content--disclaimer__section">© 2020 – 2023, Kreditka.com LLC. All rights reserved. When using materials, a hyperlink to Kreditka.ru is required.<br>
            <br>The content of the site does not constitute a recommendation or offer and is for informational and reference purposes only.<br>
            <br>Trademark certificate No. 558734 dated August 20, 2020.
          </p>
        </div>
      </div>
      <div class="footer__contacts">
        <img src="@/assets/item_svg/footer-img/age_limit.svg" alt="" class="footer__contacts--img">
        <div class="footer__contacts--text">
          <p class="footer__contacts--text__section">Address: 117638, Moscow, Odesskaya street, 2, floor 19</p>
          <p>Phone: 8 995 756-49-60 | Mail: Kreditka@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
}
</script>