<template>
    <div v-if="show"  class="promo-form__wrapper d-flex justify-content-between flex-column flex-sm-row"><p class="promo-form__title">Какой % скидки или
        суммы в рублях<br>вы готовы предоставить?</p>

        <div class="d-flex justify-content-between flex-wrap align-items-center mt-3 mt-sm-0">
            <input v-model="value" placeholder="50" type="number" name="sale_size" min="0" :max="max"
                                                                     class="promo-form__input promo-form__input--shrink mr-3">
            <select ref="select" v-model="selected"
                class="promo-form__select">
                <option :selected="selected" >%</option>
            <option>₽</option>
        </select>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "DiscountSize",
        data() {
            return {
                types: ['%','₽'],
                selected: '%',
                value: ''
            }
        },
        mounted(){

            $(this.$refs.select).niceSelect()
            $(this.$refs.select).change((evt) => {
                this.selected = evt.target.value;
            });
        },
        computed: {
            show: function() {
                if (this.selectedType !== 1) {
                    $(this.$refs.select).niceSelect();
                    $(this.$refs.select).change((evt) => {
                        this.selected = evt.target.value;
                    });
                    return true;
                } else {
                    return  false;
                }
            },
            max: function () {
                if(this.selected === '%') {
                    return 100
                } else {
                    return ''
                }
            },
            ...mapGetters(['selectedType'])
        }
    }
</script>

<style scoped>



</style>