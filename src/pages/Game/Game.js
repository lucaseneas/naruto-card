import Card, { changeBackgroud } from "../../components/Card/Card";
import './Game.css';
import { startRound, selectMyCard, getRandomNumber, getData, myRoundPoint } from './Rules.js';
import { useEffect, useState } from 'react';
import backgroundNaruto from '../../images/BackgroundNaruto.png';
import backgroundSasuke from '../../images/BackgroundSasuke.png';
import backgroundCard from '../../images/BackgroundCard.png';
import selo from '../../images/Selo.gif';





function Game() {
    console.log("Renderizou")

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        // Carrega os dados dos cards quando o componente é montado
        getData().then(data => {
            setCardData(data);
        });
    }, []);


    function getMyCards() {

        if (!cardData) {
            return null;
        }

        const card1 = getRandomNumber(cardData.length)
        const card2 = getRandomNumber(cardData.length)
        const card3 = getRandomNumber(cardData.length)

        return (
            <>
                <div id='MyCard1' onClick={() => selectMyCard("MyCard1")} className='MyCard1 MyCard1Animation'>
                    <Card name={cardData[card1].name} image={cardData[card1].imageUrl} ninjutsu={cardData[card1].ninjutsu} taijutsu={cardData[card1].taijutsu} genjutsu={cardData[card1].genjutsu}></Card>
                </div>
                <div id='MyCard2' onClick={() => selectMyCard("MyCard2")} className='MyCard2 MyCard2Animation'>
                    <Card name={cardData[card2].name} image={cardData[card2].imageUrl} ninjutsu={cardData[card2].ninjutsu} taijutsu={cardData[card2].taijutsu} genjutsu={cardData[card2].genjutsu}></Card>
                </div>
                <div id='MyCard3' onClick={() => selectMyCard("MyCard3")} className='MyCard3 MyCard3Animation'>
                    <Card name={cardData[card3].name} image={cardData[card3].imageUrl} ninjutsu={cardData[card3].ninjutsu} taijutsu={cardData[card3].taijutsu} genjutsu={cardData[card3].genjutsu}></Card>
                </div>
            </>
        );

    }

    function getOpponentCards() {
        if (!cardData) {
            return null;
        }

        const card1Opponent = getRandomNumber(cardData.length)
        const card2Opponent = getRandomNumber(cardData.length)
        const card3Opponent = getRandomNumber(cardData.length)
        return (
            <>
                <div id='OpponentCard1' className='OpponentCard1'>
                    <article class="card">
                        <div id='OpponentCard1Flip' class="flip">
                            <section class="front-card">
                                <img src={backgroundCard} alt="Back Card" />
                            </section>
                            <section class="back-card">
                                <Card name={cardData[card1Opponent].name} image={cardData[card1Opponent].imageUrl} ninjutsu={cardData[card1Opponent].ninjutsu} taijutsu={cardData[card1Opponent].taijutsu} genjutsu={cardData[card1Opponent].genjutsu}></Card>
                            </section>
                        </div>
                    </article>
                </div>

                <div id='OpponentCard2' className='OpponentCard2'>
                    <article class="card">
                        <div id='OpponentCard2Flip' class="flip">
                            <section class="front-card">
                                <img src={backgroundCard} alt="Back Card" />
                            </section>
                            <section class="back-card">
                                <Card name={cardData[card1Opponent].name} image={cardData[card1Opponent].imageUrl} ninjutsu={cardData[card1Opponent].ninjutsu} taijutsu={cardData[card1Opponent].taijutsu} genjutsu={cardData[card1Opponent].genjutsu}></Card>
                            </section>
                        </div>
                    </article>
                </div>
                <div id='OpponentCard3' className="OpponentCard3">
                    <article class="card">
                        <div id='OpponentCard3Flip' class="flip">
                            <section class="front-card">
                                <img src={backgroundCard} alt="Back Card" />
                            </section>
                            <section class="back-card">
                                <Card name={cardData[card1Opponent].name} image={cardData[card1Opponent].imageUrl} ninjutsu={cardData[card1Opponent].ninjutsu} taijutsu={cardData[card1Opponent].taijutsu} genjutsu={cardData[card1Opponent].genjutsu}></Card>
                            </section>
                        </div>
                    </article>
                </div>
            </>
        );
    }

    return (
        <main className="MainGame">
            <div className="DivLeftGame">
                <div>
                    <p>voce</p>
                    <p>{myRoundPoint}</p>
                </div>
                <img src={backgroundSasuke} alt='sasuke'></img>
            </div>
            <div className="DivCenterGame">
                <div className="DivOpponent">
                    {getOpponentCards()}
                </div>
                <div className="DivMiddleGame">
                    <button id='SelectBtn' onClick={startRound} className="ChoiceBtn">Escolher</button>
                    <div id='DivJutsu' className="DivJutsu">
                        <img id='ImgJutsu' src={selo} alt='type jutsu' />
                        <p id='PJutsu'>Escolha sua carta</p>
                    </div>
                </div>

                <div className='DivMyCards'>
                    {getMyCards()}
                </div>

            </div>
            <div className="DivRightGame">
                <div>
                    <p>voce</p>
                    <p>{myRoundPoint}</p>
                </div>
                <img src={backgroundNaruto} alt='naruto'></img>
            </div>

        </main >

    )

}



export default Game;

