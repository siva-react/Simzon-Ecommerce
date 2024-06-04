import { THEME } from "@theme/index";
import styled from "styled-components";

export const SearchHolder =styled.div`
    background:${THEME.linear_gradiant1};
    padding: 10px 0;
    
    .wrapper{
        display:flex;
        align-items:center;
    }

    h4{
        color:${THEME.primary_color};
        text-transform:uppercase;
        margin: 8px 10px 0 0;
        font-size:13px;
        font-weight:800;
    }
`

export const ProductHolder = styled.div`
    background:${THEME.secondary_color};
    min-height:100vh;
    padding: 1em 0 5em;
`

export const MenuBox = styled.div`
    border-right:1px solid #b8b8b8;
    position:sticky;
    top:20px;
    h3{
        background: ${THEME.primary_color};
        padding: 1em 0 1em 2em;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.85em;
        margin: 0;
    }

    .menu{
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        list-style: none;
        background: ${THEME.primary_color};

        li {
            width: 100%;
            line-height: 3.5em;
            text-indent: 1em;
            display: flex;
            padding-left:10px;
            align-items:center;
            color: #3e3f3f;
            font-size: 15px;
            text-decoration: none;
            border-bottom: 1px solid #ddd;
            font-weight: 800;
            background: #efefef;
            cursor: pointer;
            transition:all 0.5s;

            &:hover{
                background:${THEME.white};
                width:calc(100% - 8px);
            }
            &.active{
                background:${THEME.white};
            }
            &.active span{
                color:${THEME.primary_color};
            }
        }
    }
`
export const CardHolder = styled.div`
    cursor: pointer;
    background: #fff;
    border: 5px solid ${THEME.white};

    .imgHolder{
        position: relative;
        display: inline-block;
        overflow: hidden;
        margin-bottom: 5px;
        /* padding:10px;  */
        width: 100%;
        height:200px;

        .topline{
            position: absolute;
            top: -100%;
            left: 0;
            width: 50%;
            height: 100%;
            background: ${THEME.primary_light};
            transition: all 0.5s;
            -moz-transition: all 0.5s;
            -ms-transition: all 0.5s;
            -o-transition: all 0.5s;
            -webkit-transition: all 0.5s;
        }
        .bottomline{
            position: absolute;
            bottom: -100%;
            right: 0;
            width: 50%;
            height: 100%;
            background: rgba(248, 69, 69, 0.59);
            transition: all 0.5s;
            -moz-transition: all 0.5s;
            -ms-transition: all 0.5s;
            -o-transition: all 0.5s;
            -webkit-transition: all 0.5s;
        }

        &:hover .topline{
            top:0;
        }
        &:hover .bottomline{
            bottom:0;
        }

        .card__img{
            display: block;
            max-width: 100%;
            height: 200px;
            object-fit: contain;
            margin: auto;
        }
    }
`
export const ContentHolder = styled.div`
    padding: 1em 1em 0;
    .title{
        border-bottom: 1px solid #ECECEC;
        padding-bottom: 10px;
        margin-bottom: 5px;
    }

    h3{
        color: #797979;
        line-height: 1.2em;
        display: -webkit-box;
        -webkit-line-clamp: 2;  // <- you can change rows number
        -webkit-box-orient: vertical;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .btnHolder{
        display:flex;
        align-items:center;
        justify-content:space-between;

        .rate{
            border-right: 1px solid #ECECEC;
            padding-right: 20px;
            border-bottom: 0;
            font-size:16px;
            font-weight:700;
            color: ${THEME.black};
            margin: 3px 0 0 0;
            padding-bottom: 0;

            @media ${THEME.TABLET} {
                padding-right: 10px;
            }
            @media ${THEME.LAPTOPL} {
                padding-right: 20px;
            }
        }

        .btn{
            padding: 7px 18px;
            font-size:16px;
            font-weight:700;
            text-shadow: none;
            text-transform: uppercase;
            color: #FFF;
            position: relative;
            letter-spacing: 0;
            background: transparent;
            box-shadow: none;
            border: none;
            outline: none;
            z-index: 1;
            overflow: hidden;
            -webkit-transition: all 0.4s ease;
            -moz-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            transition: all 0.4s ease;
            border-radius: 2px;

            &:hover::before{
                width:100%;
            }
            &:hover::after{
                width:10;
            }

            &::before{
                content: "";
                position: absolute;
                width: 0;
                height: 100%;
                bottom: 0;
                right: 0;
                top: 0;
                z-index: -1;
                border-radius: 0;
                background: linear-gradient(to bottom, #b0191e 0%, #d7252b 56%, #e2393e 100%);
                -webkit-transition: all 0.4s ease;
                -moz-transition: all 0.4s ease;
                -o-transition: all 0.4s ease;
                transition: all 0.4s ease;
            }

            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                bottom: 0;
                left: 0;    
                z-index: -2;
                border-radius: 0;
                background: linear-gradient(to bottom, #e2393e 0%, #d7252b 44%, #b0191e 100%);
                -webkit-transition: all 0.4s ease;
                -moz-transition: all 0.4s ease;
                -o-transition: all 0.4s ease;
                transition: all 0.4s ease;
            }
        }
    }
`


