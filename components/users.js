import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import mixins from "../styles/mixins";

export const StyledMessage = styled.div`
    height: 100%;
    ${mixins.flexCenter};
    font-size: 40px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
`

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`

const StyledUserData = styled.div`
    padding: 10px ;
    // color: #000;
    color: ${props => props.theme.colors.primary};
    box-shadow: 1px 1px 20px rgb(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: transform 200ms ease;
    ${mixins.flexColumn};
    p{
        font-size: 24px;
        margin: 7px;
        font-weight: 600;
    }
    &:hover{
        transform: translateY(-10px);
    }
`

const Users = () => {
    let [state, setState] = useState({data: null, error: null});
    console.log(state.data)
    useEffect(() => {
        axios
           .get("/api/users")
           .then(res => setState({...state, data: res.data}))
           .catch(err => setState({...state, error: err.response.data}))
    }, [])
    if(state.error){
        return <StyledMessage>Internal Server Error</StyledMessage>
    }
    if(!state.data){
        return <StyledMessage>Loading...</StyledMessage>
    }
    return (
        <StyledContainer>
            {
                state.data.users.map((user, i) => (
                    <StyledUserData key={i}>
                        <h2>Home Views</h2>
                        <p>{user.session.homeViews}</p>
                        <h2>Menu Views</h2>
                        <p>{user.session.menuViews || 0}</p>
                    </StyledUserData>
                ))
            }
        </StyledContainer>
    )
}

export default Users;