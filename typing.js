const box = document.querySelector('.typing');
const text = [
    'Cześć, co tam?!!? ^Dawno *nie& rozmawiałem.',
    'Chciałem ci coś powiedzieć. ^Herbert *się mylił&, gdy prawił o chodzeniu wyprostowanym wśród tych co na kolanach.',
    'Złote *runo& nicości to ściema! ^Ave!!!'
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 70; // czym większa wartość, tym wolniejszy typing
const stop = 1500; // zatrzymanie między kolejnymi tekstami
let activeDomElement = box;

const typing = (newTime) => {
	const letter = text[textIndex].substr(wordIndex,1);
    
	if(newTime - oldTime > speed) {
		if(wordIndex === text[textIndex].length) {
			if(textIndex === text.length-1) {
				console.log('koniec animacji');
				return
			}
			return setTimeout(() =>{
				box.textContent = '';
				textIndex++;6
				wordIndex = 0;
				requestAnimationFrame(typing);
			}, stop)
		} else if(wordIndex === 0 || letter === '^') {
			const pMaker = document.createElement('p');
			box.appendChild(pMaker);
			activeDomElement = pMaker;
		} else if(letter === '*') {
			const colorMaker = document.createElement('span');
			activeDomElement.appendChild(colorMaker);
			activeDomElement = colorMaker;
			activeDomElement.style.backgroundColor = '#ef5777';
			// console.log(activeDomElement);
		} else if(letter === '&') {
			const colorRemover = document.createElement('span');
			activeDomElement.appendChild(colorRemover);
			activeDomElement = colorRemover;
			activeDomElement.style.backgroundColor = '#222';
		}

		if((letter !== '^') && (letter !== '*') && (letter !== '&')) {
			activeDomElement.textContent += letter;
		}

		oldTime = newTime;
		wordIndex++;
	}

	requestAnimationFrame(typing);
}

typing();