import React from 'react'

const DeckSelector = ({ decks }) => {
    return (
        <div>
            <div class="selector-title">Select Deck:</div>
            <ul class="collection">
                { decks.map(deck => <li class="collection-item" >{ deck.title }</li>)}
            </ul>
      </div>
    )
}

export default DeckSelector