var ans = [document.getElementById("answerid1"), document.getElementById("answerid2"), document.getElementById("answerid4")];

var userName = prompt("What's your name?");
console.log("The user name is " + userName);
alert("Hi there, " + userName + ", my name's Rick.  Get ready to answer a few questions.");

var correctAnswer = 0;
var questions = ['Question 1', 'question 2'];
var responses = [['right answer 1', 'wrong answer 1'],['right','wrong']];


function questionTest(questions,answers){
  console.log(questions)
  for(var i=0; i < questions.length; i++){
    console.log(i);
    var userAnswer= [];
    userAnswer[i] = prompt(userName+ ", please answer with Y or N. " + questions[i]).toLowerCase();
    console.log("userAnswer"+(i+1)+" is " +userAnswer[i]);
    if(userAnswer[i] === "y" || userAnswer[i] === "yes"){
      ans[i].textContent = "You're right " + userName + ". " + responses[i][0];
      correctAnswer ++;
      console.log(ans[i])
    } else{
      ans[i].textContent = "Sorry, incorrect " + userName + ". " + responses[i][1];
    }

  }
}

questionTest(questions,responses);


// //1st question and check //
// function answer1(){
//   var userAnswer[i]= prompt(userName+ ", please answer with Y or N.  Do I have two dogs?").toLowerCase();
//   console.log("userAnswer1 is "+userAnswer1);
//   if(userAnswer1 === "y" || userAnswer1 === "yes"){
//     ans1.textContent = "You're right " +userName+ ". I have a german-shepherd border collie mix and a golden retreiver.";
//     correctAnswer ++;
//   }
//   else{
//     ans1.textContent = "Woah, "+ userName+ ", I'm not a cat person... not that there's anything wrong with that.";
//   }
// }
//
// // 2nd question and check //
// function answer2(){
//   var userAnswer2 = prompt(userName+ ", please answer with Y or N.  Am I married?").toLowerCase();
//   console.log("userAnswer2 is "+userAnswer2);
//   if(userAnswer2 === "y" || userAnswer2 === "yes"){
//     ans2.textContent = userName + ", I'm starting to go gray at 30; of course I'm married."
//     correctAnswer ++;
//   }
//   else{
//     ans2.textContent = "I am married and wear a wedding ring, "+ userName+ ".  Don't worry, I don't catch those details either."
//   };
//
// }
//
// // 3rd question and check //
// function answer3(){
//   var userAnswer3 = prompt(userName+ ", please answer with Y or N.  Do I live near downtown").toLowerCase();
//   console.log("userAnswer3 is "+userAnswer3);
//   if(userAnswer3 === "n" || userAnswer3 === "no"){
//     ans3.textContent = "You're right " + userName + ". I'm out in Redmond. You got " + correctAnswer + " answers right! Now we'll see how many times it takes you to guess the right number.";
//     correctAnswer ++;
//   }
//   else{
//     ans3.textContent = "I do not, that would make my commute far better. I'm out in Redmond. You got " + correctAnswer + " answers right! Now we'll see how many times it takes you to guess the right number.";
//   };
// }
// //Guess the right number //
// function answer4(){
//   var guessNumber = 1;
//   var userAnswer4 = prompt("Guess a number between 0 and 20");
//   console.log(userAnswer4);
//   while (userAnswer4 != 19){
//     if(userAnswer4 < 19){
//       guessNumber ++;
//       userAnswer4 = prompt("You guessed "+userAnswer4+", which is too low, guess again. Guess a number between 0 and 20");
//     }
//     else if(userAnswer4 > 19){
//
//       guessNumber ++;
//       userAnswer4 = prompt("You guessed "+userAnswer4+", which is too high.  Please put in a lower number and guess again! Guess a number between 0 and 20");
//     }
//     else {
//       alert("You need to put in a number!");
//       guessNumber ++;
//       userAnswer4 = prompt("Guess a number between 0 and 20");
//     };
//   };
//   if(guessNumber === 1){
//     ans4.textContent = "Boom goes the dynamite! Congrats, "+userName+", it only took you "+guessNumber+" guess to come up with the right number!";
//
//   }
//   else if(guessNumber < 10){
//     ans4.textContent = "You got it! It took a few tries, "+guessNumber+" to be exact.";
//
//   }
//   else{
//     ans4.textContent = "That took a while. "+guessNumber+" guesses later, but you finally made it.";
//
//   };
//
// }
//
// answer1();
// answer2();
// answer3();
// answer4();
