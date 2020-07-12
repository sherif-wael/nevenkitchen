import {createGlobalStyle} from "styled-components";
import transitions from "./transitions";

const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Catamaran', sans-serif;
    }
    body.active-nav{
        // overflow: hidden;
    }
    ${transitions};
`

export default GlobalStyles