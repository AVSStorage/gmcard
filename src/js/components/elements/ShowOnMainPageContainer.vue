<template>
    <div class="promo-form__wrapper d-flex justify-content-between"><p class="promo-form__title">Желаете чтобы
        ваша акция так же появлялась и в баннере на главной странице сайта?
        <span class="promo-form__description" v-show="item.state">В этом случае стоимость запуска акции будет в 3 раза дороже. Бесплатно, если вы предлагаете скидку более 50%.</span>
    </p>

        <div class="d-flex">
            <span
                class="font-weight-bold promo-form__label promo-form__label--unchecked mr-2 pt-1" :class="{'promo-form__label--checked' : item.state}">Нет</span>
            <checkbox :item="item"></checkbox>
       <span class="font-weight-bold promo-form__label  ml-2 pt-1" :class="{'promo-form__label--checked' : !item.state}">Да, желаю</span></div>
    </div>
</template>

<script>
    import Checkbox from "./Checkbox.vue";
    export default {
        name: "ShowOnMainPageContainer",
        components: {Checkbox},
        data() {
            return {
                item: {
                    state:false
                }
            }
        }
    }
</script>

<style scoped>

</style>