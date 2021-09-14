import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    transition: linear 0.50s;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    font-family: 'Architects Daughter', cursive;
    }
    button{
        font-family: 'Architects Daughter', cursive;
        border-radius: 20px;
        margin-right 20px;
        padding : 12px 20px;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        cursor: pointer;
        border: inset 5px;
        transition: linear 0.25s;
    }
    button:hover{
       color: ${(props) => props.theme.backgroundColor};
       background-color: ${(props) => props.theme.mainColor};
    }
    h1, h2, h3, h4, h5{
        letter-spacing: 2px
    }
    h1{
        font-size: 1.6rem;
    }
    h2{
        font-size: 1.rem;
    }
`;

export default GlobalStyle;
