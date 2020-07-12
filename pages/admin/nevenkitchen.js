import React, {useState} from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/global";
import mixins from "../../styles/mixins";
import Users from "../../components/users";
import Head from "next/head";
import Orders from "../../components/orders";


const StyledContainer = styled.div`
    display: flex;
    min-height: 100vh;
`

const StyledWrapper = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px 20px;
`

const StyledSidebar = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding: 40px 0;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    color: #fff;
    height: 100vh;
`

const StyledHeader = styled.div`
    ${mixins.flexColumn};
    img{
        width: 250px;
        height: 150px;
    }
    margin-bottom: 30px;
`

const StyledList = styled.ul`
    padding: 0;
    li{
        padding: 15px 20px;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        transition: background-color 200ms ease; 
        background-color: transparent;
        &.selected{
            background-color: ${props => props.theme.colors.secondary};
        }
        &:hover{
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`

const Admin = () => {
    let [state, setState] = useState(true);
    return (
        <StyledContainer>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Catamaran&display=swap" rel="stylesheet"></link>
            </Head>
            <StyledSidebar>
                <StyledHeader>
                    <img src="/images/user.svg" alt="user image" />
                    <h2>Admin</h2>
                </StyledHeader>
                <StyledList>
                    <li className={state && "selected"} onClick={() => setState(true)}>USERS</li>
                    <li className={state || "selected"} onClick={() => setState(false)}>ORDERS</li>
                </StyledList>
            </StyledSidebar>
            <StyledWrapper>
                {
                    state ? 
                      <Users /> 
                      :
                      <Orders />
                }
            </StyledWrapper>
            <GlobalStyles />
        </StyledContainer>
    )
}

export default Admin;