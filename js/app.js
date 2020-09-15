const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');

let missed = 0;

var phrases = ['Welcome To the Black Parade', 'Before I Forget' ,
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
    for(let i = 0 ; i > arr.length;  i++){
        if(arr[i] !== " "){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(arr[i]);
            node.appendChild(textnode);
            phrase.appendChild(node);
        }
    }
});

addPhraseToDisplay(phraseArray);


const checkLetter = (letterButton => {
    const letters = document.querySelectorAll('.keyRow');
    let match = null;

    for(let i = 0 ; i < letters.length; i++){

        //checks to see if letter chosen, matches with letter at that index 
        if(letterButton === letters[i].textContent.toLowerCase()){
            letters[i].className += 'show';
            match = letters[i].textContent;
        }

    }

    return match;

});


 qwerty.addEventListener("click", (e) =>{
     if(e.target.tagName === 'BUTTON'){
         const button = e.target;
         button.className = 'chosen';
         
     }

     const result = checkLetter()
    


 })


 


