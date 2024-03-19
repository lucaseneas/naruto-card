import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';
import { type } from '@testing-library/user-event/dist/type';
import Card from "../../components/Card/Card";
import React, { useEffect, useState } from 'react';
import selo from './../../images/Selo.gif';

export var myRoundPoint = 0;
const opponentRoundPoint = 0;
var roundCount = 0;

export function getRandomNumber(res) {
    return Math.floor(Math.random() * res);
}

export async function getData() {
    const response = await fetch('data.json');
    const fetchedData = await response.json();
    // Aqui você pode usar fetchedData console.log(fetchedData);
    return fetchedData;
}
export function selectOpponentCard(count) {
    const selectOpponentMove = document.getElementById('OpponentCard'+count);
    selectOpponentMove.classList.add('opponentCardSelect');
    selectOpponentMove.classList.add('moveOpponentCard');
    const selectOpponent = document.getElementById('OpponentCard'+count+'Flip');
    selectOpponent.classList.add('AnimationOpponentCard');
    
    console.log(count)
}

/*export function selectOpponentCardTest(){
    const selectOpponent = document.getElementById('OpponentCard2');
    selectOpponent.classList.add('moveOpponentCard');

    const selectOpponent2 = document.getElementById('OpponentCard2Flip');
    selectOpponent2.classList.add('AnimationOpponentCard');
}
*/

function ejectCard(){
    const opponentCard = document.querySelector(".opponentCardSelect");
    opponentCard.classList.remove('opponentCardSelect')
    opponentCard.classList.add('ejectCard')

    const myCard = document.querySelector(".SelectCard");
    myCard.classList.remove('SelectCard')
    myCard.classList.add('ejectCard')
}

export function start(){
    roundCount += 1;
    disableSelectButton(true);
    round(roundCount);
    setTimeout(clean,8000,roundCount);
    setTimeout(disableSelectButton,10000,false);
   

}

function round(count){
    activeGif();
    selectOpponentCard(count);
    removeSelectButton();
    setTimeout(getTypeJutsu, 4000);
    setTimeout(verifyWhoWon, 5000);
    setTimeout(ejectCard, 5500);
}

function clean(count){
    count += 1;
    changeGif("Round "+ count);
    setTimeout(changeGif, 2000,"Selecione sua carta");
}

function disableSelectButton(condition){
    const btn = document.querySelector('#SelectBtn')
    btn.disabled = condition;
}



export function verifyWhoWon() {
    const getJutsuChosed = document.querySelector("#PJutsu");
    const getJutsuChosedText = getJutsuChosed.textContent;

    const myCardSelected = document.querySelector(".SelectCard");
    const myJutsuElement = myCardSelected.querySelector("#" + getJutsuChosedText + "Status");
    const myJutsuElementText = parseInt(myJutsuElement.textContent)


    const opponentCardSelected = document.querySelector("#OpponentCard3");
    const opponentJutsuElement = opponentCardSelected.querySelector("#" + getJutsuChosedText + "Status");
    const opponentJutsuElementText = parseInt(opponentJutsuElement.textContent)

    console.log("meu = " + myJutsuElementText + "Inimigo = " + opponentJutsuElementText);

    if (myJutsuElementText > opponentJutsuElementText) {
        console.log("Você ganhou");
        myRoundPoint = myRoundPoint + 1;
        console.log(myRoundPoint);

        //myCardSelected.classList.remove("SelectCard");
        //myCardSelected.classList.add("winner-my");
    }
    else if (myJutsuElementText == opponentJutsuElementText) {
        console.log("Empate");
    }
    else if (myJutsuElementText < opponentJutsuElementText) {
        console.log("Você perdeu");

    }



}

export function activeGif() {
    const gif = document.getElementById('ImgJutsu');
    const gifWord = document.getElementById('PJutsu');

    gifWord.innerHTML = '';
    gif.src = selo;
    gif.style.display = 'block';
}

export function changeGif(name){
    const gif = document.getElementById('ImgJutsu');
    const gifWord = document.getElementById('PJutsu');

    gifWord.innerHTML = name;
    gif.style.display = 'none';
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

export function removeSelectButton() {
    const activeBtn = document.getElementById('SelectBtn');
    activeBtn.classList.remove('ChoiceBtnActive');
}
export function activeSelectButton() {
    const activeBtn = document.getElementById('SelectBtn');
    activeBtn.classList.add('ChoiceBtnActive');
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
    activeSelectButton();

    const selectMy = document.getElementById(id);
    selectMy.classList.toggle('SelectCard');
    selectMy.classList.toggle(id + 'Animation');

}