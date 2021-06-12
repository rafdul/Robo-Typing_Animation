const box = document.querySelector('.typing');
const text = 'Cześć, co tam?!!?';
let wordIndex = 0;
let oldTime = 0;
let speed = 150; // czym większa wartość, tym wolniejszy typing

const typing = (newTime) => {
    if(newTime - oldTime > speed) {
        oldTime = newTime;
        const letter = text.substr(wordIndex,1);
        box.textContent += letter;
        wordIndex++;
    }
    requestAnimationFrame(typing);
}

typing();