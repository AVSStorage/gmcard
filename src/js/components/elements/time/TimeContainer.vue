<template>
    <div class="promo-form__wrapper d-flex flex-column">
        <div class="d-flex justify-content-between"><p class="promo-form__title d-flex flex-column w-8">Если ваша акция
            доступна только в определенные дни и часы.
            <span class="promo-form__description">Общий отсчет времени до конца акции не  прекратится, она так же будет находится на сайте, но пользователи смогут перейти в нее только в указанные вами дни и часы.</span>
        </p>
            <checkbox :item="item"></checkbox>
        </div>
        <div class="promo-form__schedule flex-wrap mt-3 promo-form__border p-r pt-3" :class="curClass">
            <week-day></week-day>
            <time-widget></time-widget>
        </div>
    </div>
</template>

<script>
    import Checkbox from "../Checkbox.vue";
    import Time from "./Time.vue";
    import WeekDay from "./WeekDay.vue";
    export default {
        name: "TimeContainer",
        components: {Checkbox, 'time-widget' :Time, WeekDay},
        computed: {
            curClass: function () {
                return this.item.state ? 'd-flex animated fadeIn' : 'd-none'
            }
        },
        data() {
            return {
                item: {
                    state: false
                }
            }
        }
    }
</script>

<style scoped>

</style>