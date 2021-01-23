import React from 'react'

const DeckSelector = ({ decks, changeView }) => {
    return (
        <div>
            { console.log(decks) }
            <div class="selector-title">Select Deck:</div>
            <ul class="collection">
                { decks.map((deck, index) => <li class="collection-item" onClick={() => changeView(index) } >{ deck.title }</li>)}
            </ul>
      </div>
    )
}

export default DeckSelector