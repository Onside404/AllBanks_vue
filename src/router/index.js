import { createRouter, createWebHistory } from 'vue-router'
import PhilippinesPage from '../views/PhilippinesPage.vue'
import CreditCards from '../views/CreditCards.vue'
import Card from "@/views/Card.vue";
import AboutUs from "@/views/AboutUs.vue";
import SiteMap from "@/views/SiteMap.vue";
import BankPage from "@/views/BankPage.vue";
import AllReviewsPage from "@/views/AllReviewsPage.vue";
import ArticklesPage from "@/views/ArticklesPage.vue";
import WriteReview from "@/views/WriteReview.vue";
import ReviewPage from "@/views/ReviewPage.vue";
import ArticklePage from "@/views/ArticklePage.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {
    path: '/',
    name: 'philippines-page',
    component: PhilippinesPage
  },
  {
    path: '/credit-cards',
    name: 'credit-cards',
    component: CreditCards
  },
  {
    path: '/card',
    name: 'card',
    component: Card
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/site-map',
    name: 'site-map',
    component: SiteMap
  },
  {
    path: '/bank',
    name: 'bank',
    component: BankPage
  },
  {
    path: '/all-reviews',
    name: 'all-reviews',
    component: AllReviewsPage
  },
  {
    path: '/artickles-page',
    name: 'artickles-page',
    component: ArticklesPage
  },
  {
    path: '/write-review',
    name: 'write-review',
    component: WriteReview
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewPage
  },
  {
    path: '/artickle-page',
    name: 'artickle-page',
    component: ArticklePage
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
