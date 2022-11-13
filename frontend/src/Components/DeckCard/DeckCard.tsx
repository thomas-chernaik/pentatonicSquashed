import styled from "styled-components";
import theme from "../../theme/theme";

type DeckCardPropTypes = {
    title: string;
    definition?: string;
    href?: string;
  };
const DeckCard = ({title, href}: DeckCardPropTypes) => {
    return (
        <CardContainer href={href}>
          {title}
        </CardContainer>
      );
}

const CardContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 300px;
  width: 300px;
  min-width: 250px;
  max-height: 150px;
  height: 150px;
  min-height: 125px;
  font-size: 20px;
  color: ${theme.color.blue};
  border-radius: 5px;
  margin: 10px 10px;
  text-decoration: none;

  @media screen and (max-width: 500px){
    background-color: ${theme.color.lightGreen};
    color: ${theme.color.purple};
    width: 80vw;
    height: 30vh;
  }
`;

export default DeckCard;