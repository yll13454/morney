<template>
    <div>
        <Layout>
            <svg>
                <use xlink:href="#biaoqian"/>
            </svg>
            Labels
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
import x from '@/assets/icon/biaoqian.svg'
console.log(x)
export default {
  name: 'Labels',
  components: { Layout }
}
</script>

<style lang="scss" scoped>
</style>