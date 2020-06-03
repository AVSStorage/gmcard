<template>
    <div v-show="open" class="fixed-categories">
        <button class="btn" @click="close">
            <i class="material-icons">clear</i>
        </button>
        <ul class="cd-accordion-menu">
            <drop-down-item @toggleSelect="toggleSelect" :model="treeData">
            </drop-down-item>
        </ul>
    </div>
</template>

<script>
    import DropDownItem from "./DropDownItem.vue";
    var treeData = {
        // name: "Категории",
        open: true,
        children: [
        ]
    };
    let categoties2 = ['Кафе/Бары', 'Для неё', 'Для него', 'Детям', 'Для дома', 'Техника', 'Услуги', 'Красота', 'Туры и отели', 'Магазины', 'Для авто', 'Курсы', 'Репетиторы'];
    categoties2.forEach(item => {
        treeData.children.push({
            name: item
        })
    });
    let categories3 = [{name: "Грузоперевозки", count: 1929, checkbox:true, state:false}, {
        name: "Фото, видео, аудио",
        count: 1200, state:false,checkbox:true,
    }, {name: "Свадьба и торжества", count: 985, state:false,checkbox:true,}, {name: "Все для красоты", count: 136, checkbox:true, state:false}, {
        name: "Врачи",
        count: 789,  checkbox:true,state:false
    }, {name: "ИТ-Фрилансеры", checkbox:true, count: 657}, {name: "Ремонт и стройка", count: 369, checkbox:true, state:false}, {
        name: "Для авто",
        count: 321, state:false,checkbox:true,
    }, {name: "Бухгалтеры и юристы", count: 129, checkbox:true, state:false}, {
        name: "Ветеринары", checkbox:true,
        count: 225, state:false
    }, {name: "Автоконструкторы", count: 980,  checkbox:true,state:false}, {name: "Домашний персонал", count: 412, checkbox:true, state:false}, {
        name: "Уборка",
        count: 302,  checkbox:true,state:false
    },{name: "Грузоперевозки", checkbox:true, count: 1929, state:false},{name: "Грузоперевозки", checkbox:true, count: 1929, state:false},{name: "Грузоперевозки", checkbox:true, count: 1929, state:false}];




    let generateCategories = () => {
        let categories4  = [...categories3].map((cat,index) => {
            cat.children = [{name: "Грузоперевозки", count: 1929, checkbox:true, state:false,id:Math.random() * 150}, {
                name: "Фото, видео, аудио",
                id:Math.random() * 150,
                count: 1200, state:false,checkbox:true,
            }, {name: "Свадьба и торжества",id:Math.random() * 150, count: 985, state:false,checkbox:true,}, {name: "Все для красоты", count: 136,id:Math.random() * 150, checkbox:true, state:false}, {
                name: "Врачи",
                count: 789,  id:Math.random() * 150,checkbox:true,state:false
            }, {name: "ИТ-Фрилансеры", checkbox:true, count: 657,id:Math.random() * 150}, {name: "Ремонт и стройка", count: 369, checkbox:true, state:false,id:Math.random() * 150}, {
                name: "Для авто",
                count: 321, state:false,checkbox:true,id:Math.random() * 150
            }, {name: "Бухгалтеры и юристы", count: 129, checkbox:true, state:false,id:Math.random() * 150}, {
                name: "Ветеринары", checkbox:true,
                count: Math.random() * 1505, state:false,id:Math.random() * 150
            }, {name: "Автоконструкторы", count: 980,  checkbox:true,state:false,id:Math.random() * 150}, {name: "Домашний персонал", count: 412, checkbox:true, state:false,id:Math.random() * 150}, {
                name: "Уборка",
                count: 302,  checkbox:true,state:false,id:Math.random() * 150
            },{name: "Грузоперевозки", checkbox:true, count: 1929, state:false,id:Math.random() * 150},{name: "Грузоперевозки", checkbox:true, count: 1929, state:false,id:Math.random() * 150},{name: "Грузоперевозки", checkbox:true, count: 1929, state:false,id:Math.random() * 150}];
            cat.id = index;
            return cat;
        })

        return categories4;
    }
    treeData.children.forEach((child, index) => {
        child.children = generateCategories();
        child.id = index + '#'
    })
    export default {
        name: "DropDown",
        components: {DropDownItem},
        data() {
            return {
                open: true,
                treeData : treeData
            }
        },
        methods: {
            toggleSelect(checked,name) {
                this.$emit('toggleSelect', checked, name)
            },
            close() {
                this.open = !this.open
            }
        }
    }
</script>

<style scoped>

    .fixed-categories {
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: end;
        -webkit-overflow-scrolling: touch;
        background: rgba(255, 255, 255, 1);
        height: 100%;
        z-index: 20;
    }
    .cd-accordion-menu {
        width: 100%;
        margin: 0;

        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
    }



</style>