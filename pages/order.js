import styled from "styled-components";
import Layout from "../components/layout";
import Head from "next/head";
import media from "../styles/media";
import mixins from "../styles/mixins";
import OrderForm from "../components/order-form";


const StyledContainer = styled.section`
    min-height: 100vh;
    display: flex;
    ${media(900)`
        ${mixins.verticalCenter}
    `}
`
const StyledBackground = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    padding-top: 60px;
    background: url("/images/restaurant.jpg") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    ${mixins.flexCenter};
    div{
        padding-left: 15px;
        border-left: 5px solid #fff;
        z-index: 2;
        h2{
            color: #fff;
            font-size: 48px;
            margin: 0;
            ${media(230)`
                font-size: 30px;
            `}
        }
        p{
            color: #fff;
            font-size: 30px;
            margin: 0;
            text-align: center;
            font-weight: 500;
            ${media(230)`
                font-size: 22px;
            `}
        }
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0,51,102);
        background: linear-gradient(90deg, rgba(0,51,102,0.34217436974789917) 61%,
                     rgba(0,51,102,0.6587009803921569) 77%, rgba(0,51,102,0.9136029411764706) 92%);
    }
    ${media(900)`
        padding: 150px 0;
    `}
`

const StyledFormWrapper = styled.div`
    background-color: ${props => props.theme.colors.primary};
    box-sizing: border-box;
    padding: 60px 15px 0;
    position: relative;
    ${mixins.flexCenter};
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.secondary};
        clip-path: polygon(0 0, 100% 0, 100% 46%, 100% 47%);
    }
    ${media(900)`
        order: 2;
        padding: 50px 10px 20px;
        flex-grow: 1;   
    `}
`


export default function Order(){
    return (
        <Layout>
            <Head>
                <title>Neven's Kitchen - order page</title>
            </Head>
            <StyledContainer>
                <StyledBackground>
                    <div>
                        <h2>Order Now</h2>
                        <p>It's Super Easy!</p>
                    </div>
                </StyledBackground>
                <StyledFormWrapper>
                    <OrderForm />
                </StyledFormWrapper>
            </StyledContainer>
        </Layout>
    )
}