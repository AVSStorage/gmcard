<template>
    <label class="promo-form__title switch-wrap">
        <input type="checkbox" @input="$emit('input', $event.target.value)" v-model="item.state" >
        <div class="switch"></div>
    </label>
</template>

<script>
    export default {
        name: "Checkbox",
        props: {
            id: Number,
            value: Boolean,
            item: Object
        }
    }
</script>

<style scoped>

</style>