import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { StringLiteral } from "typescript";
import { Deck, deleteCard, getCards, getDeckDetailsFromDeckId, getDecks } from "../Components/axiosUtil/axiosUtil";
import Card from "../Components/Card/Card";
import FullScreenButton from "../Components/FullScreenButton/FullScreenButton";
import Navbar from "../Components/Navbar/Navbar";
import mockdata, { DeckType } from "../test/mock-server";
import theme from "../theme/theme";

type DeckPagePropTypes = {};

const DeckPage = (props: DeckPagePropTypes) => {
  const { deckId } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [currentDeck, setCurrentDeck] = useState<Deck>();
  const [selectMode, setSelectMode] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [selectedCards, setSelectedCards] = useState<{cardId: string}[]>([]);

  const callback = (cid: string) => {
    setSelectedCards([...selectedCards, {cardId: cid}]);
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const handleSelect = () => setSelectMode(true);
  const handleCancel = () => setSelectMode(false);
  const handleDelete = () => {
    console.log("Deleting", selectedCards);
    for(const card of selectedCards){
      deleteCard(card.cardId);
    }
    alert('Please refresh the page!');
  };

  useEffect(() => {
    getDeckDetailsFromDeckId(deckId || '').then(deck => {
      console.log(deckId);
      setCurrentDeck(deck);
    })
    getCards(deckId || '').then((curr) => {
      console.log(curr);
      setData(curr);
    });
  }, []);

  return (
    <>
      <Navbar />
      <YourDeckHeader>
        <FullScreenButton
          isFullScreen={fullScreen}
          onFullScreen={handleFullScreen}
        />
        {currentDeck?.name}
        <ButtonContainer>
          {!selectMode ? (
            <Button
              color={theme.color.creamWhite}
              backgroundColor={theme.color.blue}
              onClick={handleSelect}
            >
              Select
            </Button>
          ) : (
            <>
              <Button
                color={theme.color.creamWhite}
                backgroundColor="#b31a1a"
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Button
                color={theme.color.creamWhite}
                backgroundColor={theme.color.blue}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          )}
        </ButtonContainer>
      </YourDeckHeader>
      <CardsContainer>
        <Grid>
          {data?.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                definition={card.answer}
                showSelector={selectMode}
                title={card.title}
                href={`/deck/${card.deckId}/card/${card.id}`}
                callback={callback}
              />
            );
          })}
          <Card id='-1'title="" uploadCard showSelector={false} deckId={deckId}/>
          <Card id='-2'title="" uploadCard uploadPDFCheck showSelector={false} deckId={deckId} />
        </Grid>
      </CardsContainer>
    </>
  );
};

const YourDeckHeader = styled.div`
  padding: 20px;
  font-family: sans-serif;
  font-size: 3em;
  padding-top: 10vh;
  justify-content: left;
  background-color: aliceblue;
  @media screen and (max-width: 500px) {
    padding-top: 15vh;
  }
`;

const Button = styled.button<{ backgroundColor: string; color: string }>`
  width: 100px;
  height: 40px;
  margin: 0 2px;
  /* padding: 10px; */
  border-radius: 7px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const ButtonContainer = styled.div``;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 400px);
  }
  grid-template-columns: repeat(2, 400px);

  @media screen and (min-width: 1150px) {
    grid-template-columns: repeat(3, 400px);
  }
`;

export default DeckPage;
