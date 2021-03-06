import React from 'react'

const DeckSelector = ({ decks, changeView }) => {
    return (
        <div className="absolute-center">
            <ul id="deck-selector" className="collection">
                <li className="collection-item yellow darken-2">Select Deck:</li>
                { decks.map((deck, index) => <li className="collection-item yellow darken-2" key={ `deck-${index + 1}` } onClick={() => changeView(deck) } >{ deck.title }</li>)}
            </ul>
        </div>
    )
}

export default DeckSelector