# React + Vite

# Tic Tac Toe Game
This project is a simple Tic-Tac-Toe game built with React and Material-UI. It allows two players to take turns and features a colorful and dynamic user interface.

# Features
Two-player mode: One player uses "X" and the other uses "O".
Winner detection: The game automatically detects a winner when any of the winning conditions are met.
Draw condition: A message displays when all squares are filled with no winner.
Game reset: A button allows the game to be reset at any time.
Prerequisites
To run this project, you’ll need:

Node.js (recommended version 14 or higher)
npm or yarn to manage dependencies
Installation
Clone the repository to your local environment:

bash
Copier le code
git clone https://github.com/djelidrh99/Tic-Tac-Toa-using-react.git
cd tic-tac-toe-game
Install the necessary dependencies using npm or yarn:

bash
Copier le code
npm install
or

bash
Copier le code
yarn install
Usage
To start the project in development mode, run the following command:

bash
Copier le code
npm start
or

bash
Copier le code
yarn start
The application will be accessible at http://localhost:3000 in your browser.

# Code Structure
The main game component is located in the TicTacToa.js file. Here’s an overview of the key functions and states used:

# board: State representing the game board as an array of 9 cells.
# isNext: Toggle to alternate turns between players "X" and "O".
# stateWinner: Message displaying the game’s current status (ongoing, winner, or draw).
# handelClick: Function triggered on each cell click to place the symbol of the current player.
# winner: Function to check for winning combinations.
# restar: Function to reset the game board.

# Customization
You can modify the styles by adjusting the sx attributes in the Material-UI components or by adding your own CSS classes.

# Technologies Used
React: JavaScript library for building user interfaces.
Material-UI: React-based UI framework for a modern and responsive design.


# Contributing
Contributions are welcome! If you have ideas for improving the game or find any issues, feel free to open an issue or submit a pull request.

# License
This project is licensed under the MIT License. For more details, see the LICENSE file.

# Author
Djelid Rh.