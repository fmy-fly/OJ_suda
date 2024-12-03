<template>
  <div class="menu-demo">
    <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']" class="menu">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '0' }" disabled>
        <div>
          <img src="../assets/suda.jpg" class="collegePicture" alt="Suda Image" />
        </div>
      </a-menu-item>
      <a-menu-item key="1">主页</a-menu-item>
      <a-menu-item key="2">题库</a-menu-item>
      <a-menu-item key="3">讨论</a-menu-item>
      <a-menu-item key="4">浏览题目</a-menu-item>
    </a-menu>
  </div>
  <router-view/>
</template>
<script setup lang="ts">

</script>

<style scoped>
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
  width: auto;  /* Maintain the aspect ratio of the image */
}
</style>
