import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';

import ImgWin from './../../images/ImgWin.png';
import ImgDraw from './../../images/ImgDraw.png';
import ImgLose from './../../images/ImgLose.png';

import { type } from '@testing-library/user-event/dist/type';
import Card from "../../components/Card/Card";
import React, { useEffect, useState } from 'react';
import selo from './../../images/Selo.gif';

var myRoundPoint = 0;
var opponentRoundPoint = 0;
var roundCount = 0;
var timeouts = [];

//Cria um numero aleatorio
export function getRandomNumber(res) {
    return Math.floor(Math.random() * res);
}

//Carrega os JSON
export async function getData() {
    const response = await fetch('data.json');
    const fetchedData = await response.json();
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

//Limpa e cancela todos os dados e funções quando clica em retornar
window.addEventListener('popstate', function(event) {
    
    cancelTimeouts();
});

function createTimeOut(functions,time,data){
    var timeoutId = setTimeout(functions,time,data);
    timeouts.push(timeoutId);
}

export function cancelTimeouts() {
    timeouts.forEach(function(timeoutId) {
        clearTimeout(timeoutId); // Cancelar o timeout
    });
    
    myRoundPoint = 0;
    opponentRoundPoint = 0;
    roundCount = 0
    // Limpar o array depois de cancelar todos os timeouts
    timeouts = [];
}


//Função principal do botão "Escolher"
export function start(){
        roundCount += 1;
        disableSelectButton(true); //Desabilita o botão
        round(roundCount); //Inicia o round

        createTimeOut(clean,9000,roundCount);//Deixa as escritas do proximo round pronto
        createTimeOut(disableSelectButton,11000,false);//Habilita o botão
       
        if(roundCount >= 3){
            createTimeOut(activeStickMenu,9000);
            createTimeOut(verifyWhoWon,9000);
            roundCount = 0;
        }

}

function changeStickMenuData(data){ 
    const h4 = document.querySelector('#WinOrLose');
    const img = document.querySelector('#ImgWinOrLose');
    if(data == 0){
        h4.innerHTML = "Parabens voce ganhou !";
        img.src = ImgWin;
    }
    else if(data == 1){
        h4.innerHTML = "Empate";
        img.src = ImgDraw;
    }
    else if(data == 3){
        h4.innerHTML = "Voce perdeu, tente novamente";
        img.src = ImgLose;
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
    
    createTimeOut(getTypeJutsu,4000);
    createTimeOut(verifyWhoWonRound,6000);
    createTimeOut(ejectCard,9000);
}

function clean(count){
    count += 1;
    changeGif("Round "+ count);
    createTimeOut(changeGif,2000,"Selecione sua carta");
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

export function verifyWhoWon(){ 
    const myPoint = document.querySelector('#MyPoint');
    const opponentPoint = document.querySelector('#OpponentPoint');
    console.log(myPoint.innerHTML)
    if(myPoint.innerHTML > opponentPoint.innerHTML){
        changeStickMenuData(0);
    }
    else if(myPoint.innerHTML == opponentPoint.innerHTML){
        changeStickMenuData(1);
    }
    else if(myPoint.innerHTML < opponentPoint.innerHTML){
        changeStickMenuData(3);
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