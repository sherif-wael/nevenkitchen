import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import Link from "next/link"

const StyledContainer = styled.footer`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    ${mixins.sidePaddings};
    ${mixins.flexCenter};
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`

const StyledInfo = styled.div`
    z-index: 2;
    p{
        margin: 0;
        font-weight: 600;
    }
`

const StyledIcons = styled.div`
    ${mixins.flexCenter};
    margin: 8px 0 15px;
    img{
        width: 22px;
        height: 22px;
        margin: 0 8px;
        fill: white;
    }
`

const StyledLinks = styled.div`
    ${mixins.flexCenter};
    a{
        margin: 0 8px;
        color: #fff;
        text-decoration: none;
        font-size: 12px;
    }
`

const StyledImg = styled.div`
    width: 100px;
    margin-right: 40px;
    img{
        max-width: 100%;
        display: block;
        overflow: hidden;
    }
    ${media(550)`
        display: none;
    `}
`

const Footer = () => {
    return (
        <StyledContainer>
            <StyledImg>
                <img src="/images/chef1.png" alt="chef image" />
            </StyledImg>
            <StyledInfo>
                <p>Neven's Kitchen all copyrights &copy; reserved 2020</p>
                <StyledIcons>
                    <img src="/images/facebook.svg" alt="facebook icon" />
                    <img src="/images/instagram-sketched.svg" alt="instagram icon" />
                    <img src="/images/twitter.svg" alt="twitter icon" />
                </StyledIcons>
                <StyledLinks>
                    <Link href="/"><a>HOME</a></Link>
                    <Link href="/menu"><a>MENU</a></Link>
                    <Link href="/order"><a>ORDER</a></Link>
                </StyledLinks>
            </StyledInfo>
        </StyledContainer>
    )
}

export default Footer;