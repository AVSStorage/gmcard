<template>
    <div class="d-flex align-items-center mb-3 flex-wrap">
        <input @change="reset" type="checkbox" id="sale_days2" v-model="state" class="d-none">
        <label
            for="sale_days2" class="promo-form__title d-flex mr-3 align-items-center"><span
            class="promo-form__checkbox mr-3"></span><span class="mb-2 mb-md-0">Акция доступна в</span></label>
        <div class="d-flex mt-2 mt-sm-0 flex-wrap">
            <div class="d-flex"  v-for="(item, index) in items">
                <input v-on:change="detectChange" type="checkbox" v-model="item.state" :id="`day_${index}`" class="d-none">
            <label :for="`day_${index}`"
                   class="checkbox">{{ item.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeekDay",
        data() {
            return {
                state: false,
                items: [
                    {
                        name: 'пн',
                        state: false
                    },
                    {
                        name: 'вт',
                        state: false
                    },
                    {
                        name: 'ср',
                        state: false
                    },
                    {
                        name: 'чт',
                        state: false
                    },
                    {
                        name: 'пт',
                        state: false
                    },
                    {
                        name: 'сб',
                        state: false
                    },
                    {
                        name: 'вс',
                        state: false
                    },
                ]
            }
        },
        methods: {
            detectChange : function () {
                if (!this.state) {
                    this.state = true;
                }
            },
            reset: function () {
                if (!this.state) {
                    this.items.filter(item => {
                        item.state = false
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>