<template>
  <section class="container">
    <div>
      <h3>Nuxt.js のタグが付けられた投稿の一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{ item.title }}</span>
            <small>
              <span>by</span>
              <nuxt-link :to="`/users/${item.user.id}`">
                {{ item.user.id }}
              </nuxt-link>
            </small>
          </h4>
          <div>{{ item.body.slice(0, 130) }}</div>
          <p><a :href="item.url">{{ item.url }}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js');
    return {
      items,
    };
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  padding: 16px;
}

li + li {
  margin: 16px 0;
}

p {
  margin: 8px 0;
}
</style>

