<template>
  <div>
    <p>
      /users/_id.vue
      User Id: {{ userId }}
    </p>
  </div>
</template>

<script>
export default {
  name: '_id.vue',
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
};
</script>

<style scoped>

</style>
