const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.getElementsByClassName('btn__reset');

let missed = 0;

var phrases = ['Welcome To the Black Parade', 'Before I Forget' ,
 'Back In Black', 'Quantum Flux', 'Snuff'];

buttonReset.addEventListener("click", () => {

    document.getElementById('overlay').style.display = 'none';
});

getRandomPhraseAsArray(arr => {
    //function returns a phrase as an array of strings

    const randomNumber = Math.random(arr.length);

    return arr[randomNumber];
});

getRandomPhraseAsArray(phrases);


checkLetter(letter => {
    const letters = document.querySelectorAll('.letter');
    let match = null;

    for(let i = 0 ; i < letters.length; i++){

        //checks to see if letter chosen, matches with letter at that index 
        if(letter === letters[i].textContent.toLowerCase()){
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


