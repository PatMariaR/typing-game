const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start'); //<button id="start"/>

let quoteText;
let wordQueue; //new variable assignment. we want a several words to type correctly
let highlightPosition;

function startGame() {
    //quote.innerHTML = `<span>${targetWord}</span>`;
    quoteText = 'type me';
    wordQueue = quoteText.split(' '); // separa as palavras; array of words ['type', 'me'];
    quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join(''); //<span>type</span><span>me</span>
    //.map -> array method
    //make a queue of words

    highlightPosition = 0;
    //quote.childNodes = ['<span>type</span>', '<span>me</span>']
    quote.childNodes[highlightPosition].className = 'highlight';

}

function checkInput(){     // we are reading/manipulating the value;
    const currentWord = wordQueue[0]; //first word in the wordqueue array;
    const typedValue = input.value.trim(); //JS string method -> controla os espaços a +. 
     
    if (currentWord !== typedValue) { //false when the word typed is correct;
        input.className = currentWord.startsWith(typedValue) ? "" : "error";
        
            // if(currentWord.startsWith(typedValue) === true) {
            //     input.className = "";
            // }
            // else {
            //     input.className = "error";
            // }
        
        return;
    }
    wordQueue.shift(); //shift removes first item(0th element)
    input.value = ''; //empty textbox. we are assigning the value

}
start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);
