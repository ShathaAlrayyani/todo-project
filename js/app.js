 

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


