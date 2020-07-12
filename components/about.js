import styled from "styled-components";
import mixins from "../styles/mixins";
import Link from "next/link";
import media from "../styles/media";

const StyledContainer = styled.section`
    ${mixins.sidePaddings};
    position: relative;
    box-sizing: border-box;
    padding-top: 70px;
    padding-bottom: 40px;
    background-color: ${props => props.theme.colors.primary};
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: polygon(68% 0, 100% 0, 100% 100%, 88% 100%);
        background-color: ${props => props.theme.colors.secondary};
    }
    ${media(750)`
        grid-template-columns: 1fr;
    `}
`

const StyledImg = styled.div`
    z-index: 2;
    img{
        max-width: 100%;
        display: block;
        height: auto;
        overflow: hidden;
    }
`

const StyledContent = styled.div`
    z-index: 2;
    color: #fff;
    h2{
        font-size: 36px;
    }
    p{
        font-size: 20px;
    }
    a{
        padding: 4px 10px;
        background-color: ${props => props.theme.colors.secondary};
        text-decoration: none;
        color: #fff;
    }
    ${media(750)`
        text-align: center;
        h2{
            font-size: 30px;
        }
        p{
            font-size: 18px;
        }
    `}
`

const About = () => {
    return (
        <StyledContainer>
            <StyledContent>
                <h2>Neven's Kitchen</h2>
                <p>Neven's kitchen is an online catering in Alexandria, we have been preparing very deliciious food for 
                    4 years and recieved a lot of great reviews.</p>
                <Link href="/order"><a>Order Now &#8594;</a></Link>
            </StyledContent>
            <StyledImg>
                <img src="/images/chef4.png" alt="chef image" />
            </StyledImg>
        </StyledContainer>
    )
}

export default About;