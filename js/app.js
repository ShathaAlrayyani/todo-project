 

  let userName = prompt("enter your name here");
  let userGender = prompt("your gender ('male / female')");
  let userAge = prompt("how old are you ?");

  if(userAge <= 0){
      alert("error 707 .. you entered a wrong value");
  }

  let userConfirm = confirm("if you want to skip the welcoming message \n press Cancel.");

 if (userConfirm == true && userGender == "male") {
   alert("Welcome Mr." + userName);
 }else if(userConfirm == true && userGender == "female") {
   alert("Welcome Ms." + userName);
 }else if (userGender != "female" || userGender !="male" && userConfirm == true ){
     alert("Welcome " + userName);
 }else if (userConfirm == false ){
     alert("thanks");
 }

 let userAnswer1= prompt( "Q1: are you looking for a job ?");

 function firstQestion(){
  if (userAnswer1==""){
    alert ("your answer for Q1 invalid")
  }
 }

 firstQestion()

 let userAnswer2= prompt("Q2: are you a software developer ? ");

 function secQestion(){
  if (userAnswer1==""){
    alert ("your answer for Q2 invalid")
  }
 }
 secQestion()

 let userAnswer3= prompt("Q3: Do you mind working as a freelancer ?");

 function thirdQestion(){
  if (userAnswer1==''){
    alert ("your answer for Q3 invalid")
  }
 }
 thirdQestion()

 let answers = [userAnswer1,userAnswer2,userAnswer3]
  console.log(answers);

  

