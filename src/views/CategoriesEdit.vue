<template lang="">
  <div>
    <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
      <CategoriesForm @submit="onSubmit" :id="id" />
    </Layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout.vue';
import CategoriesForm from '@/components/CategoriesForm.vue';
import { useStore } from 'vuex';
import { addItem, updateItem } from '@/store/categories/service';
export default {
  name: 'CategoriesEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    CategoriesForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, category }) =>
        id ? updateItem(store, { id, category }) : addItem(store, { category }),
    };
  },
};
</script>
<style lang=""></style>
