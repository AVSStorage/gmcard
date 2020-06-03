<template>
    <div v-show="item.status">
    <div class="social__block mt-2 mb-2 flex-column flex-sm-row " v-for="{id, data} in item.value"  :key="id">
        <div class="d-flex w-6 p-r">
            <input type="text" v-model="data" :placeholder="item.name" :data-index="item.id" :class="generateClass(item.id)">
            <button class="btn button-brd-left" v-on:click="deleteSocialValue({id: item.id, valueId: id})"><i class="material-icons">delete_outline</i></button>
        </div>
        <button v-show="item.value.length < 2" class="btn promo-form__link promo-form__link--dashed" v-on:click="addNewSocialValue(item.id)">+ еще {{ item.name }}</button>
    </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "SocialTextField",
        props: {
            item: Object
        },
        methods: {
            generateClass(id){
                return "promo-form__input promo-form__input--image w-100 " + "promo-form__input--image--" + id
            },
            ...mapActions([
                           'addNewSocialValue',
                           'deleteSocialValue'
                       ])
        }
    }
</script>

<style scoped>

</style>