var userName = prompt("What's your name?");
console.log("The user name is " +userName);
alert("Hi there, " + userName + ", my name's Rick.  Get ready to answer a few questions.");

var correctAnswer = 0;
//1st question and check //
var userAnswer1 = prompt(userName+ ", please answer with Y or N.  Do I have two dogs?").toLowerCase();
console.log("userAnswer1 is "+userAnswer1);
if(userAnswer1 === "y" || userAnswer1 === "yes"){
  alert("You're right " +userName+ ". I have a german-shepherd border collie mix and a golden retreiver.");
  correctAnswer ++;
}
else{
  alert("Woah, "+ userName+ ", I'm not a cat person... not that there's anything wrong with that.");
};

// 2nd question and check //
var userAnswer2 = prompt(userName+ ", please answer with Y or N.  Am I married?").toLowerCase();
console.log("userAnswer2 is "+userAnswer2);
if(userAnswer2 === "y" || userAnswer2 === "yes"){
  alert(userName + ", I'm starting to go gray at 30; of course I'm married.");
  correctAnswer ++;
}
else{
  alert("I am married and wear a wedding ring, "+ userName+ ".  Don't worry, I don't catch those details either.");
};

// 3rd question and check //
var userAnswer3 = prompt(userName+ ", please answer with Y or N.  Do I live near downtown").toLowerCase();
console.log("userAnswer3 is "+userAnswer3);
if(userAnswer3 === "n" || userAnswer3 === "no"){
  alert("You're right " + userName + ". I'm out in Redmond.");
  correctAnswer ++;
}
else{
  alert("I do not, that would make my commute far better. I'm out in Redmond.");
};
alert("You got " +correctAnswer+ " answers right! Now we'll see how many times it takes you to guess the right number.")

//Guess the right number //
var guessNumber = 1;
var userAnswer4 = prompt("Guess a number between 0 and 20");
console.log(userAnswer4);
while (userAnswer4 != 19){
  if(userAnswer4 < 19){
    alert("You guessed "+userAnswer4+", which is too low, guess again.");
    guessNumber ++;
    userAnswer4 = prompt("Guess a number between 0 and 20");
  }
  else if(userAnswer4 > 19){
    alert("You guessed "+userAnswer4+", which is too high.  Please put in a lower number and guess again!");
    guessNumber ++;
    userAnswer4 = prompt("Guess a number between 0 and 20");
  }
  else {
    alert("You need to put in a number!");
    guessNumber ++;
    userAnswer4 = prompt("Guess a number between 0 and 20");
  };
};
if(guessNumber === 1){
  alert("Boom goes the dynamite! Congrats, "+userName+", it only took you "+guessNumber+" guess to come up with the right number!");
}
else if(guessNumber < 10){
  alert("You got it! It took a few tries, "+guessNumber+" to be exact.");
}
else{
  alert("That took a while. "+guessNumber+" guesses later, but you finally made it.");
};
