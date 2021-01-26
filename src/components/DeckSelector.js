import React from 'react'

const DeckSelector = ({ decks, changeView }) => {
    return (
        <div class="absolute-center">
            <ul class="collection">
                <li class="collection-item">Select Deck:</li>
                { decks.map((deck, index) => <li class="collection-item" onClick={() => changeView(index + 1) } >{ deck.title }</li>)}
            </ul>
        </div>
        
    )
}

export default DeckSelector