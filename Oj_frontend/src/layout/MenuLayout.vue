<template>
  <div class="menu-demo">
    <a-menu
      v-model:value="searchParams.text"
      mode="horizontal"
      theme="light"
      class="menu"
      :selected-keys="[route.path]"
      @menu-item-click="doMenuClick"
    >
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '0' }" disabled>
        <div>
          <img src="../assets/suda.jpg" class="collegePicture" alt="Suda Image" />
        </div>
      </a-menu-item>
      <a-menu-item class="SystemName">
        <div id="suda" style="font-size: 16px">Soochow University Oj System</div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>

      <a-input-search
        v-model:value="searchParams.text"
        class="searchLabel"
        :style="{ width: '380px' }"
        placeholder="Please enter something"
        search-button
        @search="clickSearch"
      />

      <a-menu-item class="user" key="4" style="font-size: 20px">
        {{ store.state.user?.loginUser?.userName ?? '注册或登录' }}
      </a-menu-item>
    </a-menu>



  </div>

</template>
<script setup lang="ts">
import { routes } from '../router/routes.ts'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

const router = useRouter()
//默认主页
const route = useRoute()

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  })
}
const searchParams = ref({
  text: '', // 默认为空
  pageSize: 10,
  pageNum: 1,
})
const clickSearch = () => {
  router.push({
    path: '/',
  })
}

const store = useStore()
console.log(store.state.user.loginUser.userName)
setTimeout(() => {
  store.dispatch('user/getLoginUser', {})
}, 3000)
</script>

<style scoped>
.SystemName {
  margin-right: 10%;
}

#suda {
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: bold;
}

.menu-demo {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);
}

.menu {
  height: 100px; /* Set a fixed height for the menu */
  box-shadow: #eee 1px 1px 5px;
}

.collegePicture {
  width: 160px; /* Maintain the aspect ratio of the image */
}

.searchLabel {
  margin-left: 6%;
}

.user {
  margin: 0 auto;
}
</style>
