<script type="text/javascript">

var startrekwords = [
["C","A","P","T","A","I","N"],
  ["E","N","E","R","G","I","Z","E"],
  ["P","H","A","S","E","R"],
  ["E","N","T","E","R","P","R","I","S","E"],
  ["R","E","D","A","L","E","R","T"],
  ["P","I","C","A","R","D"],
]
var random = Math.floor((Math.random()*(startrekwords.length-1))); 

var words = startrekwords[random]; // the word to guess will be chosen from the array above
var ratewort = new Array(words.length);
var fehler = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < ratewort.length; i++){
	ratewort[i] = "_ ";
}

// prints the guessfield
function printRatewort(){
	for (var i = 0; i < ratewort.length; i++){
	var ratefeld = document.getElementById("ratefeld");
	var buchstabe = document.createTextNode(ratewort[i]);
	ratefeld.appendChild(buchstabe);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var pruefeZeichen = function(){
	var f = document.rateformular; 
	var b = f.elements["ratezeichen"]; 
	var zeichen = b.value; // the letter provided by the user
	zeichen = zeichen.toUpperCase();
	for (var i = 0; i < words.length; i++){
		if(words[i] === zeichen){
			ratewort[i] = zeichen + " ";
			var treffer = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var ratefeld = document.getElementById("ratefeld");
	ratefeld.innerHTML=""; 
	printRatewort();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!treffer){
		var badLetters = document.getElementById("badLetters");
		var buchstabe = document.createTextNode(" " + zeichen);
		badLetters.appendChild(buchstabe); 
		fehler++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
	}
	
	//checks if all letters have been found
	var fertig = true;
	for (var i = 0; i < ratewort.length; i++){
		if(ratewort[i] === "_ "){
			fertig = false;
		}
	}
	if(fertig){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(fehler === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printRatewort();
}

window.onload = init;
</script>