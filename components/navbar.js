import React, {useState} from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";
import Link from "next/link";

const StyledContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    ${mixins.flexSpaceBetween};
    padding: 15px 30px;
    z-index: 3;
` 
const StyledLogo = styled.a`
    font-family: 'Pacifico', cursive;
    font-size: 32px;
    color: #fff;
    z-index: 4;
`

const StyledToggler = styled.div`
    display: none;
    z-index: 4;
    cursor: pointer;
    span{
        width: 25px;
        height: 2px;
        margin-bottom: 5px;
        display: block;
        background-color: #fff;
        transition: opacity 300ms linear,
                    transform 300ms linear;
    }
    &.active-nav span:nth-child(1){
        transform: translateY(7px) rotate(45deg)
    }
    &.active-nav span:nth-child(2){
        opacity: 0;
    }
    &.active-nav span:nth-child(3){
        transform: translateY(-7px) rotate(-45deg)
    }
    ${media(600)`
        display: block;
    `}
`

const StyledNav = styled.nav`
    transition: transform 500ms ease;
    a{
        text-decoration: none;
        font-weight: 700;
        margin: 0 15px;
        text-transform: uppercase;
        font-size: 18px;
        color: #fff;
    }
    &.active-nav{
        transform: translateX(0px);
    }
    ${media(600)`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.primary};
        padding-top: 60px;
        box-sizing: border-box;
        transform: translateX(-100%);
        z-index: 3;
        ${mixins.flexColumn};
        a{
            margin: 20px;
        }
    `}
`

const navLinks = [
    {
        name: "home",
        url: "/"
    },
    {
        name: "menu",
        url: "/menu"
    },
    {
        name: "order",
        url: "/order"
    }
]

const Navbar = () => {
    let [state, setState] = useState(false);
    let handleClick = () => {
        setState(!state);
        document.body.classList.toggle("active-nav")
    }
    return (
        <StyledContainer>
            <StyledLogo>NK</StyledLogo>
            <StyledNav className={state && "active-nav"}>
                {
                    navLinks.map(({name, url}, i) => 
                            <Link href={url} key={i}><a key={i}>{name}</a></Link>)
                }
            </StyledNav>
            <StyledToggler onClick={handleClick} className={state && "active-nav"}>
                <span></span>
                <span></span>
                <span></span>
            </StyledToggler>
        </StyledContainer>
    )
}

export default Navbar;