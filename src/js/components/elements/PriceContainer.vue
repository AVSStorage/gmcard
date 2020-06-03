<template>
    <div id="agreement" class="promo-form__footer">
        <div class="promo-form__prices mb-3">
            <div class="d-flex flex-column"><span class="promo-form__price-text">Ваш баланс</span><span
                    class="promo-form__price">100 000 руб.</span></div>
            <div class="d-flex flex-column"><span class="promo-form__price-text">Стоимость акции составит</span><span
                    class="promo-form__price">594 руб.</span></div>
            <a href="#" target="blank" class="promo-form__price-button"><i class="material-icons">visibility</i>Предпросмотр
                ации</a><input @change="update($event.target.checked)" type="checkbox" id="agreement_check"  class="d-none"><label for="agreement_check"
                                                                                                      class="promo-form__price-label d-flex" ><span
                class="promo-form__price-checkbox mr-3"></span><span>С условиями пользования сервисом и стоимостью ознакомлен и полностью согласен</span></label><a
                href="#" class="promo-form__price-button promo-form__price-button--middle"><i class="material-icons">folder</i>Сохранить
            как черновик</a></div>

        <div v-if="errorText" :data-hint="errorText" class="hint-bottom-left-t-error " :class="setErrorClass">
            <button @click="load" class="btn promo-form__price-button w-100 promo-form__price-button--big">Запустить акцию</button>
        </div>
        <button v-else @click="load" class="btn promo-form__price-button w-100 promo-form__price-button--big">Запустить акцию</button>
    </div>
</template>

<script>
    import { mapActions, mapGetters} from 'vuex'
    export default {
        name: "PriceContainer",
        data() {
            return {
                errorText: '',
                error: false
            }
        },
        computed: {
            ...mapGetters(['checkValidation']),
            setErrorClass: function () {
                return this.error ? 'hint-persist' : ''
            }
        },
        methods: {
            ...mapActions(['updateValidation']),
            update(state) {
                console.log(state);
                this.updateValidation({key:'agreement',value: state})
            },
            load(){
                let {valid, field, errorText} = this.checkValidation;
                if (!valid) {
                    window.location.href = '#' + field;
                    this.errorText = errorText;
                    this.error = true

                } else {
                    this.errorText = '';
                    this.error = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>