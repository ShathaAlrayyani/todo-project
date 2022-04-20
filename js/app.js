 

  var username = prompt("enter your name here");
  var usergender = prompt("your gender ('male / female')");
  var userage = prompt("how old are you ?");

  if(userage <= 0){
      alert("error 707 .. you entered a wrong value");
  }
  
 confirm("if you want to skip the welcoming message \n press Cancel.");


 let text;
 if (confirm("if you want to skip the welcoming message \n press Cancel.") == true && usergender == "male") {
   alert("Welcome Mr." + username);
 }else if(confirm("if you want to skip the welcoming message \n press Cancel.") == true && usergender == "female") {
   alert("Welcome Ms." + username);
 }else if (usergender != "female" || usergender !="male" && confirm("if you want to skip the welcoming message \n press Cancel.") == true ){
     alert("Welcome " + username);
 }else if (confirm("if you want to skip the welcoming message \n press Cancel.") == false && usergender == "female" || usergender =="male"){
     alert("thanks");
 }

 

