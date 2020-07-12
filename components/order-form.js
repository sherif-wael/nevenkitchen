import React, {useState, useEffect} from "react";
import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import axios from "axios";
import Message from "./message"

const StyledContainer = styled.div`
    width: 340px;
    box-sizing: border-box;
    padding: 10px 10px 25px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 20px rgb(0, 0, 0, 0.4);
    z-index: 2;
`

const StyledHeader = styled.h3`
    ${mixins.flexCenter};
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
    margin: 10px 0 6px;
    img{
        width: 50px;
        height: 50px;
        margin-left: 5px;
        ${media(270)`
            width: 40px;
            height: 40px;
        `}
    }
    ${media(270)`
        font-size: 24px;
    `}
`

const StyledForm = styled.form`
    ${mixins.verticalCenter};
    margin-top: 10px;
    label{
        font-size: 18px;
        color: ${props => props.theme.colors.primary};
        padding: 10px 0;
        display: block;
    }
    input{
        font-size: 18px;
        padding: 7px 3px;
        display: block;
        ${media(270)`
            font-size: 16px;
            width: 100%;
        `}
    }
    textarea{
        resize: none;
        padding: 7px 3px;
        font-size: 18px;
        disply: block;
        ${media(270)`
            width: 100%;
        `}
    }
`



const StyledButton = styled.div`
    text-align: center;
    margin-top: 20px;
    button{
        color: #fff;
        font-size: 18px;
        padding: 10px 15px;
        border: none;
        outline: one;
        background-color: ${props => props.theme.colors.primary};
        cursor: pointer;
        border-radius: 5px;
    }
`

const OrderForm = () => {
    let [state, setState] = useState({username: "", mobile: "", orderInfo: ""});
    let [order, setOrder] = useState({loading: false, error: null, loaded: false});
    let [location, setLocation] = useState(null);
    let [locationError, setLocationError] = useState(false);
    const submit = () => {
        if(!location){
            setLocationError(true);
        }else{
            setOrder({...order, loading: true});
            axios
               .post("/api/order", {...state, location})
               .then(res => setOrder({...order, loading: false, loaded: true}))
               .catch(err => setOrder({...order, error: err.response.data.message}))
        }
    }
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            let {latitude, longitude} = pos.coords;
            setLocation({latitude, longitude});
        })
    }
    const locationErrorCallback = () => {
        setLocationError(false);
        getLocation();
    }
    const OrderErrorCallback = () => {
        setOrder({error: null})
    }
    useEffect(getLocation, []);
    return (
        <StyledContainer>
            <StyledHeader>
                Order Here <img src="/images/food-delivery.png" alt="food delivery icon" />
            </StyledHeader>
            <StyledForm>
                <label htmlFor="#username">Enter Your Name</label>
                <input type="text" onChange={e => setState({...state, username: e.target.value})} 
                       id="username"/>
                <label htmlFor="#mobile">Enter your Mobile</label>
                <input type="text" onChange={e => setState({...state, mobile: e.target.value})} 
                       id="mobile"/>
                <label htmlFor="#order">Enter Your Order</label>
                <textarea id="order" rows="3" onChange={e => setState({...state, orderInfo: e.target.value})}></textarea>
                <StyledButton>
                    <button type="button" onClick={submit} disabled={order.loading}>
                        {
                            order.loading ? 
                               "sending order..." :
                                "submit"
                        }
                    </button>
                </StyledButton>
            </StyledForm>
            {
                locationError && <Message message="To order we need to access your location" 
                                       button="ok" callback={locationErrorCallback} />
            }
            {
                order.error && <Message message={order.error} 
                                       button="cancel" callback={OrderErrorCallback} />
            }
            {
                order.loaded && <Message message="Your order has been successfully sent wait for our call!"
                                         button="ok" callback={() => setOrder({...order, loaded: false})} />
            }
        </StyledContainer>
    )
}

export default OrderForm