- video demo: https://www.youtube.com/watch?v=l9nDOq3InYY 
- blog - setting up Redux: https://etcusic.github.io/setting_up_redux 
- Rails API repo: https://github.com/etcusic/memory-game-api

Instructions:

For the backend structure, clone the repository from the Rails API repo link and run the following commands in your CLI:

- bundle install 
- rake db:migrate 
- rails s -p 3001 

(to initialize the seed data, type in 'rake db:seed' into your console)

This should set up the rails server if everything runs correctly. Then clone this repo and run the following commands:

- npm install 
- npm start 

Checklist:
- [x] Set up BrowserRouter in NavBar with Home, Game, and Scores pages
- [x] Create home page display
- [x] Create table display for user's scores
- [x] Hook up Redux to manage global state 
- [x] set up combineReducer to manage reducers => user, decks, gameLogs 
- [x] Connect fetch requests to Rails API
- [ ] Add a create deck page
- [ ] Add an edit deck page (merge with create deck page?)
- [ ] Add user sign in
- [ ] Refactor HTML & CSS layout using 
- [ ] Incorporate React Hooks

Game Checklist:
- [x] create LeftCards and RightCards for matching
- [x] create grid layout for connect four game 
- [x] create tokens that take color as a prop to indicate player
- [x] develop logic for checking valid moves and whether game is over
- [x] create timer
- [ ] isolate game logic
- [ ] human player
- [ ] computer player
- [ ] add difficulty logic and setting


Stretch Goals:
- [ ] Create practice option
- [ ] Create tic-tac-toe game
- [ ] Create speed game
- [ ] Be able to add images as a side of the card