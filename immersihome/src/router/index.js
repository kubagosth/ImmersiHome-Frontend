import { createRouter, createWebHistory } from 'vue-router';
import DisplaySettings from '../components/DisplaySettings.vue';
import HomeDetail from '../components/HomeDetail.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DisplaySettings,
    },
    {
        path: '/home/:id',
        name: 'HomeDetail',
        component: HomeDetail,
        props: true, // Pass route params as props
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
