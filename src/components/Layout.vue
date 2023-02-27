<template lang="">
  <div>
    <h1 class="text-3xl text-left p-10">{{ title }}</h1>
    <div class="">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  props: {
    title: String,
  },
};
</script>
<style lang=""></style>
