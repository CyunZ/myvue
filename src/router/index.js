import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '@/views/Test.vue'
import UserInfo from '@/views/UserInfo.vue'
import HISView from '@/views/HISViews/HISView.vue'
import Clinic from '@/views/HISViews/Clinic.vue'
import Inpatient from '@/views/HISViews/Inpatient.vue'
import ShoppingView from '@/views/ShoppingViews/ShoppingView.vue'
import ZeroShop from '@/views/ShoppingViews/ZeroShop.vue'
import Subsidy from '@/views/ShoppingViews/Subsidy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home222',component: HomeView,    },
    {path: '/about',name: 'about',component: () => import('../views/AboutView.vue'),    },
    {path: '/test',name: 'test',component: Test,    },
    {path: '/userinfo',name: 'userinfo',component: UserInfo,    },
    {path: '/his',name: 'his',component: HISView,    },
    {path: '/his/clinic',name: 'clinic',component: Clinic,    },
    {path: '/his/inpatient',name: 'inpatient',component: Inpatient,    },
    {path: '/shopping',name: 'shopping',component: ShoppingView,    },
    {path: '/shopping/zeroshop',name: 'zeroshop',component: ZeroShop,    },
    {path: '/shopping/subsidy',name: 'subsidy',component: Subsidy,    },
  ],
})

export default router
