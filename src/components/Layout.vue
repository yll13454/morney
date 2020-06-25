
<template>
    <div class="layout-wrapper" >
        <div class="content" >
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
    components:{ Nav }
}
</script>

<style lang="scss" scoped>
.layout-wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
    .content{
        flex-grow: 1;
        overflow: auto;
    }
}
</style>