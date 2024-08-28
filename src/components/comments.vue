<template>
  <div class="review-comment">
    <div class="review-comment__wrapper">
      <h3 class="review-comment__wrapper--title">You need to authorize to leave a comment</h3>
      <p class="review-comment__wrapper--login"><a href="" class="review-comment__wrapper--login__link">Login</a> to leave a comment.</p>
      <div class="review-comment__wrapper--answers">
        <h3 class="review-comment__wrapper--answers__quantity">4 comments</h3>
        <div class="review-comment__wrapper--answers__answer no-comment py-25">
          <div class="review-comment__wrapper--answers__answer--user">
            <div class="review-comment__wrapper--answers__answer--user__avatar">
              <img src="@/assets/item_svg/reused-img/avatar_img.svg" alt="" >
            </div>
            <div class="review-comment__wrapper--answers__answer--user__data">
              <h5 class="review-comment__wrapper--answers__answer--user__data--name">Mike</h5>
              <p class="review-comment__wrapper--answers__answer--user__data--birthday">April 19 2016</p>
            </div>
          </div>
          <p class="review-comment__wrapper--answers__answer--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him!</p>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--input-comment">
            <p class="review-comment__wrapper--answers__answer--input-comment__placeholder">Your comment</p>
            <input type="text" class="review-comment__wrapper--answers__answer--input-comment__input">
          </div>
          <button v-if="InputComment === 'Hide'" class="review-comment__wrapper--answers__answer--btn-comment" @click="InputShow">Answer</button>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--publish">
            <button class="review-comment__wrapper--answers__answer--publish__сancel" @click="InputHide">Cancel</button>
            <button class="review-comment__wrapper--answers__answer--publish__approve">Publish</button>
          </div>
        </div>
        <div class="review-comment__wrapper--answers__answer no-comment py-25">
          <div class="review-comment__wrapper--answers__answer--user">
            <div class="review-comment__wrapper--answers__answer--user__avatar">
              <img src="@/assets/item_svg/reused-img/avatar_img.svg" alt="" >
            </div>
            <div class="review-comment__wrapper--answers__answer--user__data">
              <h5 class="review-comment__wrapper--answers__answer--user__data--name">Smith</h5>
              <p class="review-comment__wrapper--answers__answer--user__data--birthday">April 23 2017</p>
            </div>
          </div>
          <p class="review-comment__wrapper--answers__answer--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him!</p>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--input-comment">
            <p class="review-comment__wrapper--answers__answer--input-comment__placeholder">Your comment</p>
            <input type="text" class="review-comment__wrapper--answers__answer--input-comment__input">
          </div>
          <button v-if="InputComment === 'Hide'" class="review-comment__wrapper--answers__answer--btn-comment" @click="InputShow">Answer</button>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--publish">
            <button class="review-comment__wrapper--answers__answer--publish__сancel" @click="InputHide">Cancel</button>
            <button class="review-comment__wrapper--answers__answer--publish__approve">Publish</button>
          </div>        </div>
        <div class="review-comment__wrapper--answers__answer no-comment py-25">
          <div class="review-comment__wrapper--answers__answer--user">
            <div class="review-comment__wrapper--answers__answer--user__avatar">
              <img src="@/assets/item_svg/reused-img/avatar_img.svg" alt="" >
            </div>
            <div class="review-comment__wrapper--answers__answer--user__data">
              <h5 class="review-comment__wrapper--answers__answer--user__data--name">Mike</h5>
              <p class="review-comment__wrapper--answers__answer--user__data--birthday">April 23 2017</p>
            </div>
          </div>
          <p class="review-comment__wrapper--answers__answer--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him!</p>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--input-comment">
            <p class="review-comment__wrapper--answers__answer--input-comment__placeholder">Your comment</p>
            <input type="text" class="review-comment__wrapper--answers__answer--input-comment__input">
          </div>
          <button v-if="InputComment === 'Hide'" class="review-comment__wrapper--answers__answer--btn-comment" @click="InputShow">Answer</button>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--publish">
            <button class="review-comment__wrapper--answers__answer--publish__сancel" @click="InputHide">Cancel</button>
            <button class="review-comment__wrapper--answers__answer--publish__approve">Publish</button>
          </div>        </div>
        <div class="review-comment__wrapper--answers__answer py-25">
          <div class="review-comment__wrapper--answers__answer--user">
            <div class="review-comment__wrapper--answers__answer--user__avatar">
              <img src="@/assets/item_svg/reused-img/avatar_img.svg" alt="" >
            </div>
            <div class="review-comment__wrapper--answers__answer--user__data">
              <h5 class="review-comment__wrapper--answers__answer--user__data--name">Mike</h5>
              <p class="review-comment__wrapper--answers__answer--user__data--birthday">April 19 2016</p>
            </div>
          </div>
          <p class="review-comment__wrapper--answers__answer--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him!</p>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--input-comment">
            <p class="review-comment__wrapper--answers__answer--input-comment__placeholder">Your comment</p>
            <input type="text" class="review-comment__wrapper--answers__answer--input-comment__input">
          </div>
          <button v-if="InputComment === 'Hide'" class="review-comment__wrapper--answers__answer--btn-comment" @click="InputShow">Answer</button>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--publish">
            <button class="review-comment__wrapper--answers__answer--publish__сancel" @click="InputHide">Cancel</button>
            <button class="review-comment__wrapper--answers__answer--publish__approve">Publish</button>
          </div>
        </div>
        <div class="review-comment__wrapper--answers__answer comment-answer">
          <div class="review-comment__wrapper--answers__answer--user">
            <div class="review-comment__wrapper--answers__answer--user__avatar">
              <img src="@/assets/item_svg/reused-img/avatar_img.svg" alt="" >
            </div>
            <div class="review-comment__wrapper--answers__answer--user__data">
              <h5 class="review-comment__wrapper--answers__answer--user__data--name">Mike</h5>
              <p class="review-comment__wrapper--answers__answer--user__data--birthday">April 19 2016</p>
            </div>
          </div>
          <p class="review-comment__wrapper--answers__answer--text">At 16:45 on April 14, 2024 I wrote to the Alfa-Bank chat to find out at what age a child can get a debit card. Specialist Artyom joined the dialogue literally a couple of minutes later. He was polite, pleasant, competent! He also gave information on where you can see the remaining limits on cards, just in case, thanks to him!</p>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--input-comment">
            <p class="review-comment__wrapper--answers__answer--input-comment__placeholder">Your comment</p>
            <input type="text" class="review-comment__wrapper--answers__answer--input-comment__input">
          </div>
          <button v-if="InputComment === 'Hide'" class="review-comment__wrapper--answers__answer--btn-comment" @click="InputShow">Answer</button>
          <div v-if="InputComment === 'Show'" class="review-comment__wrapper--answers__answer--publish">
            <button class="review-comment__wrapper--answers__answer--publish__сancel" @click="InputHide">Cancel</button>
            <button class="review-comment__wrapper--answers__answer--publish__approve">Publish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data() {
    return {
      InputComment: 'Hide'
    }
  },
  methods: {
    InputHide() {
      this.InputComment = 'Hide';
    },
    InputShow() {
      this.InputComment = 'Show';
    },
  }
}
</script>