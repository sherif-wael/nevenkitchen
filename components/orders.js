import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {StyledMessage} from "./users";


const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
`

const StyledOrder = styled.div`

`

const Orders = () => {
    let [state, setState] = useState({data: null, error: null});
    useEffect(() => {
        axios
           .get("/api/order")
           .then(res => setState({...state, data: res.data}))
           .catch(err => setState({...state, error: err.response.data}))
    }, [])
    if(state.error){
        return <StyledMessgae>{state.error.message}</StyledMessgae>
    }
    if(!state.data){
        return <StyledMessage>Loading...</StyledMessage>
    }
    return (
        <StyledContainer>
            {
                state.data.orders.map((order, i) => (
                    <StyledOrder>
                        <p className="title">- Username</p>
                        <p className="padding-left">{order.username}</p>
                        <p className="title">- Mobile Number</p>
                        <p className="padding-left">{order.mobile}</p>
                        <p className="title">- Location</p>
                        <p className="padding-left"><b>Lat:</b> {order.location.latitude}</p>
                        <p className="padding-left"><b>Lon:</b> {order.location.longitude}</p>
                        <p className="title">- Order</p>
                        <p className="padding-left">{order.orderInfo}</p>
                    </StyledOrder>
                ))
            }
        </StyledContainer>
    )
}

export default Orders;