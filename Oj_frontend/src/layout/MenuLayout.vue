<template>
  <div class="menu-demo">
    <a-menu
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
        <div id="suda">Suchow University Oj System</div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>

      <a-input-search
        class="searchLabel"
        :style="{ width: '380px' }"
        placeholder="Please enter something"
        search-button
      />

      <a-menu-item class="user" key="4" style="font-size: 20px">注册或登录</a-menu-item>
    </a-menu>
  </div>
  <icon-notification />
  <router-view />
</template>
<script setup lang="ts">
import { routes } from '../router/routes.ts'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
//默认主页
const route = useRoute()

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  })
}
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
  height: 60px; /* Set a fixed height for the menu */
}

.collegePicture {
  height: 50px; /* Set a fixed height for the image */
  width: auto; /* Maintain the aspect ratio of the image */
}

.searchLabel {
  margin-left: 6%;
}

.user {
  margin: 0 auto;
}
</style>
