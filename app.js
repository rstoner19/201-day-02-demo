var userName = prompt("What's your name?");
console.log("The user name is " +userName);
alert("Hi there, "+ userName + ", my name's Rick.");

/* 1st question and check */
var userAnswer1 = prompt(userName+ ", please answer with Y or N.  Do I have two dogs?").toLowerCase();
console.log("userAnswer1 is "+userAnswer1);
if(userAnswer1 === "y"){
  alert("You're right " +userName+ ". I have a german-shepherd border collie mix and a golden retreiver.");
}
else{
  alert("Woah, "+ userName+ ", I'm not a cat person... not that there's anything wrong with that.");
};

/* 2nd question and check */
var userAnswer2 = prompt(userName+ ", please answer with Y or N.  Am I married?").toLowerCase();
console.log("userAnswer2 is "+userAnswer2);
while(userAnswer2 != "y" && userAnswer2 != "n"){
  userAnswer2 = prompt(userName+", you NEED to put a Y or N.  Am I married?");
};
if(userAnswer2 === "y"){
  alert(userName + ", I'm starting to go gray at 30. Of course I'm married.");
}
else{
  alert("I am married and wear a wedding ring "+ userName+ ".  Don't worry, I don't catch those details either.");
};

/* 3rd question and check */
var userAnswer3 = prompt(userName+ ", please answer with Y or N.  Do I live near downtown").toLowerCase();
console.log("userAnswer3 is "+userAnswer3);
while(userAnswer3 != "y" && userAnswer3 != "n"){
  userAnswer3 = prompt(userName+", you NEED to put a Y or N.  Am I married?");
};
if(userAnswer3 === "y"){
  alert("I do not, that would make my commute far better. "+userName+ " I'm out in Redmond.");
}
else{
  if(userAnswer1 === "y" && userAnswer2 === "y" && userAnswer3 === "n"){
    alert("Wow, "+userName+ "! You answered all three questions correctly.  I don't know if I should be impressed or creeped out. :-) ");
  }
  else{
    alert("You're right. I don't have that easy of a commute " + userName);
  };
};


var userAnswer4 = prompt("How old am I?");
console.log(userAnswer4);
if(userAnswer4 >= 0 && userAnswer4 < 30){
  alert("I'm older than that.");
}
else if(userAnswer4 == 30){
  alert("You're right, I'm " + userAnswer4 + " years old.");
}
else if (userAnswer4 > 30){
  alert("I know I'm going gray, but I'm not that old");
}
else {
  alert("Sorry, that answer didn't make sense.");
};

alert("You answered " + userAnswer1 + ", " + userAnswer2 + ", " + userAnswer3 + ", and " + userAnswer4 + " respectively.");