import Card, { changeBackgroud } from "../../components/Card/Card";
import './Game.css';
import { startRound, selectMyCard, getCard } from './Rules.js';
import { useEffect, useState } from 'react';
import backgroundNaruto from '../../images/BackgroundNaruto.png';
import backgroundSasuke from '../../images/BackgroundSasuke.png';
import backgroundCard from '../../images/BackgroundCard.png';
import selo from '../../images/Selo.gif';





function Game() {
    

    return (
        <main className="MainGame">
            <div className="DivLeftGame">
                <img src={backgroundSasuke} alt='sasuke'></img>
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
                                    <Card name='Itachi Uchiha' ninjutsu='7' taijutsu ='6' genjutsu='8'></Card>
                                </section>

                            </div>
                        </article>
                    </div>

                </div>
                <div className="DivMiddleGame">
                    <button id='SelectBtn' onClick={startRound} className="ChoiceBtn">Escolher</button>
                    <div id='DivJutsu' className="DivJutsu">
                        <img id='ImgJutsu'src={selo} alt='type jutsu'/>
                        <p id='PJutsu'>Escolha sua carta</p>
                    </div>
                </div>
                {getCard()}
                <div className='DivMyCards'>
                    
                    <div onClick={() => selectMyCard("MyCard1")} id='MyCard1' className='MyCard1 MyCard1Animation'><Card name='Kisame Hosigaki' imgBackground={backgroundSasuke} ninjutsu='8' taijutsu ='6' genjutsu='2'></Card></div>
                    <div onClick={() => selectMyCard("MyCard2")} id='MyCard2' className='MyCard2 MyCard2Animation'><Card name='Naruto Uzumaki' ninjutsu='8' taijutsu ='7' genjutsu='3'></Card></div>
                    <div onClick={() => selectMyCard("MyCard3")} id='MyCard3' className='MyCard3 MyCard3Animation'><Card name='Neji Hiuga' ninjutsu='5' taijutsu ='7' genjutsu='3'></Card></div>
                </div>
                
            </div>
            <div className="DivRightGame">
                <img src={backgroundNaruto} alt='naruto'></img>
            </div>

        </main >

    )

}



export default Game;

