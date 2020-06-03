<template>
    <div  @mouseenter="$emit('show',index + 1)" @mouseleave="$emit('hide',index)" data-sub="0" class="col-md-4 p-md-0 category__wrapper">

    <div :class="{'active' : item.state }" @mouseenter="$emit('toggleEnter',item,index,true)" @mouseleave="$emit('toggleEnter',item,index,false)" v-for="item in data" class="d-none col-lg-12 d-md-flex justify-content-between pt-2 pb-2 category">
        <a href="#" class="category__name">{{ item.name }}</a>
        <span class="font-weight-bold category__count">{{ item.count }}</span>
    </div>
</div>
</template>

<script>
    import MenuItemMobile from "./MenuItemMobile.vue";
    export default {
        name: "MenuItem",
        components: {MenuItemMobile},
        props: {
            data: Array,
            index: Number,
            hash: String
        }
    }
</script>

<style scoped>
    .cd-accordion-menu {
        width: 100%;
        margin: 0;
    }

    .cd-accordion-menu li {
        user-select: none;

    }



    .cd-accordion-menu label, .cd-accordion-menu a {

        padding: 18px 18px 18px 15px;
        box-shadow: inset 0 -1px #000;
        color: #ffffff;
    }

    .cd-accordion-menu label {
        cursor: pointer;
    }

    .cd-accordion-menu label span {
        /*color: #828282;*/
    }

</style>