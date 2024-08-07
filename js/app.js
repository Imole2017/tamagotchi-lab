/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


// Pseudocode
//STEP 1
// 1) Define the required variables used to track the state of the game.

//  a. Create an object called state and give it three properties: boredom, hunger, and sleepiness. Each property will have an initial value of 0.
// b. Use a variable named timer to store the timer for the game.
// c. Use a variable named gameOver to present if the player has lost the game.
// => b and c will not need to hold a value when they are defined.

 const state = () => {
    boredom = 0;
    hunger = 0;
    sleepiness = 0;

 };

 console.log(state);


 let timer; // Use a variable named timer to store the timer for the game.
 let gameOver; // Use a variable named gameOver to present if the player has lost the game.


//STEP 2
// 2) Store cached element references.

// 🚨 Don’t forget to console.log() your cached element references to ensure you’ve grabbed the correct elements!


// a. Make 3 constants to store the spans inside of the ‘stat-display’section.
// As an example, in a constant called boredomStatEl, store the element with an id of boredom-stat.
const boredomStatEl = document.querySelector('#boredom-stat');
console.log(boredomStatEl);
const hungerStatEl = document.querySelector('#hunger-stat');
console.log(hungerStatEl);
const sleepinessStatEl = document.querySelector('#sleepiness-stat');
console.log(sleepinessStatEl);


// b. Make 3 constants to store the button elements inside of the ‘controller’ section.
// As an example, in a constant called playBtnEl, store the element with an id of play.
const playBtnEl = document.querySelector('#play');
console.log(playBtnEl);
const feedBtnEl = document.querySelector('#feed');
console.log(feedBtnEl);
const sleepBtnEl = document.querySelector('#sleep');
console.log(sleepBtnEl);


// c. In a constant called gameMessageEl, store the element that displays the game’s status on the page.
const gameMessageEl = document.querySelector('#message');
console.log(gameMessageEl);

// d. In a constant called resetBtnEl, store the button element that will allow the player to play again.
const resetBtnEl = document.querySelector('#restart');
console.log(resetBtnEl);


// STEP 3
// 3) Upon loading, the game state should be initialized, and a function should 

// b. Call this init function, so that it is invoked when the app loads.
// 🚨 🚨 Add a console.log() as a confirmation check inside this function. This helps to ensure you’re calling the function you just created correctly!
// c. Set gameOver to false.
// d. Inside of the init() function, assign timer to a setInterval() function. Pass setInterval a function named runGame() (we will create it in the next step) as the first argument, and 2000 as the second argument.
// e. Create a function named runGame. For now, it should simply console.log(): 'the game is running!'
// 💡 Check your console to confirm this is working - you should see the game is running! log to the console every 2 seconds.
// f. Finally, call a function named render().
// 🚨 As we have not made this function yet, this will throw an arrow until you complete step 4a!


// a. Create a function called init.
const init = () => {

}

console.log(init);



//    be called to render this game state.
// 4) The state of the game should be rendered to the user.
// 5) Handle the game over logic. 
// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.
// 7) Create reset functionality.