import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import { Profile } from "@modules/Profile"
import AboutUs from "@modules/AboutUs/AboutUs"

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
        routePath: '/',  // ----------- Signin Page
        Component: Profile,
    },
    {
        routePath: 'aboutus',  // ----------- Signin Page
        Component: AboutUs,
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
]
