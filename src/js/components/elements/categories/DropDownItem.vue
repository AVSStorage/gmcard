<template>
    <li  :class="[isFolder ? 'folder' : 'file']">
        <input @change="toggleSelect($event.target.checked, model.name)" :id="model.name + model.id" v-if="model.checkbox" type="checkbox" v-model="model.state" class="d-none">
        <label
                v-if="!model.open"
                class="d-flex justify-content-between"
                @click="toggle(model.state)"
                :for="model.name + model.id"
        >
            <span class="d-flex align-items-center">
            <i v-if="isFolder && open" class="material-icons">keyboard_arrow_up</i>
            <i v-else-if="isFolder" class="material-icons">keyboard_arrow_down</i>

            {{ model.name }}
                </span>
            <span class="d-flex">
            <span v-if="isFolder">{{ isFolder ? model.children.length : '' }}</span>
            <span v-if="model.checkbox" class="promo-form__checkbox ml-3"></span>
                </span>


        </label>

        <ul v-show="open || model.open" v-if="isFolder" >
            <drop-down-item
                    @toggleSelect="toggleSelect"
                    v-for="(model, index) in model.children"
                    :key="index"
                    :model="model">
            </drop-down-item>
        </ul>
    </li>
</template>

<script>
    export default {
        name: "DropDownItem",
        props: {
            model: Object
        },
        data: function() {
            return {
                open: false
            };
        },
        computed: {
            isFolder: function() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle: function(checked) {
                if (!checked && this.model.checkbox) {
                    this.open = true;
                } else if (this.isFolder) {
                    this.open = !this.open;
                }
            },
            changeType: function() {
                if (!this.isFolder) {
                    Vue.set(this.model, "children", []);
                    this.addChild();
                    this.open = true;
                }
            },
            addChild: function() {
                this.model.children.push({
                    name: "New Item"
                });
            },
            toggleSelect(checked, name) {
                this.$emit('toggleSelect', checked,name)
            }
        }
    }
</script>

<style scoped>
    .cd-accordion-menu {
        width: 100%;
        margin: 0;
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
    }

    .cd-accordion-menu li {
        user-select: none;

    }



    .cd-accordion-menu label, .cd-accordion-menu a {

        padding: 18px 18px 18px 15px;
        box-shadow: inset 0 -1px #000;
        color: #ffffff;
    }
    .no-touch .cd-accordion-menu label:hover,
    .no-touch .cd-accordion-menu a:hover {
        background-color: #0066cc;
        color: white;
    }

    .cd-accordion-menu label {
        cursor: pointer;
    }

    .cd-accordion-menu label span {
        color: #828282;
    }





    .cd-accordion-menu ul label,
    .cd-accordion-menu ul a {
        background: #FFFFFF;
        box-shadow: inset 0 -1px #888888;
        padding-left: 25px;
    }
    .no-touch .cd-accordion-menu ul label:hover,
    .no-touch .cd-accordion-menu ul a:hover {
        background: #3c3f45;
    }
    .cd-accordion-menu > li:last-of-type > label,
    .cd-accordion-menu > li:last-of-type > a,
    .cd-accordion-menu > li > ul > li:last-of-type label,
    .cd-accordion-menu > li > ul > li:last-of-type a {
        box-shadow: none;
    }

    .cd-accordion-menu ul ul label,
    .cd-accordion-menu ul ul a {
        padding-left: 40px;
    }

    .cd-accordion-menu ul ul ul label,
    .cd-accordion-menu ul ul ul a {
        padding-left: 65px;
    }

</style>