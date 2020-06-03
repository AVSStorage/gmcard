<template>
    <ul data-simplebar data-simplebar-auto-hide="false" class="promo-form__category promo-form__category--wide promo-form__category--hover" v-if="hover" >
        <li v-for="(category,index) in categories" class="d-flex" :data-value="category.name" @mouseover="$emit('enter',true, categoryIndex )" @mouseleave="$emit('leave',categoryIndex)" >
            <input  type="checkbox" v-model="category.state" @change="$emit('toggleSelect', $event.target.checked,categoryIndex,index,category.name )" :id="getClass(index)" class="d-none">
            <label :for="getClass(index)" class="d-flex w-100">
                <span class="promo-form__checkbox mr-3"></span>
                <span>{{ category.name }}</span>
            </label>
            <i v-if="categoryIndex" class="material-icons">keyboard_arrow_right</i>
        </li>
    </ul>
</template>

<script>
    import SimpleBar from 'simplebar';
    import 'simplebar/dist/simplebar.css';
    export default {
        name: "CategorySelect",
        props: {
            hover: Boolean,
            categories: Array,
            categoryIndex: Number,
            uncheck : Boolean
        },
        methods: {
            getClass(index) {
                return `type_${index}` + this.categoryIndex;
            }
        }
    }
</script>

<style scoped>
    .simplebar-content-wrapper {
        overflow: auto;
    }
</style>