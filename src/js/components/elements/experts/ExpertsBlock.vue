<template>
    <div class="d-flex justify-content-between align-items-center promo-form__border mt-2 pt-3 p-r pb-2 promo-form__experts">
        <div class="d-flex flex-column mr-2 mr-md-0">
            <label class="d-flex align-items-center" :class="{ 'form-group--error': $v.item.value.$error }">
                {{ item.prefix}}
                <input v-model.number="$v.item.value.$model"
                         type="number" placeholder="0" @change="updateState($event.target.value)" :class="{'promo-form__input--blur' : !item.state }"  min="0" class="promo-form__input time-input ml-2 mr-2">

            {{ item.suffix}}</label>
            <small class="error" v-if="!$v.item.value.between">Не меньше {{$v.item.value.$params.between.min}} и не больше {{$v.item.value.$params.between.max}}</small>

        </div>

        <checkbox :item="item"></checkbox>
    </div>
</template>

<script>
    import Checkbox from "../Checkbox.vue";
    import { between } from 'vuelidate/lib/validators'

    export default {
        name: "ExpertsBlock",
        components: {Checkbox},
        data() {
            return {
                events: []
            }
        },
        props: {
            item: Object
        },
        methods: {
            updateState(value) {
                this.$v.$touch();
                if (Number(value) > 0 && !this.$v.$invalid){
                    this.$emit('checkItem', this.item.id)
                } else {
                    this.$emit('checkItem', this.item.id, false)
                }

            }
        },
        validations() {
            if (this.item.type === 'days') {
                return {
                    item : {
                        value: {
                            between: between(0, 365)
                        }
                    }
                }
            }
            return {
                item : {
                    value: {
                        between: between(0, 23)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>