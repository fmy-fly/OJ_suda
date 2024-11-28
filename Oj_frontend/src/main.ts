import './assets/main.css'

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import router from '@/router'

const app = createApp(App);
app.use(ArcoVue).use(router); // 链式调用, 装饰器模式  区别于建造者模式
app.mount('#app');
