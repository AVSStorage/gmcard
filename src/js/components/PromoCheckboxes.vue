<template>
    <div>
    <div class="justify-content-between" :class="item.borderClass" :key="item.id">
        <p class="promo-form__title" :class="item.header">
            {{ item.title }}
            <span class="promo-form__description">{{ item.subtitle}} </span>
        </p>
        <checkbox :id="item.id" :value="item.state" v-bind:item="item"></checkbox>
    </div>
    <promo-text-fields v-if="item.child" :show="item.state" :item="item.child" :borderClass="item.child.borderClass"></promo-text-fields>
    </div>

</template>

<script>
    import Checkbox from "./elements/Checkbox.vue";
    import TextField from "./elements/TextField.vue";
    import TextArea from "./elements/TextArea.vue";
    import PromoTextFields from "./PromoTextFields.vue";

    let components = {TextField, Checkbox, TextArea,PromoTextFields};
    export default {
        name: "PromoCheckboxes",
        components: components,
        props: {
            borderClass: String,
            item: Object
        }
    }
</script>

<style scoped>

</style>