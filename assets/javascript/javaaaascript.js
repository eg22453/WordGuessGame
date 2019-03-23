
 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["r", "p", "s"];
 var userpick = document.getElementById("userpick");
 var computerpick = document.getElementById("computerpick");
 var userwins = document.getElementById("userwins");
 var computerwins = document.getElementById("compwins");
 var ties = document.getElementById("ties");
 var userwincount = 0;
 var computerwincount = 0;
 var tiecount =0;
 
 // This function is run whenever the user presses a key.
     document.onkeyup = function(event) {
       if (event.key == "r" || event.key == "s" || event.key == "p" ){
   // Determines which key was pressed.
           userpick.textContent = event.key;
           // Randomly chooses a choice from the options array. This is the Computer's guess.
           randomcomppick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
           computerpick.textContent = randomcomppick;
           console.log(randomcomppick);

             if (event.key == randomcomppick){
               tiecount++;
               ties.textContent =tiecount;

   



var wordlist = [
    "battleground",
    "monkey",
    "clarinet",
    "racecar", 
    "pokemon", 
    "pirate", 
    "nutrition",
    "starting",
    "dolphin",
    "superhero"
];


var randomword = wordlist[Math.floor(Math.random() * wordlist.length)];
