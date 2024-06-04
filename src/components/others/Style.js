import { THEME } from "@theme/index";
import styled from "styled-components";


export const ViewLabel = styled.h3`
    color:${THEME.GREEN_DARK};
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
`

export const ViewLabelData = styled.h3`
    color:${THEME.primary_color};
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
`

export const TableIconHolder = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    & svg{
        font-size:${props => props.size || '15px'};
        color:${props => props.color || 'black'};
        cursor: pointer;
    }
`

export const SearchBarHolder =  styled.div`
    background:red;
    width:350px;
    display:flex;
    align-items:center;

    .input{
        flex:1;
        background:#c9c9c9;
        height:30px;
        padding: 7px 10px;
        color:${THEME.white};
        font-size:14px;
        font-weight:500;
        outline:none;
        border:none;
    }

    .search{
        width:30px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor: pointer;

        img{
            max-width:20px;
        }
    }
`