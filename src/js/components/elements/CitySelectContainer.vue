<template>
    <div id="city" class="promo-form__wrapper d-flex flex-column"><label for="city"
                                                               class="promo-form__title w-100 mb-3 d-flex flex-column">Укажите
        город(а) (не более 20), в котором будет проходить ваша акция.</label>
        <multi-select-element :inputClass="inputClass" :placeholder="placeHolder"></multi-select-element>

    </div>
</template>

<script>
    import MultiSelectElement from "./MultiSelectElement.vue";

    export default {
        name: "CitySelectContainer",
        data() {
            return {
                placeHolder: 'Укажите город',
                inputClass: 'promo-form__input'
            }
        },
        components: {MultiSelectElement}
    }
</script>

<style scoped>

</style>