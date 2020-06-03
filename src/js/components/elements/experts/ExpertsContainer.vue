<template>
    <div class="promo-form__wrapper d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center"><p class="promo-form__title d-flex">
            Дополнительные опции (только для Экспертов)</p>
            <a href="www.gmcash.ru/premium" class="btn promo-form__link promo-form__link--dashed promo-form__link--big pr-0">подробнее об
                эксперт-аккаунтах
            </a>
        </div>
        <experts-block v-for="item in items" :key="item.id" @checkItem="checkItem" :item="item"></experts-block>
    </div>
</template>

<script>
    import ExpertsBlock from "./ExpertsBlock.vue";
    export default {
        name: "ExpertsContainer",
        components: {ExpertsBlock},

        data() {
            return {
                events: [],
                message: 'fghfgf',
                items : [
                    {
                        id:1,
                        prefix: 'Поднимать акцию на первое место каждые',
                        suffix: 'часа',
                        value: 5,
                        state:false,
                        type: 'time'
                    },
                    {
                        id:2,
                        prefix: 'Автоматически перезапускать акцию после завершения на',
                        suffix: 'дней',
                        value: 0,
                        state:false,
                        type: 'days'
                    },
                ]
            }
        },
        methods: {
            checkItem : function (id, notEmpty = true) {
                let index = this.items.findIndex(item => item.id === id);
                if (notEmpty) {
                    this.items[index].state = !this.items[index].state;
                } else {
                    this.items[index].state = 0;
                }
            }
        }
    }
</script>

<style scoped>

</style>