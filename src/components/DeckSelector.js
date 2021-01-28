import React from 'react'


//make class component and put fetch decks here
const DeckSelector = ({ decks, changeView }) => {
    return (
        <div className="absolute-center">
            <ul className="collection">
                <li className="collection-item">Select Deck:</li>
                { decks.map((deck, index) => <li className="collection-item" key={ `deck-${index + 1}` } onClick={() => changeView(index + 1) } >{ deck.title }</li>)}
            </ul>
        </div>
    )
}

export default DeckSelector