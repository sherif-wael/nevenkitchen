import {css} from "styled-components";
import media from "./media";

const mixins = {}

mixins.sidePaddings = css`
    padding-right: 100px;
    padding-left: 100px;
    ${media(1050)`
        padding-left: 60px;
        padding-right: 60px;
    `}
    ${media(800)`
        padding-left: 40px;
        padding-right: 40px;
    `}
    ${media(600)`
        padding-left: 20px;
        padding-right: 20px;
    `}
    ${media(400)`
        padding-left: 10px;
        padding-right: 10px;
    `}
`

mixins.flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

mixins.flexColumn = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

mixins.flexSpaceBetween = css`
    display: flex;
    align-items:center;
    justify-content: space-between;
`


mixins.verticalCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default mixins;