<style src="../index.css"></style>

<template>

    <promo-types>
    <discount-size></discount-size>
    <promo-container></promo-container>
    <photo-block></photo-block>
    <about-container></about-container>
    <social-block></social-block>
    <o-container></o-container>
    <time-container></time-container>
    <city-select-container></city-select-container>
    <categories-container></categories-container>
    <days-range-container></days-range-container>
    <show-on-main-page-container></show-on-main-page-container>
    <experts-container></experts-container>
    <price-container></price-container>
    </promo-types>

</template>

<script>
  import store from '../store'
  import { getAllTextFieldData } from '../store/actions'
  import PromoTypes from "./PromoTypes.vue";
  import SocialBlock from "./elements/social/SocialBlock.vue";
  import OrganizationContainer from "./elements/organization/OrganizationContainer.vue";
  import PhotoBlock from "./elements/photo/PhotoBlock.vue";
  import PromoContainer from "./PromoContainer.vue";
  import CitySelectContainer from "./elements/CitySelectContainer.vue";
  import AboutContainer from "./elements/AboutContainer.vue";
  import DaysRangeContainer from "./elements/DaysRangeContainer.vue";
  import ShowOnMainPageContainer from "./elements/ShowOnMainPageContainer.vue";
  import ExpertsContainer from "./elements/experts/ExpertsContainer.vue";
  import TimeContainer from "./elements/time/TimeContainer.vue";
  import CategoriesContainer from "./elements/categories/CategoriesContainer.vue";
  import PriceContainer from "./elements/PriceContainer.vue";
  import DiscountSize from "./elements/DiscountSize.vue";
  export default {
    name: 'App',
    components: {
      ExpertsContainer,
      PromoContainer,
      PromoTypes,
      SocialBlock,
     'o-container' : OrganizationContainer,
      PhotoBlock,
      CitySelectContainer,
      AboutContainer,
      DaysRangeContainer,
      ShowOnMainPageContainer,
      TimeContainer,
      CategoriesContainer,
      PriceContainer,
      DiscountSize
    }
  }

  getAllTextFieldData(store);
</script>
