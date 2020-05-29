





function math(){



  var player1 = " Hello Judo";
  alert(player1);
  var rando = Math.random();
  rando = rando * 100;
  prompt("What is your birth month ? ");
  rando = Math.floor(rando)+1;
  alert( player1 + " You have a " + rando + "% chance of becoming the boss");

  if(rando < 50){
    alert("wow, under 50 is our limit...." + rando + "% chance ?, You owe $50K for this transaction");



  }

  else{
    alert("Because You have a better than " + rando + " chance, your account has been increased by $25k ")
  };

}



math();
