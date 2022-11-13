import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDecks } from "../Components/axiosUtil/axiosUtil";
import DeckCard from "../Components/DeckCard/DeckCard";
import Navbar from "../Components/Navbar/Navbar";
import mockdata from "../test/mock-server";
const DecksPage = () => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    console.log("Calling function");
    getDecks()
    .then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  return (
    <DeckPageContainer>
      <Navbar />
      <YourDeckHeader>Your Decks</YourDeckHeader>
      <DecksContainer>
        {data && data.map((deck) => {
          return (
            <DeckCard key={deck.id} href={`/deck/${deck.id}/card`} title={deck.name}></DeckCard>
          );
        })}
      </DecksContainer>
    </DeckPageContainer>
  );
};

const DecksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`;

const YourDeckHeader = styled.div`

  padding: 20px;
  font-family: sans-serif;
  font-size: 3em;
  height: 30vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px){
        flex-direction: column;
        height: 15vh;
        justify-content: center;
        align-items: left;
    }
`;

const DeckPageContainer = styled.div``;

export default DecksPage;
