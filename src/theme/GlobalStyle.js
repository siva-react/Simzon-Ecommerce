import { Styles } from '@components/form/CommonProperties'
import { createGlobalStyle } from 'styled-components'
import { THEME } from '.'

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        font-family: "Lato", sans-serif;
    } 

    h4, h5, h6,
    h1, h2, h3 {margin-top: 0;}
    ul, ol {margin: 0;}
    p {margin: 0;}
    html, body{
        font-family: 'Lato', sans-serif;
        font-size: 100%;
        background:#fff;
    }

    body a{
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
        -moz-transition: 0.5s all;
    }
   
  & .ant-menu-item-icon {
    font-size: 23px !important;
   }

   .ant-form-item .ant-form-item-explain-error {
    color: ${Styles.errorColor};
    font-weight: ${Styles.errorFontWeight};
    font-size: ${Styles.errorFontSize};
    }
   .ant-drawer .ant-drawer-body {
    padding: 0% !important;
    overflow: hidden !important;
   }

   .scroll {
    overflow-y: scroll;
   }

    ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #1677ff; 
        cursor: pointer;
        border-radius: 10px;

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(3 108 255 / 43%);
        border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(3 108 255 / 43%);
        visibility: visible;
    }

    /* Antd Form  */
    .ant-form-item {
        margin-bottom: 6px !important;
    }
`

export default GlobalStyle
