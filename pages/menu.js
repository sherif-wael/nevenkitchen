import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";

const StyledContainer = styled.section`
    ${mixins.flexCenter};
    min-height: 100vh;
    padding-top: 60px;
    box-sizing: border-box;
    font-size: 48px;
    color: #fff;
    background-color: ${props => props.theme.colors.primary};
    font-weight: 700;
    ${media(600)`
        font-size: 26px;
    `}
`

export default function Menu(){
    return (
        <StyledContainer>
            Coming Soon...
        </StyledContainer>
    )
}