<template>
    <div v-if="selectedType === 5" class="promo-form__wrapper d-flex justify-content-between">
        <div  class="tab d-flex flex-column">
            <div  class="justify-content-between  d-flex"><p
                                                                               class="promo-form__title">
                Если у вас есть бесплатная доставка, то вы можете отметить этот пункт.
                <span class="promo-form__description">Если бесплатной доставки нет, то ничего отмечать не нужно. </span>
            </p>
               <checkbox :item="item"></checkbox>
            </div>
            <div  class="justify-content-between d-none"><p
                                                                                                 class="promo-form__title">
                Есть бесплатная доставка
                <span class="promo-form__description">Если бесплатная доставка действует при заказе от определенной суммы, то необходимо указать это здесь. </span>
            </p>
                <div  class="d-flex flex-column w-33 tab promo-form__border p-r">
                    <label  for="sale_min" class="promo-form__title w-100 mb-2">Действует при заказе
                        от</label> <input  placeholder="1000" type="text" id="sale_min"
                                          name="sale_min" class="promo-form__input promo-form__input--price"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Checkbox from "./Checkbox.vue";
    import { mapGetters } from 'vuex';

    export default {
        name: "Shipping",
        components: {Checkbox},
        data() {
            return {
                item: {
                    state: false
                }
            }
        },
        computed: {
            ...mapGetters(['selectedType'])
        }
    }
</script>

<style scoped>

</style>