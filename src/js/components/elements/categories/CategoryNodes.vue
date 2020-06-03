<template>
    <div class="tree-menu">
        <category v-if="depth < 3"

                  :index="depth + 1" :hover="state" :categories="nodes" :shown="true"></category>
        <category-select
                v-else

                :hover="state"

                :categoryIndex="depth !== 4  ? depth : 0" :categories="nodes"></category-select>

        <category-nodes
                v-for="node in nodes"
                :nodes="node.child"
                :label="node.item"
                :state="node.state"
                :depth="node.id"
                :key="node.id + node.index + Math.round(Math.random() * 2000)"
        >
        </category-nodes>
    </div>
</template>

<script>
    import CategorySelect from "./CategorySelect.vue";
    import Category from "./Category.vue";
    export default {
        props: [ 'label', 'nodes', 'depth' ,'state'],
        name: "CategoryNodes",
        components: {Category,CategorySelect},
        computed: {
            indent() {
                return { transform: `translate(${this.depth * 50}px)` }
            }
        }
    }
</script>

<style scoped>

</style>