<template>
  <Layout v-bind:title="'Товары'">
    <GoodsList />
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '../components/Layout.vue';
import GoodsList from '@/components/GoodsList.vue';
export default {
  name: 'GoodsView',
  components: {
    Layout,
    GoodsList,
  },
};
</script>
