<template lang="">
  <button class="btn" v-bind:class="{ 'btn-info': isInfo, 'btn-danger': isDanger }">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Btn',
  props: {
    isInfo: Boolean,
    isDanger: Boolean,
  },
};
</script>
<style>
.btn {
  @apply font-bold py-2 px-4 rounded shadow-lg;
}
.btn-info {
  @apply bg-blue-500 text-white;
}
.btn-info:hover {
  @apply bg-blue-700;
}
.btn-danger {
  @apply bg-red-500 text-white;
}
.btn-danger:hover {
  @apply bg-red-700;
}
</style>
