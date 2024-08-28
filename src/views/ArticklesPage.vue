<template>
  <div class="carousel">
    <div class="carousel__title-mobil">
      <h3>Сurrent</h3>
    </div>
    <div class="carousel__wrapper">
      <Splide :options="{ rewind: true, width: 920, type: 'loop', arrows: false, gap: 30, }" aria-label="" >
        <SplideSlide class="Slide_Element">
          <div class="carousel__wrapper--box">
            <h3 class="carousel__wrapper--box__title">Сurrent</h3>
            <div class="carousel__wrapper--box__content">
              <div class="carousel__wrapper--box__content--news">
                <p class="carousel__wrapper--box__content--news--date">April 19 </p>
                <p class="carousel__wrapper--box__content--news--content">Ubisoft showed Assassin's Creed Shadows about Japan - fans have been waiting for a game in this setting for 16 years</p>
              </div>
              <div class="carousel__wrapper--box__content--news">
                <p class="carousel__wrapper--box__content--news--date">March 23 </p>
                <p class="carousel__wrapper--box__content--news--content">ChatGPT received a new model GPT-4o: what the neural network can do and where to try it</p>
              </div>
              <div class="carousel__wrapper--box__content--news">
                <p class="carousel__wrapper--box__content--news--date">June 17 2023</p>
                <p class="carousel__wrapper--box__content--news--content">The Russian budget deficit has almost reached the ceiling</p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>

  <div class="posts">
    <div class="posts__grid">
      <a href="/artickle-page" >
      <div class="posts__grid--box">
        <img src="@/assets/artickles_page/post_1.png" alt="" class="posts__grid--box__img">
        <div class="posts__grid--box__content">
          <div class="posts__grid--box__content--title">
            <p class="posts__grid--box__content--title--text">Cottages and country houses</p>
            <p class="posts__grid--box__content--title--date">April 19</p>
          </div>
          <h3 class="posts__grid--box__content--text">“You can save on everything except the foundation”: how to build a private house</h3>
        </div>
      </div>
      </a>
      <div class="posts__grid--box">
        <img src="@/assets/artickles_page/post_2.png" alt="" class="posts__grid--box__img">
        <div class="posts__grid--box__content">
          <div class="posts__grid--box__content--title">
            <p class="posts__grid--box__content--title--text">Stories</p>
            <p class="posts__grid--box__content--title--date">February 23</p>
          </div>
          <h3 class="posts__grid--box__content--text">How a man tried for three years to return 100,000 rubles of deposit. And he did it</h3>
        </div>
      </div>
      <div class="posts__grid--box">
        <img src="@/assets/artickles_page/post_3.png" alt="" class="posts__grid--box__img">
        <div class="posts__grid--box__content">
          <div class="posts__grid--box__content--title">
            <p class="posts__grid--box__content--title--text">Discussions</p>
            <p class="posts__grid--box__content--title--date">March 30</p>
          </div>
          <h3 class="posts__grid--box__content--text">Recommend places with good business lunches in Moscow</h3>
        </div>
      </div>
      <div class="posts__grid--box">
        <img src="@/assets/artickles_page/post_4.png" alt="" class="posts__grid--box__img">
        <div class="posts__grid--box__content">
          <div class="posts__grid--box__content--title">
            <p class="posts__grid--box__content--title--text">Questions about design and renovation</p>
            <p class="posts__grid--box__content--title--date">April 19</p>
          </div>
          <h3 class="posts__grid--box__content--text">Designer's advice: how to decorate a bare wall in the kitchen-living room</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: "ArticklesPage",
  components: {Splide, SplideSlide}
}
</script>