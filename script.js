const wordChoose = document.querySelector('.word');
const timer = document.getElementById('timer');
const wrongCount = document.querySelector('.wrong-count');
const wordMistake = document.querySelector('.word-mistakes');
const correctCount = document.querySelector('.correct-count');


function random() {
    const words = [
        'follow', 'house', 'point', 'mother', 'earth', 'work',
        'cat', 'water', 'learn', 'story', 'girl', 'boy',
        'together', 'walk', 'music', 'plain', 'car', 'river',
        'product', 'fire', 'problem', 'king', 'force', 'wonder',
        'bring', 'cry', 'week', 'quick', 'best', 'person'
    ];
    const randWord = Math.floor(Math.random() * (words.length));
    return words[randWord];
}



let wordNow = random();
spanWord(wordNow);


function spanWord(word) {
    wordChoose.innerHTML = word
      .split("")
      .map((it) => `<span>${it}</span>`)
      .join("");
  }


let i = 0;
document.addEventListener("keypress", (event) => {
    const spans = wordChoose.querySelectorAll("span");
    if (event.key === wordNow[i]) {
      spans[i].className = "c";
      i++;
    } else {
      
      spans[i].className = "w";
      wordMistake.textContent = ++wordMistake.textContent;
      wrongCount.textContent = ++wrongCount.textContent;
      
    }
    
    if (wordNow.length == i) {
      correctCount.textContent = ++correctCount.textContent;
      setTimeout(randomNextWord, 0);
    }
  });
  



function randomNextWord() {
    gameWord();
    wordNow = random();
    spanWord(wordNow);
    i = 0;
    wordMistake.textContent = 0;
}


function gameWord() {
    if (correctCount.textContent >= 5) {
    alert(`Правильных слов ${correctCount.textContent}, Слова с ошибками ${wrongCount.textContent}`);
    clearTimer();
    }
}




let ssec = '00';
let min = '00';
const timerStart = setInterval(() => {
    document.getElementById('timer').innerHTML = `${min}:${ssec}`;

    if (ssec < 59) {
        ssec++;
    } else {
        min++;
        ssec = 0;
    }
    ssec = ssec < 10 ? '0' + ssec : ssec;
}, 1000);

function clearTimer() {
    clearInterval(timerStart);
    timer.textContent = `00:00`;
}