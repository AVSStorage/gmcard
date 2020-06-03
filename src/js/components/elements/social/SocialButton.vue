<template>
    <div>
    <input :id="social_id(item.id)"  v-on:change="toggleSocialButton({state: item.status, id: item.id})" v-model="item.status" type="checkbox" class="social__switch d-none">
    <label :for="social_id(item.id)" :class="generateClass(item.id)">{{ item.name }}</label>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "SocialButton",
        props : {
            item: Object
        },
        methods: {
            generateClass(id){
                return "social__button " + "social__button--" + id
            },
            social_id(id) {
                return 'social_type_' + id
            },
            ...mapActions([
                'toggleSocialButton'
            ])

        },
    }
</script>

<style scoped>

</style>