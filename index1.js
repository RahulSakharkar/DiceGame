var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var address;
if(randomNumber1==1){address="images/dice1.png";}
else if(randomNumber1==2){address="images/dice2.png";}
else if(randomNumber1==3){address="images/dice3.png";}
else if(randomNumber1==4){address="images/dice4.png";}
else if(randomNumber1==5){address="images/dice5.png";}
else if(randomNumber1==6){address="images/dice6.png";}
document.getElementById("img1").setAttribute("src",address);



var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var address2;
if(randomNumber2==1){address2="images/dice1.png";}
else if(randomNumber2==2){address2="images/dice2.png";}
else if(randomNumber2==3){address2="images/dice3.png";}
else if(randomNumber2==4){address2="images/dice4.png";}
else if(randomNumber2==5){address2="images/dice5.png";}
else if(randomNumber2==6){address2="images/dice6.png";}


document.getElementById("img2").setAttribute("src",address2);

if(randomNumber1>randomNumber2){ document.getElementById("title").innerHTML="Player 1 wins🥸"}
else if(randomNumber2>randomNumber1){ document.getElementById("title").innerHTML="Player 2 wins🤠"}
else{ document.getElementById("title").innerHTML = "Tie🤧";}
