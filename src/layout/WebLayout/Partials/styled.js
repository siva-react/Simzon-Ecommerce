import { images } from "@assets/images";
import { THEME } from "@theme/index";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background:${THEME.gray_light};

    .logo{
        margin-top: 22px;
    }

    .topNavHolder{
        display:none;
        list-style:none;

    @media ${THEME.TABLET} {
        display:flex;
    }
        
        a{text-decoration:none}

        .topNav{
            background: #eee;
            padding: 0 20px;
            height:70px;
            display:flex;
            align-items:center;
            border-right: 1px solid #f7f7f7;
            cursor: pointer;

            &.active span{
                color:${THEME.primary_color};
            }

            span{
                font-size:16px;
                color:${THEME.black};
                font-weight:800;
                text-decoration:none;
            }

            &:hover span{
                color:${THEME.primary_color};
            }
        }
    }
    
`

export const NavContainer = styled.nav`
    padding:20px 0;
    background:${THEME.black};

    .nav{
        display:flex;
        list-style:none;
    }
`

export const NavItem = styled.span`
    display: none;
    margin: 0px 15px;
    color: ${THEME.white};
    font-size: 12px;
    text-transform: uppercase;
    transition:all 0.5s;

    @media ${THEME.TABLET} {
        display:block;
    }

    :hover{
        color:${THEME.primary_color};
    }

    &.active{
        color:${THEME.primary_color};
    }
`

export const Toggle =styled.span`
    cursor: pointer;
    /* background:${THEME.secondary_color}; */
    border-radius:10px;
    display:block;

    @media ${THEME.TABLET} {
        display:none;
    }

    img{
        max-width:35px;
    }
`

export const SideNavHolder =styled.div`
    width:100%;
    height:100%;
    padding:5rem 1.5rem 2.5rem 4rem;


    .side__navmenu{
        display:flex;
        flex-direction:column;
        row-gap:3rem;
        list-style:none;
    }
`

export const SideNavLink = styled(NavLink)`
    text-decoration:none;
    color:${THEME.white};
    font-weight:700;
    font-size:1rem;
    transition:all 0.3s;

    &.sideactive{       
         color:${THEME.primary_color};
    }
    &:hover {
        color:${THEME.primary_color};
    }
`

// ------  FOOTER  ----

export const FooterBG = styled.div`
    background: url(${images.FOOTERBG}) no-repeat center top;
    min-height: 37px;
`

export const Line = styled.div`
    border: 1px solid #fff;
`

export const FooterContentHolder =styled.div`
    h2{
        text-transform: uppercase;
        margin-bottom: 1em;
        color:${THEME.black};
        font-size:20px;
    }
    p{
        color: #616161;
        font-size:14px;
        font-weight:700;
        line-height: 1.5em;
        margin-top: 2em;
    }
    ul{
        list-style: none;
        display:flex;
        flex-direction:column;
        gap:15px;

        li a{
            display:flex;
            align-items:center;
            gap:10px;
            cursor: pointer;

            &:hover span{
                color:${THEME.primary_color};
            }
            .social__holder{
                width: 30px;
                height: 30px;
                background:red;
                border-radius:4px;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:5px;
            }
            img{
                max-width:20px;
            }
            span{
                font-size:13px;
                font-weight:700;
                text-transform: uppercase;
                padding: 3px 0 0 0;
                margin: 0;
                color: #343333;
            }
        }

        li h6{
            font-size:15px;
            font-weight:700;
            display: flex;
            gap: 5px;
            align-items: center;

            a{
                color:${THEME.black};
            }
            a:hover{
                color:${THEME.primary_color};
                cursor: pointer;
            }
        }
    }
`

export const FooterContainer = styled.footer`
    padding: 5em 0 1rem;
    background: url(${images.FOOTERCONTAINERIMG}) no-repeat center top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 350px;
`

export const FooterBottom = styled.div`
    background: #2f2f2f;
    padding: 1em 0;

    .footerWrapper{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        gap:20px;
/* 
        @media ${THEME.LAPTOP} {
            flex-direction:row;
        } */

        .footermenu{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:10px;
            flex-wrap:wrap;
        }
    }

    .copy{
        display:flex;
        align-items:center;
        gap:10px;

        h6{
            color: #999;
            font-size:14px;
            font-weight:300;
            text-transform: uppercase;
        }
        a{
            color:${THEME.primary_color};
            text-decoration:none;
            font-size:14px;
            font-weight:700;
            text-transform: uppercase;
        }
    }
`

export const FooterPageLink = styled(NavLink)`
    text-decoration:none;
    color:#afafaf;
    font-weight:400;
    font-size:14px;
    transition:all 0.3s;

    &.active{       
         color:${THEME.primary_color};
    }
    &:hover {
        color:${THEME.primary_color};
    }
`