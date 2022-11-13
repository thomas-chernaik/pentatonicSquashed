
export type CardType = {
    id: number;
    title: string;
    answer: string;
    deckId: string;
}

export type DeckType = {
    id: number;
    creatorId: string;
    name: string;
    cards: CardType[];
}

// const async getDecks = ():Promise<DeckType[]> => {

// }
// const mockdata: DeckType[] = [
//     {
//         id: 'd0',
//         creatorId: 'cr0',
//         name: 'Deck 1',
//         cards: [
//             {
//                 id: 'c0',
//                 title: 'Boba',
//                 answer: 'A drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c1',
//                 title: 'Boba Second',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c2',
//                 title: 'Boba Third',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//         ]
//     },
//     {
//         id: 'd1',
//         creatorId: 'cr0',
//         name: 'Deck 2',
//         cards: [
//             {
//                 id: 'c0',
//                 title: 'Boba',
//                 answer: 'A drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c1',
//                 title: 'Boba Second',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c2',
//                 title: 'Boba Thirdae',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//         ]
//     },
//     {
//         id: 'd2',
//         creatorId: 'cr0',
//         name: 'Deck 3',
//         cards: [
//             {
//                 id: 'c0',
//                 title: 'Boba',
//                 answer: 'A drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c1',
//                 title: 'Boba Second',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c2',
//                 title: 'Boba Thirdsada',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//         ]
//     },
//     {
//         id: 'd3',
//         creatorId: 'cr0',
//         name: 'Deck 4',
//         cards: [
//             {
//                 id: 'c0',
//                 title: 'Boba',
//                 answer: 'A drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c1',
//                 title: 'Boba Second',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c2',
//                 title: 'Boba Thirdsada',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//         ]
//     },
//     {
//         id: 4,
//         creatorId: 'cr0',
//         name: 'Deck 5',
//         cards: [
//             {
//                 id: 'c0',
//                 title: 'Boba',
//                 answer: 'A drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c1',
//                 title: 'Boba Second',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c2',
//                 title: 'Boba Thirdsada',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//         ]
//     },
//     {
//         id: 5,
//         creatorId: 'cr0',
//         name: 'Deck 6',
//         cards: [
//             {
//                 id: 0,
//                 title: 'Boba',
//                 answer: 'A drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 1,
//                 title: 'Boba Second',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//             {
//                 id: 'c2',
//                 title: 'Boba Thirdsada',
//                 answer: 'A second drink that you get with caffeine received with deception.',
//                 deckId: 'd0'
//             },
//         ]
//     }
// ];
export default {};

