// pages
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'

// layouts
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/dashboard/',
        component: DashboardLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard,
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/"
    },
]

export default routes
