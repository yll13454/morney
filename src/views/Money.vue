<template>
    <div>
        <Layout>
            <Tags :dataSource.sync="tags"/>
            <Notes/>
            <Types/>
            <NumberPad/>
        </Layout>
    </div>
</template>

<script>
    import Layout from '@/components/Layout.vue'
    import Tags from '@/components/Money/Tags.vue'
    import Notes from '@/components/Money/Notes.vue'
    import Types from '@/components/Money/Types.vue'
    import NumberPad from '@/components/Money/NumberPad.vue'

    export default {
        name: 'Money',
        components: {Layout, Tags, Notes, Types, NumberPad},
        data(){
            return{
                tags:['衣','食','住','行']
            }
        }
    }
</script>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>
