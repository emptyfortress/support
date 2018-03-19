<template>
  <div class="container">
    <nuxt-link v-if="page > 1" :to="'?page=' + (page - 1)">&lt; Prev</nuxt-link>
    <a v-else class="disabled">&lt; Prev</a>
    <span>{{ page }}/{{ totalPages }}</span>
    <nuxt-link v-if="page < totalPages" :to="'?page=' + (page + 1)">Next &gt;</nuxt-link>
    <a v-else class="disabled">Next &gt;</a>
    <ul>
      <li v-for="user in users" :key="user.id">
        <img :src="user.avatar" class="avatar" />
        <span>{{ user.first_name }} {{ user.last_name }}</span>
      </li>
    </ul>
    <p><nuxt-link to="/">Back home</nuxt-link></p>
    <p><nuxt-link to="/about">about</nuxt-link></p>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
	layout: 'main',
	transition: {
		name: 'slide-right',
		mode: 'out-in'
	}
  // // Watch for $route.query.page to call Component methods (asyncData, fetch, validate, layout, etc.)
  // watchQuery: ['page'],
  // // Key for <nuxt-child> (transitions)
  // key: (to) => to.fullPath,
  // // Called to know which transition to apply
  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
  // async asyncData({ query }) {
  //   const page = +query.page || 1
  //   const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
  //   return {
  //     page: +data.page,
  //     totalPages: data.total_pages,
  //     users: data.data
  //   }
  // }
}
</script>

<style scoped>
</style>
