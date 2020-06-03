<template>
    <div class="col-lg-12 category__main row no-gutters p-0" @mouseenter="hideMenu=false" @mouseleave="hideMenuFunc" :class="{'hidden' : hideMenu }">
        <menu-item v-for="(category,index) in categories" @toggleEnter="toggleEnter" @show="show" @hide="hide" :index="index" @hideMenu="hideMenuFunc" :hash="category.hash" :key="index" v-show="category.state" :data="category.items"></menu-item>
        <div class="d-md-none flex-column align-items-end w-100 category__mobile" :class="{'d-flex' : hideMobile }">
            <button @click="hideMobileMenu"  type="button" aria-label="Close" class="close close-category d-flex d-md-none"  ><span
                    aria-hidden="true">×</span></button>
                <menu-item-mobile
                        :data="categories[0].items"
                        :index="0"
                        :depth="1"
                        :key="0 + categories[0].hash"
                >
                </menu-item-mobile>

        </div>
    </div>
</template>

<script>
    import MenuItem from "./MenuItem.vue";
    import MenuItemMobile from "./MenuItemMobile.vue";
    let categoriesData = [{name: "Грузоперевозки", count: 1929, state:false},
        {name: "Фото, видео, аудио", count: 1200, state:false},
        {name: "Свадьба и торжества", count: 985, state:false},
        {name: "Все для красоты", count: 136, state:false},
        {name: "Врачи", count: 789, state:false},
        {name: "ИТ-Фрилансеры", count: 657, state:false},
        {name: "Ремонт и стройка", count: 369, state:false},
        {name: "Для авто", count: 321, state:false},
        {name: "Бухгалтеры и юристы", count: 129, state:false},
        {name: "Ветеринары", count: 225, state:false},
        {name: "Автоконструкторы", count: 980, state:false},
        {name: "Домашний персонал", count: 412, state:false},
        {name: "Уборка", count: 302, state:false}];
    export default {
        name: "Menu",
        components: {MenuItem, MenuItemMobile},
        data() {
            return {
                currentIndex: "" ,
                currentPos: {},
                hideMenu: true,
                hideMobile: false,
                categories: [
                    {
                        state: true,
                        items: [{name: "Грузоперевозки", count: 1929, state:false},
                            {name: "Фото, видео, аудио", count: 1200, state:false},
                            {name: "Свадьба и торжества", count: 985, state:false},
                            {name: "Все для красоты", count: 136, state:false},
                            {name: "Врачи", count: 789, state:false},
                            {name: "ИТ-Фрилансеры", count: 657, state:false},
                            {name: "Ремонт и стройка", count: 369, state:false},
                            {name: "Для авто", count: 321, state:false},
                            {name: "Бухгалтеры и юристы", count: 129, state:false},
                            {name: "Ветеринары", count: 225, state:false},
                            {name: "Автоконструкторы", count: 980, state:false},
                            {name: "Домашний персонал", count: 412, state:false},
                            {name: "Уборка", count: 302, state:false}],
                        hash: '#1',
                    },
                    {
                        state: false,
                        items: [{name: "Грузоперевозки", count: 1929, state:false},
                            {name: "Фото, видео, аудио", count: 1200, state:false},
                            {name: "Свадьба и торжества", count: 985, state:false},
                            {name: "Все для красоты", count: 136, state:false},
                            {name: "Врачи", count: 789, state:false},
                            {name: "ИТ-Фрилансеры", count: 657, state:false},
                            {name: "Ремонт и стройка", count: 369, state:false},
                            {name: "Для авто", count: 321, state:false},
                            {name: "Бухгалтеры и юристы", count: 129, state:false},
                            {name: "Ветеринары", count: 225, state:false},
                            {name: "Автоконструкторы", count: 980, state:false},
                            {name: "Домашний персонал", count: 412, state:false},
                            {name: "Уборка", count: 302, state:false}],
                        hash: "#2",
                    },
                    {
                        state: false,
                        items: [{name: "Грузоперевозки", count: 1929, state:false},
                            {name: "Фото, видео, аудио", count: 1200, state:false},
                            {name: "Свадьба и торжества", count: 985, state:false},
                            {name: "Все для красоты", count: 136, state:false},
                            {name: "Врачи", count: 789, state:false},
                            {name: "ИТ-Фрилансеры", count: 657, state:false},
                            {name: "Ремонт и стройка", count: 369, state:false},
                            {name: "Для авто", count: 321, state:false},
                            {name: "Бухгалтеры и юристы", count: 129, state:false},
                            {name: "Ветеринары", count: 225, state:false},
                            {name: "Автоконструкторы", count: 980, state:false},
                            {name: "Домашний персонал", count: 412, state:false},
                            {name: "Уборка", count: 302, state:false}],
                        hash:"#3",
                    }],
            }
        },
        methods: {
            show(index) {

                if (index < this.categories.length) {
                        this.categories[index].state = true;
                } else {
                    this.categories[1].state = true;
                    this.categories[2].state = true;
                }
            },
            toggleEnter(item,index,state){

                    let i = this.categories[index].items.indexOf(item)


                    if ((this.currentIndex === index) || this.currentIndex === '') {
                        this.categories[index].items[i].state = state
                        this.currentPos = item;
                        if (this.currentIndex === '') {
                            this.currentIndex = index
                        }
                    } else {
                        if (this.currentIndex !== 2) {
                            let i = this.categories[this.currentIndex].items.indexOf(this.currentPos)
                            this.categories[this.currentIndex].items = this.categories[this.currentIndex].items.map((item, index) => {
                                return index === i ? {...item, state: true} : {...item, state: false}
                            })
                        }
                        this.currentIndex = index

                    }
            },
            hideMobileMenu(){
                this.hideMenu = true;
                this.hideMobile = !this.hideMobile
            },
            hideMenuFunc(){
                this.hideMenu = true;
                this.categories[1].state = false;
                this.categories[2].state = false;
            },
            hide(index){
                if (index > 0){
                    if (index === 1) {

                       this.categories[index + 1].state = false;
                    }
                    } else {
                   this.categories[1].state = false;
                    this.categories[2].state = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>