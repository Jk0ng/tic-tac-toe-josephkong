# ❌ ⭕️ Tic Tac Toe

#### Overview

Tic Tac Toe is a classic children's game involving two players alternatively marking squares on a three-by-three grid. While the game play can be considered relatively simple for humans, creating the logic in code is considerably more challenging.

#### Learning Objectives

- can create a logic component to handle the gameplay
- can pass data and behavior from a parent component to a nested component with props
- can effectively work within a team to achieve a desired outcome

#### Additional Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Render](https://render.com/docs/deploy-create-react-app)



### Tic Tac Toe

This is a web game for two players who are taking turns on one device. You will have to use the component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React as well as be an exercise in creating good user experiences.

When creating a project, it is important to think about the organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. `App.js` controls all of the data in state, renders the other components, and performs the game logic.

### Win Condition


There is an interesting approach to the [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840) here. I used this example as an inspiration. 

---

### 📚 User Stories

- As a user, I can see a three-by-three grid game board on the page.
- As a user, I can click on a square to mark it.
- As a user, my partner can click on a square after me and see their mark.
- As a user, I can't click on a square that has already been marked.
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally), I can see a notice telling me which player won.
- As a user, I can't play the game after the game has been won.
- As a user, if no more squares are available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

