<template>
    <div class="d-flex flex-column">
        <label :for="item.alias + '_' + item.id" class="promo-form__title mb-2">{{ item.name }}</label>
        <input type="text" v-model="type"  :placeholder="item.placeholder" :id="item.alias + '_' + item.id" name="address[]" class="promo-form__input">
    </div>
</template>

<script>
    export default {
        name: "OrganizationTextField",
        props : {
            item: Object
        },
       computed: {
            type: {
                get: function () {
                    return this.item[this.item.alias]
                },
                set: function (newValue) {
                    this.$emit('input', newValue)
                }
            }
       }
    }
</script>

<style scoped>

</style>