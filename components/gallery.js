import React, {useState} from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";
import Link from "next/link";

const StyledContainer = styled.section`
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.5);
    }
`

const StyledHeader = styled.div`
    position: absolute;
    padding: 0 10px;
    box-sizing: border-box;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${mixins.flexCenter};
    div{
        text-align: center;
        h3{
            animation: typing 3s ease-out infinite;
            // animation-timing-function: cubic-bezier(0, 0.7, 0.9, 0.6);
            color: #fff;
            font-size: 32px;
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            padding-right: 2px;
            @keyframes typing{
                0%{width: 0px}
                100%{width: 100%}
            }
            ${media(400)`
                font-size: 26px;
            `}
            ${media(230)`
                font-size: 20px;
            `}
        }
        a{
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            padding: 5px 12px;
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`

const StyledImages = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;
    ${media(900)`
        grid-template-columns: 1fr;
    `}
`

const StyledWrapper = styled.div`
    height: 230px;
    img{
        width: 100%;
        height: 100%;
    }
`

let quotes= ["Serving All Kinds Of Plates", "Check Our Menu Now!", "You Will Never Regret"]

const Gallery = () => {
    let [state, setState] = useState(0);
    return (
        <StyledContainer>
            <StyledImages>
                <StyledWrapper>
                    <img src="/images/img2.jpg" alt="food image" />
                </StyledWrapper>
                <StyledWrapper>
                    <img src="/images/img3.jpg" alt="food image" />
                </StyledWrapper>
                <StyledWrapper>
                    <img src="/images/img4.jpg" alt="food image" />
                </StyledWrapper>
            </StyledImages>
            <StyledHeader>
                <div>
                    <h3 onAnimationIteration={() => setState((state + 1) % quotes.length)}>{quotes[state]}</h3>
                    <Link href="/menu"><a>View Menu &#8594;</a></Link>
                </div>
            </StyledHeader>
        </StyledContainer>
    )
}

export default Gallery