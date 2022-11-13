import axios from 'axios';

export const localServerGateway = 'http://localhost:5000/'

export type Deck = {
    id: string;
    name: string;
    user_id: number;
}

export type Card = {
    id: string;
    deck_id: string;
    title: string;
    answer: string;
}

export async function getDecks() {
    const response = await axios.get(localServerGateway + 'deck/', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    // console.log(response);
    const data = await response.data as Deck[];
    // console.log(data);
    return data;
}
export async function getDeckDetailsFromDeckId(deckId: string) {
    const response = await axios.get(localServerGateway + `deck/${deckId}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    console.log(response);
    const data = await response.data as Deck;
    console.log(data);
    return data;
}
export async function getCards(deckId: string) {
    const response = await axios.get(localServerGateway + `deck/${deckId}/card`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    // console.log(response);
    const data = await response.data as Card[];
    // console.log(data);
    return data;
}

export async function postText(deckId: string, text: string) {
    await axios.post(localServerGateway + `deck/${deckId}/parse?type=text`, {
        text: text
    }, {})
}

export async function postPDF(deckId: string, file: any) {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post(localServerGateway + `deck/${deckId}/parse?type=pdf`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'

        }
    });
}

export async function deleteCard(cardId: string) {
    await axios.delete(localServerGateway + `deck/123/card/${cardId}`)
        .catch(err => console.error(err));
}