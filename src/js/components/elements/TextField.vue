<template>
    <div  class="d-flex flex-column w-33" :class="item.borderClass">
        <label v-bind:for="item.name" class="promo-form__title w-100 mb-2">{{ item.label }}</label>
        <input v-if="!getInput" :pattern="getPattern" :min="getMin" :type="generateType"
             v-model="item.data" v-bind:placeholder="item.placeholder" v-bind:id="item.name"
               v-bind:name="item.name" class="promo-form__input" :class="item.inputClassName">
        <div v-else  class="d-flex p-r">
            <input minlength="1"  :type="generateType"
                   v-model="$v.item.data.$model" @change="updateInput($event.target.value)" v-bind:placeholder="item.placeholder" v-bind:id="item.name"
                   v-bind:name="item.name" class="promo-form__input" :class="item.inputClassName">
            <span class="text-counter">{{$v.item.data.$model.length}}</span>
        </div>
        <small class="error" v-if="item.validations && !$v.item.data.maxLength">Не больше  {{$v.item.data.$params.maxLength.max}} символов</small>
    </div>
</template>

<script>
    import {maxLength, required} from 'vuelidate/lib/validators'
    import { mapActions} from 'vuex'

    export default {
        name: "TextField",
        props: {
            item: Object
        },
        computed: {
            getClass: function () {
                return this.item.width + ' ' + (this.item.state ? 'd-flex' : 'd-none');
            },
            generateType: function () {
                return this.item.inputType ? this.item.inputType : 'text';
            },
            getMin: function () {
                return this.item.inputType === 'number' ? 0 : '';
            },
            getPattern: function () {
                return this.item.pattern ? this.item.pattern : ''
            },
            getInput: function () {
                return this.item.validations ? this.item.validations : false;
            }
        },
        validations() {
            if (this.item.validations) {

                return {
                    item:
                        {
                            data: {
                                required,
                                maxLength: maxLength(64)
                            }
                        }
                }
            } else {

                return {
                    item:
                        {
                            data: {
                                required
                            }
                        }
                }
            }
        },
        methods: {
            ...mapActions(['updateValidation']),
            updateInput(value) {

               if (value.length > 0){

                    this.updateValidation({key: 'title', value: true})
               }
               if (value.length > 64) {
                   this.item.data = value.slice(0, 64);
               }
            }

        }
    }
</script>

<style scoped>

</style>