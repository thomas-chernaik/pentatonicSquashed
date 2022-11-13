import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";

const FullScreenCardPage = () => {
    const {deckId, cardId} = useParams();
    const navigate = useNavigate();
    return (
        <>
        <Navbar/>
        <BackButton onClick={() => navigate(-1)}>
            Go back
        </BackButton>
        <FullScreenContainer>
        </FullScreenContainer>
        </>
    )
}

const FullScreenContainer = styled.div`
    
`

const BackButton = styled.button`
    
`

export default FullScreenCardPage;