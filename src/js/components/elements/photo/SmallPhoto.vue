<template>
    <div class="d-flex flex-column promo-form__image-wrapper mb-2 animated fadeIn" >
        <div class="promo-form__image promo-form__image--small d-flex flex-column" :class="setClass"></div>
        <button class="promo-form__image-delete" v-on:click="$emit('deleteSmallImage', image.id)"><i class="material-icons">delete_outline</i></button>
        <input v-on:change="$emit('processFile',$event, image.id, 'smallImages')" :id="generateName(image.id)" type="file" name="sale_image[]" class="d-none">
        <label :for="generateName(image.id)" class="promo-form__image-label mt-3 mb-3">Выберите
        файл</label><span v-show="!image.loaded" class="promo-form__description">Файл не выбран</span>
    </div>
</template>

<script>
    export default {
        name: "SmallPhoto",
        props: {
            image: Object
        },
        computed: {
            setClass: function() {
                return this.image.loaded ? 'active promo-form__image--loaded' : '';
            }
        },
        methods: {
            generateName(id) {
                return `sale_image_small_${id}`
            }
        }
    }
</script>

<style scoped>

</style>