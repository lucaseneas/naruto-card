import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';
import { type } from '@testing-library/user-event/dist/type';
import Card from "../../components/Card/Card";
import React, { useEffect, useState } from 'react';
import selo from './../../images/Selo.gif';

var myRoundPoint = 0;
var opponentRoundPoint = 0;
var roundCount = 0;
var point

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
        setTimeout(clean,9000,roundCount);
        setTimeout(disableSelectButton,10000,false);
        
        if(roundCount >= 3){
            setTimeout(console.log,9000,'finish');
            setTimeout(activeStickMenu,9000);
            setTimeout(verifyWhoWon,9000); //------------------------------ARRUMAR
            roundCount = 0;
        }
}

function changeStickMenuData(data){ //-------------------------------------ARRUMAR
    const h4 = document.querySelector('#WinOrLose');
    if(data == true){
        h4.innerHTML = "Parabens voce ganhou !";
    }
    else{
        h4.innerHTML = "Voce perdeu, tente novamente";
    }
    

}

function activeStickMenu(){
    const stickMenu = document.querySelector("#StickMenu");
    stickMenu.style.display = 'block';
}
function round(count){
    activeGif();
    selectOpponentCard(count);
    removeSelectButton();
    setTimeout(getTypeJutsu, 4000);
    setTimeout(verifyWhoWonRound, 6000);
    setTimeout(ejectCard, 9000);
}

function clean(count){
    count += 1;
    changeGif("Round "+ count);
    setTimeout(changeGif, 2000,"Selecione sua carta");
}

function disableSelectButton(condition){
    const btn = document.querySelector('#SelectBtn')
    btn.disabled = condition;

    const dsbCard1 = document.querySelector('#MyCard1');
    const dsbCard2 = document.querySelector('#MyCard2');
    const dsbCard3 = document.querySelector('#MyCard3');
    dsbCard1.disabled = condition;
    dsbCard2.disabled = condition;
    dsbCard3.disabled = condition;
}

export function verifyWhoWon(){ //---------------------------------------ARRUMAR
    const myPoint = document.querySelector('#MyPoint');
    const opponentPoint = document.querySelector('#OpponentPoint');
    if(myPoint.innerHTML > opponentPoint.innerHTML){
        changeStickMenuData(true);
    }
}

export function verifyWhoWonRound() {
    const getJutsuChosed = document.querySelector("#PJutsu");
    const getJutsuChosedText = getJutsuChosed.textContent;

    const myCardSelected = document.querySelector(".SelectCard");
    const myJutsuElement = myCardSelected.querySelector("#" + getJutsuChosedText + "Status");
    const myJutsuElementText = parseInt(myJutsuElement.textContent)

    const opponentCardSelected = document.querySelector(".opponentCardSelect");
    const opponentJutsuElement = opponentCardSelected.querySelector("#" + getJutsuChosedText + "Status");
    const opponentJutsuElementText = parseInt(opponentJutsuElement.textContent)

    console.log("meu = " + myJutsuElementText + "Inimigo = " + opponentJutsuElementText);


    if (myJutsuElementText > opponentJutsuElementText) {
        console.log("Você ganhou");
        myRoundPoint = myRoundPoint + 1;
        console.log("Meus Pontos" + myRoundPoint);
        attPoints();
        changeGif("Voce ganhou");
        //myCardSelected.classList.remove("SelectCard");
        //myCardSelected.classList.add("winner-my");
    }
    else if (myJutsuElementText === opponentJutsuElementText) {
        console.log("Empate");
        myRoundPoint = myRoundPoint + 1;
        opponentRoundPoint = opponentRoundPoint + 1;
        console.log("Meus Pontos" + myRoundPoint);
        console.log("Pontos Inimigos" + opponentRoundPoint);
        attPoints();
        changeGif("Empate");
    }
    else if (myJutsuElementText < opponentJutsuElementText) {
        console.log("Você perdeu");
        opponentRoundPoint = opponentRoundPoint + 1;
        console.log("Pontos Inimigos" + opponentRoundPoint);
        attPoints();
        changeGif("Voce perdeu");
    }
}

function attPoints(){
    const myPoint = document.querySelector('#MyPoint');
    const opponentPoint = document.querySelector('#OpponentPoint');
    myPoint.innerHTML = myRoundPoint;
    opponentPoint.innerHTML = opponentRoundPoint;
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