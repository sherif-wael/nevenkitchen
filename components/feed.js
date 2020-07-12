import styled from "styled-components";
import media from "../styles/media";

const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${media(900)`
        grid-template-columns: 1fr;
    `}
`

const StyledFeed = styled.div`
    box-sizing: border-box;
    padding: 15px 20px;
    color: #fff;
    text-align: center;
    background-color: ${props => props.theme.colors.secondary};
    &:nth-of-type(2){
        background-color: ${props => props.theme.colors.primary};
    }
    p{
        font-weight: 400;
        font-size: 18px;
    }
`
const StyledIcon = styled.img`
    width: 100px;
    height: 100px;
`

const Feed = () => {
    return (
        <StyledContainer>
            <StyledFeed>
               <StyledIcon src="/images/review.svg" alt="review image" />
                <p>Every order is prepared and delivered with lots of love and care.
                     And through out the past 4 years we have recieved many good reviews from all of our
                      customres that encourages us to keep working even harder.</p>
            </StyledFeed>
            <StyledFeed>
                <StyledIcon src="/images/email.svg" alt="contant icon" />
                <p>We are keen to make ourselves accessible as we could. So, you can contact us through our website and our facebook page, plus you can order whatever you like through those two platforms.</p>
            </StyledFeed>
        </StyledContainer>
    )
}
<meta name="description" content="An online catering in Alexandria, Egypt serving all kind of home food" />

export default Feed;