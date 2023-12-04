import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const authloggedIn = () => {
    return localStorage.getItem('token') ?? null;
}

const handleGuessRoutesRedirection = (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authloggedIn()) {
            next({
                name: 'login',
                // query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        // public route
        next();
    }
}

// config router
const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return {
            x: 0, y: 0
        }
    }
})

//beforeEnter, afterEnter, beforeLeave, afterLeave
router.beforeEach((to, from, next) => {
    // console.log(`Navigating to => ${to.name}`);
    handleGuessRoutesRedirection(to, from, next);
});

router.afterEach((to, from, failure) => {
    // todo: analytics log
    // if (!failure) sendToAnalytics(to.fullPath)
})

router.isReady().then((onSuccess) => {

}).catch((onError) => {
    console.log(onError)
})

export default router