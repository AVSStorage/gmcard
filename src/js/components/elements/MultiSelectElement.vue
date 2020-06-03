<template>
    <div>
        <multi-select :options="options"
                      :selected-options="items"
                      :placeholder="placeholder"
                      :hideSelectedOptions="true"
                      @searchchange="searchCity"
                      @select="onSelect">
        </multi-select>
        <div class="d-flex flex-wrap" :class="items.length > 0 ? 'mt-3' : ''">
                <label @click="deleteSelected" v-for="item in items" class="promo-form__city selected__button mr-2 mb-2"><span>{{item.text}}</span>
                    <button class="btn button-brd-left button-brd-left--white"><i class="material-icons text-white">delete_outline</i>
                    </button>
                </label>
        </div>
    </div>
</template>

<script>
    import 'vue-search-select/dist/VueSearchSelect.css'
    import {MultiSelect} from 'vue-search-select';
    import { mapActions} from 'vuex'
    import { ajaxFindCity} from "../../store/actions";

    export default {
        name: "MultiSelectElement",
        props: {
            placeholder: String,
            id: String
        },
        data() {
            return {
                options: [
                    {value: '1', text: 'Абрамцево'},
                    {value: '2', text: 'Москва'},
                    {value: '3', text: 'Алабино'},
                    {value: '4', text: 'Апрелевка'},
                    {value: '5', text: 'Архангельское'},
                    {
                        value:'6',
                        text: "Ашитково"
                    },
                    {
                        value: '7',
                        text: "Байконур"
                    },
                    {
                        value: '8',
                        text: "Бакшеево"
                    },
                    {
                         value: '9',
                         text: "Балашиха"
                    },
                    {
                        value: '10',
                        text: "Барыбино"
                    },
                    {
                        value:'11',
                        text: "Белоомут"
                    },
                    {
                        value: '12',
                        text: "Белые Столбы"
                    },
                    {
                       value:'13',
                        text: "Бородино"
                    },
                    {
                        value:'14',
                        text: "Бронницы"
                    },
                    {
                        value: '15',
                        text: "Быково"
                    },
                    {
                       value:'16',
                        text: "Валуево"
                    },
                    {
                       value: '18',
                        text: "Вербилки"
                    },
                    {
                        value: '19',
                        text: "Верея"
                    },
                    {
                        value: '20',
                        text: "Видное"
                    },
                    {
                        value: '21',
                        text: "Внуково"
                    },
                    {
                        value: '22',
                        text: "Вороново"
                    },
                    {
                        value: '23',
                        text: "Волоколамск"
                    },
                ],
                searchText: '', // If value is falsy, reset searchText & searchItem
                items: [],
                lastSelectItem: {}
            }
        },

        methods: {
            ...mapActions(['updateValidation']),
            searchCity (searchText) {
                this.searchText = searchText;
                // ajaxFindCity(searchText).then(response => {
                //     this.options = response
                // })
            },
            onSelect(items, lastSelectItem) {
                if (items.length < 21) {
                    this.items = items
                    this.lastSelectItem = lastSelectItem
                }
                if (this.items.length > 0){
                    this.updateValidation({key:'city',value:true})
                }
            },
            deleteSelected(value) {
                let index = this.items.findIndex(item => item.value === value);
                this.items.splice(index, 1);
            },
            // deselect option
            reset() {
                this.items = [] // reset
            },
            // select option from parent component
            selectFromParentComponent() {
                this.items = _.unionWith(this.items, [this.options[0]], _.isEqual)
            }
        },
        components: {
            MultiSelect
        }
    }
</script>

<style scoped>

</style>