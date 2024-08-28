<template>
  <div>
    <div class="title-credit-card">
      <div class="title-credit-card--wrapper">
        <div>
          <h1 class="title-credit-card--wrapper__title">Credit cards</h1>
          <p class="title-credit-card--wrapper__text">We tell you in detail about the conditions of financial products and help you find the most suitable offers</p>
          <button class="title-credit-card--wrapper__btn">Our credit card offers</button>
        </div>
        <div class="title-credit-card--wrapper__img">
          <img class="" src="@/assets/page_credit_cards/title_credit.svg" alt="">
        </div>
      </div>
    </div>
    <div class="title-credit-card-mobil">
      <div class="title-credit-card-mobil__wrapper">
        <div class="title-credit-card-mobil__wrapper--head">
          <h1 class="title-credit-card-mobil__wrapper--head__title">Credit cards</h1>
          <p class="title-credit-card-mobil__wrapper--head__text">We tell you in detail about the conditions of financial products and help you find the most suitable offers</p>
        </div>
        <div class="title-credit-card-mobil__wrapper--img">
          <img class="" src="@/assets/page_credit_cards/title_credit_mobil.svg" alt="">
        </div>
        <button class="title-credit-card-mobil__wrapper--btn">Our credit card offers</button>
      </div>
    </div>

    <input-credit-card></input-credit-card>

    <div class="comparing">
      <h2 class="comparing__title">Credit cards comparing</h2>
      <p class="comparing__text">Find your best credit card within minutes</p>
      <div class="comparing__wrapper">
        <button class="comparing__wrapper--filter-btn">
          <img src="@/assets/page_svg/filters_popular.svg" alt="">
        </button>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/Chinabank_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">Chinabank</h4>
            <p class="comparing__wrapper--box__card-description--name">Platinum</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn" >Apply for a card</button>
            <div class="comparing__wrapper--box__apply--dropdown">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 9L15 1" stroke="#E7E7E7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>3 more cards</p>
            </div>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/BDO_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">BDO</h4>
            <p class="comparing__wrapper--box__card-description--name">Visa classic</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn">Apply for a card</button>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/RCBC_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">RCBC</h4>
            <p class="comparing__wrapper--box__card-description--name">FLEX</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn">Apply for a card</button>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/DBP_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">DBP</h4>
            <p class="comparing__wrapper--box__card-description--name">Visa classic</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn">Apply for a card</button>
            <div class="comparing__wrapper--box__apply--dropdown">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 9L15 1" stroke="#E7E7E7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>3 more cards</p>
            </div>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/EastWest_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">EastWest</h4>
            <p class="comparing__wrapper--box__card-description--name">Visa classic</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn">Apply for a card</button>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/Metrobank_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">Metrobank</h4>
            <p class="comparing__wrapper--box__card-description--name">Prime</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn">Apply for a card</button>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/SecurityBank_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">SecurityBank</h4>
            <p class="comparing__wrapper--box__card-description--name">SAM</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn" @click="$router.push(`/card`)">Apply for a card</button>
          </div>
        </div>
        <div class="comparing__wrapper--box">
          <img src="@/assets/credit_cards/BPI_card.png" alt="" class="comparing__wrapper--box__card">
          <div class="comparing__wrapper--box__card-description">
            <h4 class="comparing__wrapper--box__card-description--bank">SAM</h4>
            <p class="comparing__wrapper--box__card-description--name">Visa classic</p>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Grace period</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 55 d.</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Credit limit</p>
            <h5 class="comparing__wrapper--box__params--text">Up to 1 000 000 ₱</h5>
          </div>
          <div class="comparing__wrapper--box__params">
            <p class="comparing__wrapper--box__params--title">Service cost</p>
            <h5 class="comparing__wrapper--box__params--text">5 000 ₱ a year</h5>
          </div>
          <div class="comparing__wrapper--box__apply">
            <button class="comparing__wrapper--box__apply--btn">Apply for a card</button>
          </div>
        </div>
      </div>
      <button-gradient>Show more</button-gradient>
    </div>

    <div class="comparing-mobil">
      <h2 class="comparing-mobil__title">Credit cards comparing</h2>
      <p class="comparing-mobil__text">Find your best credit card within minutes</p>
      <button class="comparing-mobil__filter-btn">
        <img src="@/assets/page_svg/filters_popular.svg" alt="">
      </button>
      <div class="comparing-mobil__wrapper">
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/Chinabank_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">Chinabank</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">Platinum</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
          <button class="comparing-mobil__wrapper--box__dropdown-more-options">
            <img src="@/assets/page_credit_cards/dropdown_more_options.svg" alt="" class="comparing-mobil__wrapper--box__dropdown-more-options--img">
            <span class="comparing-mobil__wrapper--box__dropdown-more-options--text">3 more cards</span>
          </button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/BDO_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">BDO</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">Visa classic</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/RCBC_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">RCBC</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">FLEX</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/DBP_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">DBP</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">Visa classic</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
          <button class="comparing-mobil__wrapper--box__dropdown-more-options">
            <img src="@/assets/page_credit_cards/dropdown_more_options.svg" alt="" class="comparing-mobil__wrapper--box__dropdown-more-options--img">
            <span class="comparing-mobil__wrapper--box__dropdown-more-options--text">3 more cards</span>
          </button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/EastWest_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">EastWest</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">Visa classic</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/Metrobank_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">Metrobank</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">Prime</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/SecurityBank_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">SecurityBank</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">SAM</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn " @click="$router.push(`/card`)">Apply for a card</button>
        </div>
        <div class="comparing-mobil__wrapper--box">
          <div class="comparing-mobil__wrapper--box__card">
            <img src="@/assets/credit_cards/BPI_card.png" alt="" class="comparing-mobil__wrapper--box__card--img">
            <div class="comparing-mobil__wrapper--box__card--head">
              <h4 class="comparing-mobil__wrapper--box__card--head__title">BPI</h4>
              <p class="comparing-mobil__wrapper--box__card--head__text">Visa classic</p>
            </div>
          </div>
          <div class="comparing-mobil__wrapper--box__description">
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Grace period</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 55 d.</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Credit limit</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">Up to 1 000 000 ₱</h4>
            </div>
            <div class="comparing-mobil__wrapper--box__description--item">
              <p class="comparing-mobil__wrapper--box__description--item__title">Service cost</p>
              <h4 class="comparing-mobil__wrapper--box__description--item__text">5 000 ₱ a year</h4>
            </div>
          </div>
          <button class="comparing-mobil__wrapper--box__btn">Apply for a card</button>
        </div>
      </div>
      <button-gradient class="comparing-mobil__btn-link">Show more</button-gradient>
    </div>

    <OfferBanks/>
    <ClientReviews/>
    <OffersLinks class="bg-one"/>

    <div class="accordion">
      <h2 class="accordion__title">F.A.Q.</h2>
      <div class="accordion__wrapper">
        <accordion-list :open-multiple-items="true">
          <accordion-item v-for="item in AccordionContent" :key="item.title" :expanded="false">
            <template #summary>
              <h3>{{ item.title }}</h3>
            </template>
              <p class="accordion-item__content--text" v-html="item.content"></p>
          </accordion-item>
        </accordion-list>
      </div>
    </div>
  </div>
</template>

<script>
  import InputCreditCard from "@/components/Input-credit-card.vue";
  import ButtonGradient from "@/components/Button-gradient.vue";
  import OfferBanks from "@/components/Offer-banks.vue";
  import ClientReviews from "@/components/Client-reviews.vue";
  import "vue3-rich-accordion/accordion-library-styles.css";
  import {AccordionList, AccordionItem} from "vue3-rich-accordion";
  import OffersLinks from "@/components/Offers-links.vue";


  export default {
    name: 'CreditCards',
    components: {OffersLinks, ClientReviews, OfferBanks, ButtonGradient, InputCreditCard, AccordionList, AccordionItem},
    data() {
      return {
        AccordionContent: [
          {id: '1', title: 'What is a credit card?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
          {id: '2', title: 'How to choose a credit card?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
          {id: '3', title: 'How does the credit card grace period work?', content: 'A credit card is a payment instrument that allows you to use borrowed funds from a bank or financial institution to make purchases and expenses. You can use a credit card to pay for goods and services in stores, online, and elsewhere. In this case, you will have to pay the card debt to the bank in accordance with the terms of the loan agreement.'},
          {id: '4', title: 'How to increase your credit limit?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
          {id: '5', title: 'Can I withdraw cash from a credit card?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
          {id: '6', title: 'Who is given a credit card and with what documents?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
          {id: '7', title: 'How to make money on a credit card?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
          {id: '8', title: 'What should you pay attention to before applying for a credit card?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.'},
        ],
      }
    },
  }
</script>