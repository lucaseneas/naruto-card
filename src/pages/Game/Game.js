import Card from "../../components/Card/Card";
import './Game.css';
import {teste} from'./Rules.js';

import backgroundNaruto from '../../images/BackgroundNaruto.png';
import backgroundSasuke from '../../images/BackgroundSasuke.png';
import backgroundCard from '../../images/BackgroundCard.png';


function startRound() {
    selectOpponentCard();
    getTypeJutsu();

}

function getTypeJutsu() {
    const random = Math.floor(Math.random() * 3) + 1;
    const typeJutsu = document.getElementById('DivJutsu');
    var imgJutsu 
    switch (random) {
        case 1:
            imgJutsu = "Genjutsu";
            break;
        case 2:
            imgJutsu = "Ninjutsu";
            break;
        case 3:
            imgJutsu = "Taijutsu";
            break;

    }
    typeJutsu.innerHTML = imgJutsu;
}

function activeSelectButton() {
    const activeBtn = document.getElementById('SelectBtn');
    activeBtn.classList.add('ChoiceBtnActive');
}


function verifyIfActive() {
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

function selectMyCard(id) {
    verifyIfActive();
    activeSelectButton();

    const selectMy = document.getElementById(id);
    selectMy.classList.toggle('SelectCard');
    selectMy.classList.toggle(id + 'Animation');

}
function selectOpponentCard() {
    const selectOpponent = document.getElementById('OpponentCard3Flip');
    selectOpponent.classList.add('AnimationOpponentCard');
}

function Game() {
    return (
        <main className="MainGame">
            <div className="DivLeftGame">
                <img src={backgroundSasuke} alt='sasuke image'></img>
            </div>
            <div className="DivCenterGame">
                <div className="DivOpponent">

                    <div className='OpponentCard1'></div>
                    <div className='OpponentCard2'></div>
                    <div id='OpponentCard3' className="OpponentCard3">
                        <article class="card">
                            <div id='OpponentCard3Flip' class="flip">
                                <section class="front-card">
                                    <img src={backgroundCard} alt="Back Card" />
                                </section>

                                <section class="back-card">
                                    <Card></Card>
                                </section>

                            </div>
                        </article>
                    </div>

                </div>
                <div className="DivMiddleGame">
                    <button id='SelectBtn' onClick={startRound} className="ChoiceBtn">Escolher</button>
                    <div id='DivJutsu' className="DivJutsu"><button onClick={teste}>gfdgfdgfd</button></div>
                </div>
                <div className='DivMyCards'>
                    <div onClick={() => selectMyCard("MyCard1")} id='MyCard1' className='MyCard1 MyCard1Animation'><Card></Card></div>
                    <div onClick={() => selectMyCard("MyCard2")} id='MyCard2' className='MyCard2 MyCard2Animation'><Card></Card></div>
                    <div onClick={() => selectMyCard("MyCard3")} id='MyCard3' className='MyCard3 MyCard3Animation'><Card></Card></div>
                </div>

            </div>
            <div className="DivRightGame">
                <img src={backgroundNaruto} alt='naruto image'></img>
            </div>

        </main>

    )
}
export default Game;