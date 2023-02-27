<template lang="">
  <Layout v-bind:title="'Категории'">
    <CategoriesList />
  </Layout>
</template>
<script>
import Layout from '../components/Layout.vue';
import CategoriesList from '@/components/CategoriesList.vue';
export default {
  name: 'GoodsView',
  components: {
    Layout,
    CategoriesList,
  },
};
</script>
<style lang=""></style>
