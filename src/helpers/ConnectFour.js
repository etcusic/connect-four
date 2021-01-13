class ConnectFour {

    constructor(player, deck, board) {
        this.player = player
        this.deck = deck
        this.board = board
        this.currentSet = []
        this.move = 1 // this.move % 2 === 0 ? changeColor(blue) : changeColor(red) => this.move += 1
        this.end = false
    }

}