<template>
    <div class="promo-form__wrapper d-flex flex-column"><p class="promo-form__title d-flex flex-column">Выберите
        категории, к которым будет прикреплена ваша акция.</p>
        <div class=" p-r promo-form__category-wrapper mt-4" @mouseleave="hide(100)">
            <category @enter="show" @leave="hide" :index="categories1.child" :hover="categories1.state" :categories="categories1.items" :shown="false"></category>
            <category @enter="show" @leave="hide" :index="categories2.child" :hover="categories2.state" :categories="categories2.items" :shown="true"></category>
            <category-select  @toggleSelect="toggleSelect" @enter="show" @leave="hide" :categoryIndex="categories3.child" :hover="categories3.state" :categories="categories3.items"></category-select>
            <category-select  @toggleSelect="toggleSelect" @enter="show"  :hover="categories4.state" @leave="hide" :categoryIndex="categories4.child" :categories="categories4.items"></category-select>
        </div>
        <button @click="open = !open" class="d-flex btn d-md-none promo-form__image-label mt-2 mb-2">Открыть категории</button>
        <drop-down v-show="open" @toggleSelect="addNewCategory"></drop-down>
        <p class="promo-form__title d-flex flex-column mt-3 mb-3">Вы выбрали</p>
        <div class="d-flex flex-wrap">

            <label v-for="(item, index) in selected"
               class="promo-form__category-item  selected__button mb-2 mr-3">
                {{ item }}
            <button @click="deleteSelected(index, item)" class="btn button-brd-left button-brd-left--white"><i class="material-icons text-white">delete_outline</i>
            </button>
        </label>

        </div>

    </div>
</template>

<script>
    import Category from "./Category.vue";
    import CategorySelect from "./CategorySelect.vue";
    import DropDown from "./DropDown.vue";
    import CategoryNodes from "./CategoryNodes.vue";



    export default {
        name: "CategoriesContainer",
        components: {DropDown, Category, CategorySelect, CategoryNodes},
        computed: {
            validateChecked: function () {
                return this.categories3.items.filter(item => item.state).length < 10;
            }
        },
        data() {
            return {
                open:false,
                selected: [],
                categories1: {
                    id: 1,
                    items: ['Кафе/Бары', 'Для неё', 'Для него', 'Детям', 'Для дома', 'Техника', 'Услуги', 'Красота', 'Туры и отели', 'Магазины', 'Для авто', 'Курсы', 'Репетиторы'],
                    state: true,
                    child: 2
                },
                categories2: {
                    id: 2,
                    items: ['Кафе/Бары', 'Для неё', 'Для него', 'Детям', 'Для дома', 'Техника', 'Услуги', 'Красота', 'Туры и отели', 'Магазины', 'Для авто', 'Курсы', 'Репетиторы', 'Для авто', 'Курсы', 'Репетиторы'],
                    state: false,
                    child: 3
                },
                categories3: {
                    id: 3,
                    items: [{name: "Грузоперевозки", count: 1929, state:false}, {
                        name: "Фото, видео, аудио",
                        count: 1200, state:false
                    }, {name: "Свадьба и торжества", count: 985, state:false}, {name: "Все для красоты", count: 136, state:false}, {
                        name: "Врачи",
                        count: 789, state:false
                    }, {name: "ИТ-Фрилансеры", count: 657}, {name: "Ремонт и стройка", count: 369, state:false}, {
                        name: "Для авто",
                        count: 321, state:false
                    }, {name: "Бухгалтеры и юристы", count: 129, state:false}, {
                        name: "Ветеринары",
                        count: 225, state:false
                    }, {name: "Автоконструкторы", count: 980, state:false}, {name: "Домашний персонал", count: 412, state:false}, {
                        name: "Уборка",
                        count: 302, state:false
                    },{name: "Грузоперевозки", count: 1929, state:false},{name: "Грузоперевозки", count: 1929, state:false},{name: "Грузоперевозки", count: 1929, state:false}],
                    child: 4,
                    state: false
                },
                categories4: {
                    id: 4,
                    items: [{name: "Грузоперевозки", count: 1929, state:false}, {
                        name: "Фото, видео, аудио",
                        count: 1200, state:false
                    }, {name: "Свадьба и торжества", count: 985, state:false}, {name: "Все для красоты", count: 136, state:false}, {
                        name: "Врачи",
                        count: 789, state:false
                    }, {name: "ИТ-Фрилансеры", count: 657, state:false}, {name: "Ремонт и стройка", count: 369, state:false}, {
                        name: "Для авто",
                        count: 321, state:false
                    }, {name: "Бухгалтеры и юристы", count: 129, state:false}, {
                        name: "Ветеринары",
                        count: 225, state:false
                    }, {name: "Автоконструкторы", count: 980, state:false}, {name: "Домашний персонал", count: 412, state:false}, {
                        name: "Уборка",
                        count: 302, state:false
                    },{name: "Грузоперевозки", count: 1929, state:false},{name: "Грузоперевозки", count: 1929, state:false},{name: "Грузоперевозки", count: 1929, state:false}],
                    child: 0,
                    state: false
                },
                categories5: {
                    id: 5,
                    items: [{name: "Грузоперевозки32", count: 1929, state:false}, {
                        name: "Фото, видео, аудио23",
                        count: 1200, state:false
                    }, {name: "Свадьба и торжества3", count: 985, state:false}, {name: "Все для красоты", count: 136, state:false}, {
                        name: "Врачи",
                        count: 789, state:false
                    }, {name: "ИТ-Фрилансеры", count: 657, state:false}, {name: "Ремонт и стройка", count: 369, state:false}, {
                        name: "Для авто",
                        count: 321, state:false
                    }, {name: "Бухгалтеры и юристы", count: 129, state:false}, {
                        name: "Ветеринары",
                        count: 225, state:false
                    }, {name: "Автоконструкторы", count: 980, state:false}, {name: "Домашний персонал", count: 412, state:false}, {
                        name: "Уборка",
                        count: 302, state:false
                    }],
                    child: 0,
                    state: false
                }
            }
        },
        methods: {
            addNewCategory(checked, name){
                if (checked) {
                    this.selected.push(name)
                } else {
                    let index = this.selected.findIndex(item => item === name);
                    this.selected.splice(index,1);
                }
            },
            checkIfexists(items, name) {
               let index =  items.findIndex(cat => cat.name === name);
               if (index !== -1) {
                   items[index].state = false
               }
            },
            deleteSelected(index, name) {
              this.selected.splice(index,1);
              this.checkIfexists(this.categories3.items, name);
              this.checkIfexists(this.categories4.items, name);
            },
            show(value, index, target) {
                if (index) {

                    if (!this[`categories${index}`].state) {
                        this[`categories${index}`].state = true
                    }
                } else {

                    if (!this.categories4.state) {
                        this.categories4.state = true;
                    }
                }

            },

            toggleSelect(state, categoryIndex, index,target) {
                if (categoryIndex && state) {
                    if (this.validateChecked) {
                        this.selected.unshift(this[`categories${categoryIndex - 1}`].items[index].name);
                    }
                } else if (state && !categoryIndex) {
                    if (this.validateChecked) {
                        let curIndex =  this.categories3.items.findIndex(cat => cat.name === target);
                        this.categories3.items[curIndex].state = true;
                        this.selected.unshift(this.categories4.items[index].name);
                    }
                } else if (!state && categoryIndex) {
                        let itemIndex = this.selected.indexOf(this[`categories${categoryIndex - 1}`].items[index].name);
                        this.selected.splice(itemIndex, 1);
                } else if (!state && !categoryIndex) {
                    if (this.validateChecked) {
                        let curIndex = this.categories3.items.findIndex(cat => cat.name === target);
                        this.categories3.items[curIndex].state = false;
                        let itemIndex = this.selected.indexOf(this.categories4.items[index].name);
                        this.selected.splice(itemIndex, 1);

                    }
                }
            },
            hide(index) {
                if (index) {
                    if (index === 2) {
                        this.categories3.state = false;
                    } else if (index === 3) {
                        this.categories4.state = false;
                    } else if (index === 100) {

                        this.categories2.state = false
                        this.categories3.state = false
                        this.categories4.state = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>