import styled from "styled-components";
import mixins from "../styles/mixins";

const StyledContainer = styled.div`
    position: fixed;
    box-sizing: border-box;
    padding: 0 30px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.9);
    ${mixins.flexCenter};
    z-index: 4;
    box-shadow: 5px 5px 40px black;
`

const StyledMessage = styled.div`
    ${mixins.verticalCenter};
    max-width: 250px;
    p{
        padding: 15px 10px;
        font-size: 16px;
        text-align: center;
        color: #fff;
        background-color: ${props => props.theme.colors.secondary};
        margin: 0;
        text-transform: uppercase;
        font-weight: 700;
    }
    button{
        background-color: ${props => props.theme.colors.primary};
        padding: 8px 10px;
        text-align: center;
        color: #fff;
        border: none;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
    }
`

const Message = ({message, callback, button}) => {
    return (
        <StyledContainer>
            <StyledMessage>
                <p>{message}</p>
                <button onClick={callback}>{button}</button>
            </StyledMessage>
        </StyledContainer>
    )
}

export default Message