<template>

    <div class="d-flex flex-column promo-form__organization mt-3">
        <div class="d-flex justify-content-between pb-2">
            <p class="promo-form__title d-flex align-items-center">
                <i class="material-icons">place</i>Организация 1</p>
            <button class="promo-form__delete" @click="$emit('delete', index)"><i class="material-icons">delete_outline</i></button>
        </div>
        <div class="d-flex flex-wrap promo-form__border mt-2 pt-4 p-r" >
            <div class="d-flex flex-column w-50 mb-2 pr-3" v-for="item in single">
                <text-field  v-bind:item="item" :key="item.id"></text-field>
            </div>
        </div>
        <div class="d-flex flex-wrap mb-2">
            <div class="d-flex flex-column w-50" v-for="item in multiple" :key="item.id">
                <label :for="item.alias + item.id" class="promo-form__title mb-2">{{ item.name }}</label>
                <div class="d-flex p-r pr-3">
                    <input type="tel" v-model="item.phone"  :placeholder="item.placeholder" :id="item.alias + item.id + Math.round(Math.random() * 4)" name="phone[]"
                           class="promo-form__input promo-form__input--tel w-100">
                    <button class="btn button-brd-left mr-3" @click="$emit('deleteNumber',id, item.id)"><i class="material-icons">delete_outline</i></button>
                </div>
            </div>
            <button class="btn promo-form__link promo-form__link--dashed d-flex align-items-end" @click="$emit('addNumber', id)"><span>+ ещё телефон</span></button>
        </div>
    </div>

</template>

<script>

    import OrganizationTextField from "./OrganizationTextField.vue";
    export default {
        name: "Organization",
        components: {'text-field' : OrganizationTextField},
        props: {
            single: Array,
            id: Number,
            multiple: Array,
            index: Number
        }
    }
</script>

<style scoped>

</style>