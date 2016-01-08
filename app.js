var ans1 = document.getElementById("answerid1");
var ans2 = document.getElementById("answerid2");
var ans3 = document.getElementById("answerid3");
var ans4 = document.getElementById("answerid4");

var userName = prompt("What's your name?");
console.log("The user name is " +userName);
alert("Hi there, " + userName + ", my name's Rick.  Get ready to answer a few questions.");

var correctAnswer = 0;

var quesData = [[userName + ", please answer with Y or N.  Do I have two dogs?", "yes","y","You're right " + userName + ". I have a german-shepherd border collie mix and a golden retreiver.","Woah, "+ userName + ", I'm not a cat person... not that there's anything wrong with that.",answerid1],
[userName+ ", please answer with Y or N.  Am I married?","y","yes",userName + ", I'm starting to go gray at 30; of course I'm married.","I am married and wear a wedding ring, "+ userName+ ".  Don't worry, I don't catch those details either.",answerid2],
[userName+ ", please answer with Y or N.  Do I live near downtown","n","no","You're right " + userName + ". I'm out in Redmond. You got " + correctAnswer + " answers right! Now we'll see how many times it takes you to guess the right number.","I do not, that would make my commute far better. I'm out in Redmond. You got " + correctAnswer + " answers right! Now we'll see how many times it takes you to guess the right number.",answerid3]]

//1st question and check //
function answer1(){
  for (var i = 0; i < quesData.length; i++){
var userAnswer1 = prompt(quesData[i][0]);
  console.log("userAnswer1 is "+userAnswer1);
//correctAnswer
  if(userAnswer1 === quesData[i][1] || userAnswer1 === quesData[i][2]) {
    quesData[i][5].textContent = quesData[i][3];
    correctAnswer ++;
    quesData[i][5].className = 'right';
  }
  //wronganswer
  else {
      quesData[i][5].textContent = quesData[i][4];
      quesData[i][5].className = 'wrong';
    }
}

};
// // // 2nd question and check //
// function answer2(){
//   for (var i = 0; i < quesData.length; i++) {
//   // var userAnswer2 = prompt(userName+ ", please answer with Y or N.  Am I married?").toLowerCase();
//   var userAnswer2 = prompt(quesData[i][0]);
//   console.log("userAnswer2 is "+userAnswer2);
//   // if(userAnswer2 === "y" || userAnswer2 === "yes")
//   if(userAnswer2 === quesData[i][1] || userAnswer2 === quesData[i][2]){
//     // ans2.textContent = userName + ", I'm starting to go gray at 30; of course I'm married."
//     quesData[i][5].textContent = quesData[i][3];
//     correctAnswer ++;
//   }
//   else{
//     quesData[i][5].textContent = quesData[i][4];
//   }
//
// }};
//
// // // 3rd question and check //
// function answer3(){
//   for (var i = 0; i < quesData.length; i++) {
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
//Guess the right number //
function answer4(){
  var guessNumber = 1;
  var userAnswer4 = prompt("Guess a number between 0 and 20");
  console.log(userAnswer4);
  while (userAnswer4 != 19){
    if(userAnswer4 < 19){
      guessNumber ++;
      userAnswer4 = prompt("You guessed "+userAnswer4+", which is too low, guess again. Guess a number between 0 and 20");
      ans4.className = "wrong"
    }
    else if(userAnswer4 > 19){

      guessNumber ++;
      userAnswer4 = prompt("You guessed "+userAnswer4+", which is too high.  Please put in a lower number and guess again! Guess a number between 0 and 20");
      ans4.className = "wrong"
    }
    else {
      alert("You need to put in a number!");
      guessNumber ++;
      userAnswer4 = prompt("Guess a number between 0 and 20");
      ans4.className = "wrong"
    };
  };
  if(guessNumber === 1){
    ans4.textContent = "Boom goes the dynamite! Congrats, "+userName+", it only took you "+guessNumber+" guess to come up with the right number!";
ans4.className = "right"
  }
  else if(guessNumber < 10){
    ans4.textContent = "You got it! It took a few tries, "+guessNumber+" to be exact.";
    ans4.className = "right"
  }
  else{
    ans4.textContent = "That took a while. "+guessNumber+" guesses later, but you finally made it.";
ans4.className = "right"
  };

}
// for (var i = 0; i < quesData.length; i++){

  answer1();
  // answer2();
  // answer3();
  answer4();
// }
