import { ChangeEventHandler, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import internal from "stream";
import styled from "styled-components";
import theme from "../../theme/theme";
import { postPDF, postText } from "../axiosUtil/axiosUtil";
import { PDFLogo, TextLogo } from "../util/Logos";
type CardPropsTypes = {
  title: string;
  definition?: string;
  size?: SizeTypes;
  href?: string;
  showSelector: boolean;
  uploadCard?: boolean;
  uploadPDFCheck?: boolean;
  deckId?: string;
  id:string;
  callback?: (id: string) => void;
};

type SizeTypes = {
  width: number;
  height: number;
};

const Card = ({
  title,
  definition,
  href,
  showSelector,
  uploadCard,
  uploadPDFCheck,
  deckId,
  callback,
  id
}: CardPropsTypes) => {
  const [flipped, setFlipped] = useState(false);
  const [selected, setSelected] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    theme.color.creamWhite
  );

  const [uploadedFile, setUploadedFile] = useState();

  const [isSelectable, setIsSelectable] = useState(!uploadCard);

  function uploadPDF(){
    postPDF(deckId || '', uploadedFile).catch(err => console.error(err));
  };

  const handleCheck = () => {
    setSelected(!selected);
  };

  const uploadText = () => {
    const text = window.prompt('Paste your notes:');
    postText(deckId || '', text || '').catch(err => console.error(err));
  };

  const handleClick = () => {
    if (!showSelector) setFlipped(!flipped);
    if (showSelector && flipped)
      alert("Cannot select a card that has been flipped!");
    else if (showSelector && isSelectable){
      setSelected(!selected);
      callback && callback(id);
    } 
  };

  const handleUpload = (e: any) => {
    setUploadedFile(e.target.files[0]);
  }

  useEffect(() => {
    if (showSelector === false) {
      setBackgroundColor(theme.color.creamWhite);
      setSelected(false);
    }
  }, [showSelector]);

  useEffect(() => {
    if (selected) setBackgroundColor(theme.color.lightGreen);
    else setBackgroundColor(theme.color.creamWhite);
  }, [selected]);
  return (
    <Center>
      {uploadCard ? (
        uploadPDFCheck ? (
          <UploadCard style={{ userSelect: "none" }} onClick={uploadPDF}>
            <input onChange={handleUpload} type="file" accept="application/pdf"></input>
            <PDFLogo />
            Upload PDF
            
          </UploadCard>
        ) : (
          <UploadCard style={{ userSelect: "none" }} onClick={uploadText}>
            <TextLogo />
            Upload Text
          </UploadCard>
        )
      ) : (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <CardContainer
            onClick={handleClick}
            style={{ backgroundColor: backgroundColor }}
          >
            {title}
          </CardContainer>
          <CardContainer
            onClick={handleClick}
            style={{ backgroundColor: backgroundColor }}
          >
            {definition}
          </CardContainer>
        </ReactCardFlip>
      )}
    </Center>
  );
};



const CardContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 300px;
  min-height: 150px;
  height: 30vh;
  font-size: 20px;
  color: ${theme.color.blue};
  border-radius: 5px;
  margin: 10px 0;
  text-decoration: none;
  max-width: 300px;
  padding: 20px;
`;

const UploadCard = styled(CardContainer)`
  flex-direction: column;
   > input{
    width: 100%;
   }
  transition: 0.1s ease-out;
  :hover{
    background-color: #aea7a7;
    color: ${theme.color.creamWhite}
  }

  > svg{
    margin: 10px;
  }
`

const StyledInput = styled.input`
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 20px 0 0px 275px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export default Card;
