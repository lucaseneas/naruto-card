import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';
import { type } from '@testing-library/user-event/dist/type';



export function selectOpponentCard(){
    const selectOpponent = document.getElementById('OpponentCard3Flip');
    selectOpponent.classList.add('AnimationOpponentCard');
}

export function startRound() {
    activeGif();
    activeInativeSelectButton();
    selectOpponentCard();
    setTimeout(getTypeJutsu, 4000);
}

export function activeGif(){
    const gif = document.getElementById('ImgJutsu');
    const gifWord = document.getElementById('PJutsu');

    gifWord.innerHTML = '';
    gif.style.display = 'block';
}

export function getTypeJutsu() {
    const random = Math.floor(Math.random() * 3) + 1;
    const typeJutsu = document.getElementById('ImgJutsu');
    const gifWord = document.getElementById('PJutsu');
    
    var imgJutsu 

    switch (random) {
        case 1:
            imgJutsu = ninjutsu;
            gifWord.innerHTML = 'Ninjutsu';
            break;
        case 2:
            imgJutsu = taijutsu;
            gifWord.innerHTML = 'Taijutsu';
            break;
        case 3:
            imgJutsu = genjutsu;
            gifWord.innerHTML = 'Genjutsu';
            break;
    }
    
    typeJutsu.src = imgJutsu;
}

export function activeInativeSelectButton() {
    const activeBtn = document.getElementById('SelectBtn');
    activeBtn.classList.toggle('ChoiceBtnActive');
}


export function verifyIfActive() {
    const card1 = document.getElementById("MyCard1");
    const card2 = document.getElementById("MyCard2");
    const card3 = document.getElementById("MyCard3");

    if (card1.classList.contains("SelectCard")) {
        card1.classList.toggle('SelectCard');
        card1.classList.toggle('MyCard1Animation');
    }
    if (card2.classList.contains("SelectCard")) {
        card2.classList.toggle('SelectCard');
        card2.classList.toggle('MyCard2Animation');
    }
    if (card3.classList.contains("SelectCard")) {
        card3.classList.toggle('SelectCard');
        card3.classList.toggle('MyCard3Animation');
    }
}

export function selectMyCard(id) {
    verifyIfActive();
    activeInativeSelectButton();

    const selectMy = document.getElementById(id);
    selectMy.classList.toggle('SelectCard');
    selectMy.classList.toggle(id + 'Animation');

}