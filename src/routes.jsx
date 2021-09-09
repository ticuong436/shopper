import { MainLayout } from "./layout/MainLayout"
import CommingSoon from "./page/CommingSoon"
import Home from './page/Home'
import Faq from './page/Faq'
import ShoppingCart from './page/ShoppingCart'
import OrderCompleted from './page/OrderCompleted'
import About from './page/About'
import Products from './page/Product'
import Shop from './page/Shop'
import ShoppingAndReturn from "./page/ShoppingAndReturn"
import StoreLocator from "./page/StoreLocator"
import ContactUs from './page/ContactUs'
import Checked from './page/Checked'
import Page404 from "./page/Page404"
import Account from "./page/Account"
import Auth from './page/Auth'

export let routes = [
    // {
    //     component: () => withCountDown(CommingSoon, 10000000),
    //     path: 'comming-soon'
    // },
    {
        component: MainLayout,
        routes: [
            // {
            //     path: '/account',
            //     component: Account,
            //     auth: true,
            //     routes: [
            //         {
            //             exact: true,
            //             path: '/account/order',
            //             component: OrderList
            //         },
            //         {
            //             path: '/account/order/:_id',
            //             component: Order
            //         },
            //         {
            //             path: '/account/wishlist',
            //             component: Wishlist
            //         },
            //         {
            //             path: '/account/address',
            //             component: AddressList
            //         },
            //         {
            //             path: '/account/address/:action/:_id?',
            //             component: Address
            //         },
            //         {
            //             path: '/account/payment',
            //             component: PaymentList
            //         },
            //         {
            //             path: '/account/payment/:action/:_id?',
            //             component: Payment
            //         },
            //         {
            //             path: '/account/coming-soon',
            //             component: ComingSoon
            //         },
            //         {
            //             path: '/account',
            //             component: PersonalInfo
            //         },
            //     ]
            // },
            {
                path: '/auth',
                component: Auth
            },
            {
                path: '/shipping-and-returns',
                component: ShoppingAndReturn
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/store-locator',
                component: StoreLocator
            },
            {
                path: '/shopping-cart',
                component: ShoppingCart
            },
            {
                path: '/faq',
                component: Faq
            },
            // {
            //     path: '/catalog/:slug?',
            //     component: Catalog
            // },
            {
                path: '/product/:slug',
                component: Products
            },
            {
                path: '/contact-us',
                component: ContactUs
            },
            {
                path: '/checkout',
                component: Checked
            },
            {
                path: '/order-completed/:_id',
                component: OrderCompleted
            },
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/',
                component: Page404
            },
        ]
    },
]