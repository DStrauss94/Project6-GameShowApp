const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');
var elementUl = document.querySelector('#phrase ul');
buttonReset.style.cursor = "pointer";

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

    // return fragment;
});

addPhraseToDisplay(phraseArray);


qwerty.addEventListener("click", (e) =>{
    if(e.target.tagName === 'BUTTON'){
        const button = e.target;
        button.className = 'chosen';
        const result = checkLetter(button);
    }
});


const checkLetter = (letterButton => {
    const letters = elementUl.children;
    console.log(letterButton);
    let match = null;

    for(let i = 0 ; i < letters.length; i++){
        //checks to see if letter chosen, matches with letter at that index 
        if(letterButton.textContent === letters[i].textContent.toLowerCase()){
            
        }

    }

    return match;

});







 


