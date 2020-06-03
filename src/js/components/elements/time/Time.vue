<template>
    <div class="d-flex align-items-center mb-3 flex-wrap">
        <input type="checkbox" id="sale_time2" v-model="state" class="d-none"><label
            for="sale_time2" class="promo-form__title d-flex mr-3 align-items-center"><span
            class="promo-form__checkbox mr-3"></span><span class="mb-2 mb-md-0">Акция доступна с</span></label>
        <div class="d-flex align-items-center justify-content-center mt-2 mt-sm-0">
            <input type="number" placeholder="00"  v-model.number="$v.start.hours.$model"
                                                                             name="hours_start2" min="0" max="23"
                                                                             class="time-input"><span class="ml-1 mr-1">:</span>
            <input v-model.number="$v.start.minutes.$model"
                type="text" placeholder="00" name="minutes_start2" min="0" max="60" class="time-input"><span
                class="ml-2 mr-1">-</span><span class="mr-2 ml-1">до</span>
            <input type="number" placeholder="00"   v-model.number="$v.end.hours.$model"
                                                                                  name="hours_end2" min="0" max="23"
                                                                                  class="time-input"><span
                class="ml-1 mr-1">:</span><input v-model.number="$v.end.minutes.$model" type="number" placeholder="00" name="minutes_end2" min="0" max="60"
                                                 class="time-input">
            <small class="error" v-if="$v.$invalid">Заполните все поля</small>

        </div>
    </div>
</template>

<script>
    import { between } from 'vuelidate/lib/validators'
    export default {
        name: "Time",
        data() {
            return {
                state: false,
                start : {
                    hours: 0,
                    minutes: 0
                },
                end : {
                    hours: 0,
                    minutes: 0
                }
            }
        },
        methods: {

        },
        validations : {
           start : {
               hours : {
                   between: between(0,23)
               },
               minutes: {
                   between: between(0,60)
               }
           },
            end : {
                hours : {
                    between: between(0,23)
                },
                minutes: {
                    between: between(0,60)
                }
            },
        }
    }
</script>

<style scoped>

</style>