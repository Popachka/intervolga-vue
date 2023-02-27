<template lang="">
  <table class="table-auto border-collapse w-full text-sm">
    <thead>
      <tr>
        <th
          class="border-b font-medium p-4 pl-8 pt-0 text-slate-400 text-left capitalize"
          v-for="(item, i) of columns"
        >
          {{ item }}
        </th>
        <th class="border-b font-medium p-4 pl-8 pt-0 text-slate-800 font-bold">Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) of items" ::key="i">
        <td
          v-for="(key, i) of colKeys"
          :key="i"
          class="border-b border-slate-100 pl-8 text-slate-500 p-4 text-left"
        >
          {{ item[key] }}
        </td>
        <td class="border-b border-slate-100 pl-8 text-slate-500 p-4 space-x-4">
          <Btn v-bind:isInfo="true">Edit </Btn>
          <Btn v-bind:isDanger="true">Delete</Btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Btn from './Btn.vue';
export default {
  name: 'Table',
  data() {
    return {
      columns: [],
      items: [],
    };
  },
  computed: {
    colKeys() {
      return this.columns.map((key) => key);
    },
  },
  components: {
    Btn,
  },
};
</script>
<style lang=""></style>
