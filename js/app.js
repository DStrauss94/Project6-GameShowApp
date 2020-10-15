const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');
const hearts = document.querySelectorAll(".tries");
var elementUl = document.querySelector('#phrase ul');
buttonReset.style.cursor = "pointer";

let missed = 0;

var phrases = ['Hey Jude', 'Before I Forget' ,
 'Back In Black', 'Quantum Flux', 'Snuff'];

buttonReset.addEventListener("click", (e) => {

    document.getElementById('overlay').style.display = 'none';
});

const getRandomPhraseAsArray = ((arr) =>  {
    //function returns a phrase as an array of strings

    const randomNumber = Math.floor(Math.random() * Math.floor(arr.length));

    var randomPhrase = arr[randomNumber].split("");

    return randomPhrase;
});


const phraseArray = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = (arr => {
    var fragment = document.createDocumentFragment();

     for(let i = 0 ; i < arr.length;  i++){
        //creates li element at the beginning
        var elementLi = document.createElement("LI");
        //adds text content to elementLi
        elementLi.textContent = arr[i];

        //appends element li to empty Document Fragment
        fragment.appendChild(elementLi);

        //creates box for letter
        if(arr[i] !== " "){
            elementLi.classList.add('letter');
        }
        //creates tiny space between letter boxes
        else{
            elementLi.classList.add('space');
        }
    }
    //appends to #phrase ul
    elementUl.appendChild(fragment);

});

addPhraseToDisplay(phraseArray);


qwerty.addEventListener("click", (e) =>{
    
    if(e.target.tagName === 'BUTTON'){
        const button = e.target;
        button.classList.add("chosen");
        button.disabled = true;
        const match =  checkLetter(button);
        if (match === null ){

            let missedHearts =  document.getElementsByTagName('img')[missed];
            missedHearts.src = "images/lostHeart.png";

            missed++;
           
        }

        
        
    }
    checkWin();
});


buttonReset.addEventListener("click", (e) =>{
    
    if(e.target.textContent === "Play Again!"){
        window.location.reload();
    }
    
});


const checkLetter = (letterButton => {
    const letters = elementUl.children;
    
    let match = null;

    for(let i = 0 ; i < letters.length; i++){
        
        //checks to see if letter chosen, matches with letter at that index 
        if(letterButton.textContent === letters[i].textContent.toLowerCase()){
            letters[i].classList.add("show");
            match = letterButton.textContent;
        }
        

    }

    return match;

});


const checkWin = (() =>  {
   //if letters in "show" match the number of letters in "letters"
   //then win shows

   //two variables to store li elements 
   const letterLi = document.querySelectorAll('.letter');
   const showLi = document.querySelectorAll('.show');

 
   // getting the lengths of each
   let lengthShow = letterLi.length;
   let lengthLetters = showLi.length;

   const overlay = document.getElementById("overlay");

   if(lengthShow === lengthLetters){
    
       overlay.style.display = 'flex';
       overlay.className = 'win';
       document.querySelector('h2').textContent= "You Win!";
       document.querySelector('a').textContent = "Play Again!";

    }

   else if(missed > 4){
    overlay.style.display = 'flex';
    overlay.className = 'lose';

    document.querySelector('h2').textContent= "You Lose";
    document.querySelector('a').textContent = "Play Again!";

    
 }
 
});

