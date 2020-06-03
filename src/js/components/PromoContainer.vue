<template>
    <div>
    <div :id="item.id" v-if="!item.child.toggled || item.child.toggled.includes(selectedType)" class="promo-form__wrapper d-flex justify-content-between" :class="setClassName(item)" :key="item.id"  v-for="item in textFieldData" >
        <component v-bind:is="currentTabComponent(item.type)" :show="item.child.state"  :class="item.borderClass" :borderClass="item.borderClass"  v-bind:item="item.child" class="tab"></component>

    </div>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex';
    import PromoTextFields from "./PromoTextFields.vue";
    import PromoCheckboxes from "./PromoCheckboxes.vue";
    let components = {PromoTextFields, PromoCheckboxes};
    export default {
        name: "PromoContainer",
        components: components,


        computed: {...mapGetters(['textFieldData']),  ...mapGetters(['selectedType']), },
        methods :{
            currentTabComponent: function(type) {
                return components[type];
            },
            setClassName(item) {
                let id = location.hash.substr(1);
                return (item.child !== undefined) && (item.child.validations) && (id === 'title') ? 'error' : '';
            }
        }
    }
</script>

<style scoped>

</style>