import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";
import TypeWriter from "typewriter-effect";
import UnformattedLink from "../Components/util/UnformattedLink";
import theme from "../theme/theme";
type HomePagePropsType = {};

const HomePage = ({}: HomePagePropsType) => {
  return (
    <HomePageContainer>
      <Navbar />
      <MainContent>
        <LandingHeader className="typewriter">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
              .typeString("Automating your education...")
              .start();
            }}
            options={{ delay: 50 }}
          ></TypeWriter>
        </LandingHeader>
        <br />
        <ContinueLink href="/deck">
            Continue to Decks
        </ContinueLink>
      </MainContent>
    </HomePageContainer>
  );
};

const ContinueLink = styled(UnformattedLink)`
    background-color: ${theme.color.purple};
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 5px;
`

const LandingHeader = styled.p`
    color: ${theme.color.blue};
    font-size: 10rem;
`;

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HomePage;
