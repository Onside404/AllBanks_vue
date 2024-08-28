<template>
  <div class="offer">
    <h2 class="offer__title">Offer of the month</h2>
    <div class="offer__wrapper">
      <div class="offer__wrapper--box BPI-back">
        <div class="offer__wrapper--box__logo-bank BPI-back__title">
          <img src="@/assets/item_svg/offer-banks/BPI_offer.svg" alt="">
        </div>
        <div class="offer__wrapper--box__content">
          <h3 class="offer__wrapper--box__content--title">Loan year without %</h3>
          <p class="offer__wrapper--box__content--text">0₽ for service and cashback on purchases</p>
          <button class="offer__wrapper--box__content--btn BPI-back__btn-back">Visit site</button>
        </div>
      </div>
      <div class="offer__wrapper--box Metrobank-back">
        <div class="offer__wrapper--box__logo-bank Metrobank-back__title">
          <img src="@/assets/item_svg/offer-banks/Metrobank_offer.svg" alt="">
        </div>
        <div class="offer__wrapper--box__content">
          <h3 class="offer__wrapper--box__content--title">Your own credit card</h3>
          <p class="offer__wrapper--box__content--text">115 days without interest</p>
          <button class="offer__wrapper--box__content--btn Metrobank-back__btn-back">Visit site</button>
        </div>
      </div>
      <div class="offer__wrapper--box EastWest-back">
        <div class="offer__wrapper--box__logo-bank EastWest-back__title">
          <img src="@/assets/item_svg/offer-banks/EastWest_offer.svg" alt="">
        </div>
        <div class="offer__wrapper--box__content">
          <h3 class="offer__wrapper--box__content--title">Service 0 ₱</h3>
          <p class="offer__wrapper--box__content--text">Credit 110 days without interest</p>
          <button class="offer__wrapper--box__content--btn EastWest-back__btn-back">Visit site</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OfferBanks',
  }
</script>