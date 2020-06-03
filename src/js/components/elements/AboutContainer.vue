<template>
    <div id="area" :class="setClassName" class="promo-form__wrapper d-flex flex-column"><p class="promo-form__title mb-4">Расскажите немного о себе или
        вашей компании</p>
        <text-area-element  @update="update" :index="0" :placeholder="item[0].placeholder" :state="true" :item="item[0]"></text-area-element>
        <div class="d-flex justify-content-between promo-form__border align-items-center promo-form__block"><p
                class="promo-form__title w-8">Допополнительные условия.<span class="promo-form__description"> Если по вашей акции есть какие-то дополнительные условия, о которых вы считаете нужным заявить - вы можете сделать это ниже. Если никаких дополнительных условий нет, то оставьте поле пустым.</span>
        </p>
        <checkbox :item="item[0]"></checkbox>
        </div>
        <text-area-element @update="update" :index="1" :placeholder="item[1].placeholder" :state="item[0].state" :item="item[1]"></text-area-element>
    </div>
</template>

<script>
    import TextAreaElement from "./TextArea.vue";
    import Checkbox from "./Checkbox.vue";
    import { mapActions } from 'vuex'
    export default {
        name: "AboutContainer",
        components: {TextAreaElement, Checkbox},
        data() {
            return {
                item : [{
                    classes: '',
                    state: false,
                    value: '',
                    placeholder: 'Mohito (Мохито) – польский бренд модной одежды. Марка разрабатывает, отшивает и выпускает на рынки одежду для элегантных и грациозных женщин, обладающих большой внутренней силой и энергией. Стильная и в тоже время романтичная одежда предназначается работницам офиса и любителям активного отдыха, тем, в ком жив бунтарский дух, кто легко и грациозно ломает устоявшиеся стереотипы привычного и скучного дресс-кода, очерченного для деловых людей. Одежда этой фирмы всегда на гребне волны современной моды. А высокое качество и низкие цены являются очень приятным бонусом при общении с этой компанией модной одежды.'
                },
                    {
                        value: '',
                        classes: 'promo-form__border align-items-center promo-form__block',
                        placeholder: 'Укажите дополнительные условия, если есть. Например: «сделайте покупку на 60.000 рублей и получите купон на 10.000 рублей в подарок на следующую покупку.'
                    }
                ]
            }
        },
        computed: {
            setClassName: function () {
                let id = location.hash.substr(1);
                return id === 'area' ? 'error-validation' : '';
            }
        },
        methods: {
            ...mapActions(['updateValidation']),
            update(index, value){
                this.item[index].value = value;
                if (value) {
                    this.updateValidation({key:'area',value:true})
                }
            }
        }
    }
</script>

<style scoped>

</style>