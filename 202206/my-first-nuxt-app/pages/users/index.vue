<template>
  <div>
    <p>/users/index.vue</p>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  async mounted() {
    console.log(
        JSON.stringify(
            await this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js'), true, '',
        ),
    );
  },
};
</script>

<style scoped>

</style>
