<template lang="">
  <div class="p-10 w-[500px] space-y-10 m-auto">
    <div v-if="form.id" class="">
      <div class="">
        <label for="id" class="label">ID</label>
      </div>
      <input class="input" v-model="form.id" disabled id="id" placeholder="id" type="text" />
    </div>
    <div class="">
      <div>
        <label class="label" for="category">Категория</label>
      </div>
      <input class="input" v-model="form.category" id="category" placeholder="Имя" type="text" />
    </div>
    <Btn @click="onClick" :disabled="!isValidForm" :isInfo="true">Сохранить</Btn>
  </div>
</template>
<script>
import { fetchItems, selectItemById, selectItems } from '@/store/categories/service';
import { computed, reactive, onBeforeMount, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Btn from './Btn.vue';
export default {
  name: 'CategoriesForm',
  components: {
    Btn,
  },
  props: {
    id: { type: String, default: '' },
  },
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const groupList = computed(() => selectItems(store));
    const form = reactive({
      id: '',
      category: '',
    });
    onBeforeMount(() => {
      fetchItems(store);
    });
    watchEffect(() => {
      const category = selectItemById(store, props.id);
      Object.keys(category).forEach((key) => {
        form[key] = category[key];
      });
    });
    return {
      groupList,
      form,
      isValidForm: computed(() => !!form.category),
      onClick: () => {
        context.emit('submit', form);
        router.push({ name: 'Categories' });
      },
    };
  },
};
</script>
<style>
.input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
.label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
.select {
  @apply block w-4/5 m-auto bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight;
}
</style>
