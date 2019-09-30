var crystal1num = Math.floor(Math.random() * 12);
console.log(crystal1num);

var crystal2num = Math.floor(Math.random() * 12);
console.log(crystal2num);

var crystal3num = Math.floor(Math.random() * 12);
console.log(crystal3num);

var crystal4num = Math.floor(Math.random() * 12);
console.log(crystal4num);

var crystal1 = {
    points: crystal1num,
};
var crystal2 = {
    points: crystal2num,
};
var crystal3 = {
    points: crystal3num,
};
var crystal4 = {
    points: crystal4num,
};

var currentScore = 0;
var target = 0;
var wins = 0;
var losses = 0;


// This function called setupGame generates a random number and places it in the div #scoreToGet
// Also, the div "#playerScore" displays the currentScore, which is set to 0
function setupGame() {
    currentScore = 0;
    target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#scoreToGet").text(target);
$("#playerScore").text(currentScore);
$("#wins").text(wins);
$("#losses").text(losses);
};


// This function called addValues takes the current score and adds the value of clickCry to it
function addValues(clickCry) {
    currentScore += clickCry;
    $("#playerScore").text(currentScore);
    // if (currentScore < target) {
    //     console.log("working");
    // }
    if (currentScore === target) {
        alert("You won!");
        wins++
        setupGame();
    }
    else if (currentScore > target) {
        alert("Too high! You lose.");
        losses++
        setupGame();
        // The game auto-resets here. Need to update crystals.
    }
};


$("#crystal1img").on("click", function() {
    // var addNum = event.click;
    // console.log($(this));
    addValues(crystal1.points)
});
$("#crystal2img").on("click", function() {
    addValues(crystal2.points)
});
$("#crystal3img").on("click", function() {
    addValues(crystal3.points)
});
$("#crystal4img").on("click", function() {
    addValues(crystal4.points)
});
  

setupGame();
