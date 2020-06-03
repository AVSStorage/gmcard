<template>
    <div class="promo-form__image mb-2 promo-form__image--big d-flex flex-column animated fadeIn" :class="updateClass">
        <span v-if="image.required" class="promo-form__title w-100 font-weight-bold text-center">Обложка (обязательно)</span>
        <span v-else class="promo-form__title w-100 font-weight-bold text-center">Не обязательно</span>
        <span class="promo-form__description" v-show="!image.loaded">Файл не выбран</span>
        <input v-on:change="$emit('processFile', $event,image.id,'sliderImages')" :id="generateName(image.id)" type="file" name="sale_image[]" :required="image.required" class="d-none" >
        <label :for="generateName(image.id)" class="promo-form__image-label mt-2">Выберите файл</label>
        <div class="error" v-if="!required">Field is required</div>
    </div>

</template>

<script>

    export default {
        name: "SliderPhoto",
        data() {
          return {
              className: ''
          }
        },
        props: {
            image: Object,
            required: Boolean
        },
        computed:{
            updateClass: function () {
            this.className += this.image.required ? 'active ' : '';

            if (this.image.loaded && !this.image.required) {
                this.className +=  'active promo-form__image--loaded';
            } else if (this.image.loaded) {
                this.className += 'promo-form__image--loaded';
            }  else {
                this.className = '';
            }
            return this.className;
        }},
        methods : {
            generateName(id) {
                return `sale_image_${id}`
            }
        }
    }
</script>

<style scoped>

</style>