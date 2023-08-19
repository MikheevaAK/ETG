import cards from '@/data/cards'

function randomCards(cards) {
    let i = cards.length;
    while (--i > 0) {
        const randIndex = Math.floor(Math.random() * (i + 1));
        [cards[randIndex], cards[i]] = [cards[i], cards[randIndex]];
    }
    return cards;
}

export default randomCards(cards);