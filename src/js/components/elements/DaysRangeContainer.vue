<template>
    <div id="days" class="promo-form__wrapper d-flex flex-wrap" :class="setClassName"><p class="promo-form__title d-flex flex-column">На какое количество дней
        будет запущена акция?<span class="promo-form__description">Максимум 30 дней.</span></p>
        <div class="d-flex justify-content-between w-4 mt-3 mt-sm-0">
            <div class="w-8 d-flex align-items-center">
                <span style="font-size: 13px;" class="promo-form__description mr-2">0</span>
                <vue-slider v-model="value" :max="30" @change="updateRange" :tooltip="'always'"></vue-slider><span style="font-size: 13px;" class=" promo-form__description ml-2">30</span>
            </div>
            <input
                type="text" class="promo-form__input time-input"  v-model="value">
        </div>
    </div>
</template>

<script>

    import VueSlider from 'vue-slider-component'
    import { mapActions} from 'vuex'
    import 'vue-slider-component/theme/antd.css'
    export default {
        name: "DaysRangeContainer",
        data() {
            return {
                value: 1
            }
        },
        computed: {
            setClassName: function () {
                let id = location.hash.substr(1);
                return id === 'days' ? 'error-validation' : '';
            }
        },
        methods: {
          ...mapActions(['updateValidation']),
          updateRange(value) {
              if (value > 0){
                  this.updateValidation({key:'days', value: true})
              }
          }
        },

        components: {VueSlider}
    }
</script>

<style scoped>

</style>