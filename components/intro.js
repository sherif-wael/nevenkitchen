import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";

const StyledContainer = styled.section`
    text-align: center;
    padding: 30px 12px;
    background: url("/images/bg.jpg") no-repeat center;
    background-attachment: fixed;
    position: relative;
    color: #fff;
    &::after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.5);
        z-index: 1;
    }
    p{
        font-weight: 400;
        font-size: 22px;
    }
    h3{
        font-wiehgt: 600;
        font-size: 32px;
        font-family: Arial;
        letter-spacing: -1px;
        margin: 0;
    }
    p, h3{
        z-index: 2;
        position: relative;
    }
    ${media(400)`
        h3{
            font-size: 26px;
        }
        p{
            font-size: 18px;
        }
    `}
    ${media(230)`
        h3{
            font-size: 20px;
        }
        p{
            font-size: 14px;
        }
    `}
`

const Intro = () => {
    return (
        <StyledContainer>
            <p>We Are Always Glad To Serve You...</p>
            <h3>Let It Be Your First Choice</h3>
            <p>The Best Food You Will Ever Taste</p>
        </StyledContainer>
    )
}

export default Intro;