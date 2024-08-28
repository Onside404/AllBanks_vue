<template>
  <div class="rating-checkbox">
    <h3 class="rating-checkbox--title">Rating and reviews</h3>
    <div class="rating-checkbox--grade">
      <img src="@/assets/page_credit_cards/page_card/grade_star.svg" alt="">
      <h2 class="rating-checkbox--grade__number">4,84</h2>
    </div>
    <p class="rating-checkbox--text">Whole rating</p>
    <div class="rating-checkbox--report">
      <div class="rating-checkbox--report__item">
        <p class="rating-checkbox--report__item--name">Reviews</p>
        <h5 class="rating-checkbox--report__item--text">23 450</h5>
      </div>
      <div class="rating-checkbox--report__item">
        <p class="rating-checkbox--report__item--name">Problems solved</p>
        <h5 class="rating-checkbox--report__item--text">890</h5>
      </div>
      <div class="rating-checkbox--report__item">
        <p class="rating-checkbox--report__item--name">Bank answers</p>
        <h5 class="rating-checkbox--report__item--text">22 798</h5>
      </div>
    </div>
    <div class="rating-checkbox--switch-btn">
      <button class="rating-checkbox--switch-btn__button">All services</button>
      <button class="rating-checkbox--switch-btn__button">Credit cards</button>
      <button class="rating-checkbox--switch-btn__button">Loans</button>
    </div>
    <div class="gap-25">
      <div class="rating-checkbox--index">
        <div class="rating-checkbox--index__checkbox">
          <input type="checkbox" id="checkbox_5" class="rating-checkbox--index__checkbox--checkbox-input">
          <label for="checkbox_5" class="rating-checkbox--index__checkbox--checkbox-label">5</label>
        </div>
        <img src="@/assets/page_credit_cards/page_card/index_stars.svg" alt="" class="rating-checkbox--index__stars">
        <input class="rating-checkbox--index__input" type="range" value="87" />
        <p class="rating-checkbox--index__reviews">45 789</p>
        <p class="rating-checkbox--index__percent">87%</p>
      </div>
      <div class="rating-checkbox--index">
        <div class="rating-checkbox--index__checkbox">
          <input type="checkbox" id="checkbox_4" class="rating-checkbox--index__checkbox--checkbox-input">
          <label for="checkbox_4" class="rating-checkbox--index__checkbox--checkbox-label">4</label>
        </div>
        <img src="../assets/item_svg/reused-img/four_stars.svg" alt="" class="rating-checkbox--index__stars">
        <input class="rating-checkbox--index__input two-percent" type="range" value="2" />
        <p class="rating-checkbox--index__reviews">678</p>
        <p class="rating-checkbox--index__percent">2%</p>
      </div>
      <div class="rating-checkbox--index">
        <div class="rating-checkbox--index__checkbox">
          <input type="checkbox" id="checkbox_3" class="rating-checkbox--index__checkbox--checkbox-input">
          <label for="checkbox_3" class="rating-checkbox--index__checkbox--checkbox-label">3</label>
        </div>
        <img src="@/assets/page_credit_cards/page_card/three_stars.svg" alt="" class="rating-checkbox--index__stars">
        <input class="rating-checkbox--index__input thirteen-percent" type="range" value="13" />
        <p class="rating-checkbox--index__reviews">5 678</p>
        <p class="rating-checkbox--index__percent">13%</p>
      </div>
      <div class="rating-checkbox--index">
        <div class="rating-checkbox--index__checkbox">
          <input type="checkbox" id="checkbox_2" class="rating-checkbox--index__checkbox--checkbox-input">
          <label for="checkbox_2" class="rating-checkbox--index__checkbox--checkbox-label">2</label>
        </div>
        <img src="@/assets/page_credit_cards/page_card/two_stars.svg" alt="" class="rating-checkbox--index__stars">
        <input class="rating-checkbox--index__input one-percent" type="range" value="1" />
        <p class="rating-checkbox--index__reviews">341</p>
        <p class="rating-checkbox--index__percent">1%</p>
      </div>
      <div class="rating-checkbox--index">
        <div class="rating-checkbox--index__checkbox">
          <input type="checkbox" id="checkbox_1" class="rating-checkbox--index__checkbox--checkbox-input">
          <label for="checkbox_1" class="rating-checkbox--index__checkbox--checkbox-label">1</label>
        </div>
        <img src="@/assets/page_credit_cards/page_card/one_stars.svg" alt="" class="rating-checkbox--index__stars">
        <input class="rating-checkbox--index__input two-percent" type="range" value="2" />
        <p class="rating-checkbox--index__reviews">567</p>
        <p class="rating-checkbox--index__percent">2%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingCheckbox',
}
</script>