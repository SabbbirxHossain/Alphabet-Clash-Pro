// function playNow(){
//   // console.log("now we are playing");
//   // step-1 hide the home page. To hide screen we add "class hidden" 
//   // step -2 show the playground page

//   const homeHidden = document.getElementById('homeScreen');
//   homeHidden.classList.add('hidden');

//   const showPlayGround = document.getElementById('playGround');
//   showPlayGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
  const playerPressed = event.key;
  // console.log(playerPressed)

  const currentAlphaberElement = document.getElementById('cuttentAlphabet');
  const cuttentAlphabets =currentAlphaberElement.innerText;
  const expectedAlphabet =cuttentAlphabets.toLowerCase();
  // console.log(playerPressed,expectedAlphabet);
  if(playerPressed === expectedAlphabet){
    console.log('you win');
    removeBgById(expectedAlphabet);
    playNow();
  }else{
    console.log('you lose a life.');
  }
}

document.addEventListener('keyup',handleKeyboardButtonPress);

function continueGame(){
  // step-1 generate a random alphabet
  const RandomAlphabet =getA_RandomAlphabet();
  // console.log(RandomAlphabet)
  // set the random genetated alphabet to the screen.
  const C_Alphabet = document.getElementById('cuttentAlphabet');
  C_Alphabet.innerText = RandomAlphabet;

  setBgById(RandomAlphabet)

}

function playNow(){
  hideElementById('homeScreen');
  showElementById('playGround');
  continueGame();
}