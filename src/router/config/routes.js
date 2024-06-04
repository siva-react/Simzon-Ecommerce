import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import { Profile } from "@modules/Profile"
import AboutUs from "@modules/AboutUs/AboutUs"
import ProductView from "@modules/ProductView/ProductView"

export const linkList = [
    {       
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {       
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath: '/',  // ----------- Home Page
        Component: Profile,
    },
    // {
    //     routePath: 'aboutus',  // ----------- About Us Page
    //     Component: AboutUs,
    // },
    {
        routePath: 'aboutus',  // ----------- Signin Page
        Component: ProductView,
    },
    
]

export const navItems=[
    {
        key:'1',
        name:'Home',
        path:'/'
    },
    {
        key:'2',
        name:'About us',
        path:'aboutus'
    },
    {
        key:'3',
        name:'Contact Us',
        path:'contactus'
    },
    {
        key:'4',
        name:'Wishlist',
        path:'wishlist'
    },
]

export const sideNav = [
    {
        key:'1',
        name:'Home',
        path:'/'
    },
    {
        key:'2',
        name:'About us',
        path:'aboutus'
    },
    {
        key:'3',
        name:'Contact Us',
        path:'contactus'
    },
    {
        key:'4',
        name:'Wishlist',
        path:'wishlist'
    },
    {
        key:'5',
        name:'Join',
        path:'register'
    },
    {
        key:'6',
        name:'Sign In',
        path:'login'
    },
    {
        key:'7',
        name:'Shopping Bag',
        path:'cart'
    },
]
