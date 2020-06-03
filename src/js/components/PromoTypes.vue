<template>
    <div id="type" class="promo-form col-12 p-0 pl-sm-2 pr-sm-2 col-lg-12">
    <div class="promo-form__wrapper d-flex flex-wrap">
        <ul class="d-flex flex-wrap promo-form__types justify-content-between">
            <li :class="generateClass(index)" v-for="(type, index) in types">
                <input type="radio" name="sale_type[]" v-model="type.status" @change="changeType({value: $event.target.checked, index})"  :id="generateName(index)" class="promo-form__input d-none"><label
                    :for="generateName(index)" class="d-flex">
                <span :data-hint="hint"
                    class="hint-top-middle-t-info-s-big hint-anim promo-form__type-hint">?</span>
                <button area-label="Просто скидка" class="promo-form__type-button">{{ type.name }}</button>
            </label></li>
        </ul>
    </div>
    <slot></slot>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "PromoTypes",
        data() {
            return {
                hint: "Mohito (Мохито) – польский бренд модной одежды. Марка разрабатывает, отшивает и выпускает на рынки одежду для элегантных и грациозных женщин, обладающих большой внутренней силой и энергией."
            }
        },
        methods: {
          generateClass(index) {
              return index < 3 ? 'promo-form__type promo-form__type--big' : 'promo-form__type';
            },
            generateName(index) {
              return 'sale_type_' + index;
            },
            ...mapActions([
                'changeType'
            ])
        },
        computed : mapGetters(['types'])
    }
</script>

<style scoped>

</style>