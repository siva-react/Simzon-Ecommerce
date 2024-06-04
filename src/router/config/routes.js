import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import { Profile } from "@modules/Profile"
import AboutUs from "@modules/AboutUs/AboutUs"
import ProductView from "@modules/ProductView/ProductView"
import Home from "@modules/Home/Home"
import SignUpForm from "@modules/Auth/Partials/SignUpForm"
import SignInForm from "@modules/Auth/Partials/SignInForm"

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
        Component: Home,
    },
    // {
    //     routePath: 'aboutus',  // ----------- About Us Page
    //     Component: AboutUs,
    // },
    {
        routePath: 'aboutus',  // ----------- Signin Page
        Component: ProductView,
    },
    {
        routePath: 'login',  // ----------- Login Page
        Component: SignInForm,
    },
    {
        routePath: 'register',  // ----------- Register Page
        Component: SignUpForm,
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
