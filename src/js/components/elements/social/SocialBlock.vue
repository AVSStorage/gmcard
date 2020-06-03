<template>
    <div class="promo-form__wrapper d-flex flex-column">
        <div class="d-flex justify-content-between"><p class="promo-form__title d-flex flex-column w-8">Если у
            вас или вашего бизнеса есть сайт или сообщества в социальных сетях, вы можете указать ссылки на них
            ниже.</p>
            <checkbox :item="item"></checkbox>
        </div>
        <div class="promo-form__social flex-column promo-form__border promo-form__block" :class="getClass">
            <div class="d-flex flex-wrap social__wrapper">
                <social-button
                        v-for="button in social"
                        :key="button.id"
                        :item="button">
                </social-button>
            </div>
            <div class="d-flex flex-column">
                <social-text
                        v-for="button in social"
                        :key="button.id + Math.random()"
                        :item="button">
                </social-text>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import SocialButton from "./SocialButton.vue";
    import SocialTextField from "./SocialTextField.vue";
    import Checkbox from "../Checkbox.vue";

    export default {
        name: "SocialBlock",
        components: {'social-button': SocialButton, 'social-text': SocialTextField, Checkbox},
        data() {
            return {
                item : {
                    state: false
                }
            }
        },
        computed: {
            ...mapGetters(['social']),
            getClass: function () {
                return this.item.state ? 'd-flex animated fadeIn ' : 'd-none'
            }
        }
    }
</script>

<style scoped>

</style>