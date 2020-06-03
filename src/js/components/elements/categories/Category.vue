<template>
    <ul data-simplebar data-simplebar-auto-hide="false"  class="promo-form__category" :class="{'promo-form__category--hover' : shown }" v-if="hover" >
        <li @mouseenter="$emit('enter',true, index, $event.currentTarget)" @mouseleave="$emit('leave',index)"
          v-for="category in categories">{{ category }}<i class="material-icons">keyboard_arrow_right</i></li>
    </ul>
</template>

<script>


    export default {
        name: "Category",
        props: {
            hover: Boolean,
            shown: Boolean,
            categories: Array,
            index: Number
        }
    }
</script>

<style scoped>

</style>