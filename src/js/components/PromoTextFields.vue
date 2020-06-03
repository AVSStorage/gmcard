<template>
        <div  class="justify-content-between"  :class="getClassName">
        <p class="promo-form__title" :class="item.header">
        {{ item.title }}
        <span class="promo-form__description">{{ item.subtitle}} </span>
        </p>
        <component v-bind:is="currentTabComponent(item.type)"  :item="item" class="tab"></component>
        </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Checkbox from "./elements/Checkbox.vue";
    import TextAreaElement from "./elements/TextArea.vue";
    import TextField from "./elements/TextField.vue";
    let components = {TextField, TextAreaElement};
    export default {
        name: "PromoTextFields",
        components: components,
        computed: {
                ...mapGetters(['textFieldData']),
                getClassName: function () {
                       return this.show ? 'd-flex animated fadeIn ' + this.item.titleClass : 'd-none'
                }
        },
        props: {
            item: Object,
            borderClass: String,
            show: Boolean
        },
        methods :{
            currentTabComponent: function(type) {
                return components[type];
            }
        }
    }
</script>

<style scoped>

</style>