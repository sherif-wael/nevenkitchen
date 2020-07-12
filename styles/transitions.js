import {css} from "styled-components";


const transitions = css`
    .fadedown-enter, .fadedown-appear{
        oapcity: 0;
        transform: translateY(-20px);
    }
    .fadedown-enter-active, .fadedown-appear-active, .fadedown-appear-done{
        opacity: 1;
        transform: translateY(0px);
        transition: opacity: 500ms linear,
                    transform 500ms linear;
    }
    .fade-enter, .fade-appear{
        opacity: 0;
    }
    .fade-enter-active .fade-appear-active, .fade-appear-done{
        opacity: 1;
        transition: opacity 500ms ease;
    }
`
export default transitions;