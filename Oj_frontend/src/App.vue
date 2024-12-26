<template>
  <BasicLayout></BasicLayout>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import store from '@/store'
import BasicLayout from '@/layout/BasicLayout.vue'

const router = useRouter()
router.beforeEach((to, from, next) => {
  if (to.meta?.access === 'canAdmin') {
    if (store.state.user.loginUser?.role !== 'admin') {
      next('/noAuth')
      return
    }
  }
  next()
})
</script>

<style scoped></style>
