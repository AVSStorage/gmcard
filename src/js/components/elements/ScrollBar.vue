<template>
    <simplebar data-simplebar-auto-hide="false">
        <slot></slot>
    </simplebar>
</template>

<script>

    export default {
        name: "ScrollBar",
        components: {
            simplebar
        }
    }
</script>

<style scoped>

</style>