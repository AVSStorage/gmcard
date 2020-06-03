<template>
    <ul  class="d-flex cd-accordion-menu flex-column col-lg-12 pt-3">
    <li v-for="(item,indexData) in data"  :key="indexData + '#' + depth"  class="col-lg-12 d-flex flex-wrap pt-2 pb-2 pl-0 pr-0  category-dropdown justify-content-between">
        <label @click="showFunc(indexData)" class="d-flex justify-content-between w-100">
        <a
            href="#">{{ item.name }}</a><span class="font-weight-bold category__count">{{ item.count }}</span>
        </label>
        <ul  v-if="depth <= 2" :class="{'d-none': !show(indexData)}" class="dl-submenu pt-2 pb-2 pl-3 pr-0 col-12">
            <menu-item-mobile
                    :data="data"
                    :index="index"
                    :depth="depth + 1"
            >
            </menu-item-mobile>
        </ul>
    </li>
    </ul>
</template>

<script>

    export default {
        name: "MenuItemMobile",
        data(){
            return {
                selected: JSON.parse(JSON.stringify(this.data))
            }
        },
        methods: {
            show(index) {
                return this.selected[index].state;
            },
          showFunc(index){
              this.selected[index].state = !this.selected[index].state;
          }
        },
        props: {
            data: Array,
            index: Number,
            depth: Number
        },

    }
</script>

<style scoped>

    .dl-submenu {

    }
</style>