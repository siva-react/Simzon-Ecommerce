import { images } from "@assets/images";
import { THEME } from "@theme/index";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background:${THEME.gray_light};

    .logo{
        margin-top: 22px;
    }

    .topNavHolder{
        display:flex;
        list-style:none;
        
        a{text-decoration:none}

        .topNav{
            background: #eee;
            padding: 0 20px;
            height:70px;
            display:flex;
            align-items:center;
            border-right: 1px solid #f7f7f7;
            cursor: pointer;


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
    }
`

export const NavItem = styled.span`
    display: block;
    margin: 0px 15px;
    color: ${THEME.white};
    font-size: 12px;
    text-transform: uppercase;
    transition:all 0.5s;

    :hover{
        color:${THEME.primary_color};
    }

    &.active{
        color:${THEME.primary_color};
    }
`

// ------  FOOTER  ----
export const FooterBG = styled.div`
    background: url(${images.FOOTERBG}) no-repeat center top;
    min-height: 37px;
`

export const FooterContainer = styled.div`
    background: url(${images.FOOTERCONTAINERIMG}) no-repeat center top;
`

export const FooterBottom = styled.div`
    background: #2f2f2f;
    padding: 1em 0;

    .footerWrapper{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;

        @media ${THEME.LAPTOP} {
            flex-direction:row;
        }
    }
`