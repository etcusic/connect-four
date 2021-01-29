Rails API repo: https://github.com/etcusic/memory-game-api

Instructions:

For the backend structure, clone the repository from the Rails API repo link and run the following commands in your CLI:

- bundle install 
- rake db:migrate 
- rails s -p 3001 

(to initialize the seed data, type in 'rake db:seed' into your console)

This should set up the rails server if everything runs correctly. Then clone this repo and run the following commands:

- npm install 
- npm start 

License: 

To Do List:

[ ] Refactor game logic -> put somewhere else besides in component
[ ] Muppet "sign-in"
[ ] Add a create deck page
[ ] Add an edit deck page (merge with create deck page?)
[ ] Add user sign in
[ ] Refactor CSS layout - implement BEM structure


Game Refactor:
[ ] link left cards, right cards, and game board
[ ] create timer
[ ] create ConnectFour class with constructor to make a game object
[ ] create human player class
[ ] create computer player class


Stretch Goals:
[ ] Create practice option
[ ] Create tic-tac-toe game
[ ] Create speed game
[ ] Be able to add images as a side of the card