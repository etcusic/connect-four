import React from 'react'

const DeckSelector = ({ decks }) => {
    return (
        <div>
            <ul class="collection">
                { decks.map(deck => <li class="collection-item">{ deck.name }</li>)}
            </ul>
      </div>
    )
}

export default DeckSelector