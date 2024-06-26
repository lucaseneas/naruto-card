import Card, { changeBackgroud } from "../../components/Card/Card";
import BackButton from "../../components/BackButton/BackButton.js"
import './Game.css';
import { start, selectMyCard, getRandomNumber, getData, myRoundPoint } from './Rules.js';
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
                <button id='MyCard1' onClick={() => selectMyCard("MyCard1")} className='MyCard1 MyCard1Animation BtnMyCard'>
                    <Card name={cardData[card1].name} image={cardData[card1].imageUrl} ninjutsu={cardData[card1].ninjutsu} taijutsu={cardData[card1].taijutsu} genjutsu={cardData[card1].genjutsu}></Card>
                </button>
                <button id='MyCard2' onClick={() => selectMyCard("MyCard2")} className='MyCard2 MyCard2Animation BtnMyCard'>
                    <Card name={cardData[card2].name} image={cardData[card2].imageUrl} ninjutsu={cardData[card2].ninjutsu} taijutsu={cardData[card2].taijutsu} genjutsu={cardData[card2].genjutsu}></Card>
                </button>
                <button id='MyCard3' onClick={() => selectMyCard("MyCard3")} className='MyCard3 MyCard3Animation BtnMyCard'>
                    <Card name={cardData[card3].name} image={cardData[card3].imageUrl} ninjutsu={cardData[card3].ninjutsu} taijutsu={cardData[card3].taijutsu} genjutsu={cardData[card3].genjutsu}></Card>
                </button>
                
                
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
                <div id='OpponentCard3' className="OpponentCard3">
                    <article class="card">
                        <div id='OpponentCard3Flip' class="flip">
                            <section class="front-card">
                                <img src={backgroundCard} alt="Back Card" />
                            </section>
                            <section class="back-card">
                                <Card name={cardData[card3Opponent].name} image={cardData[card3Opponent].imageUrl} ninjutsu={cardData[card3Opponent].ninjutsu} taijutsu={cardData[card3Opponent].taijutsu} genjutsu={cardData[card3Opponent].genjutsu}></Card>
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
                                <Card name={cardData[card2Opponent].name} image={cardData[card2Opponent].imageUrl} ninjutsu={cardData[card2Opponent].ninjutsu} taijutsu={cardData[card2Opponent].taijutsu} genjutsu={cardData[card2Opponent].genjutsu}></Card>
                            </section>
                        </div>
                    </article>
                </div>
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

                
                
            </>
        );
    }

    return (
        <main className="MainGame">
            <BackButton></BackButton>
            <div className="StickMenu" id="StickMenu">
                <div className="DivStickMenu">
                    <img id='ImgWinOrLose' src='./'></img>
                    <h4 id='WinOrLose'>Parabens voce ganhou !!</h4>
                    <a href='./' className="BtnDefault">Voltar</a>
                    <a href='./game' className="BtnDefault">Jogar Novamente</a>
                </div>
            </div>

            <div className="DivLeftGame">
                <div className='DivPointsLeft'>
                    <p>Oponente</p>
                    <p id='OpponentPoint'>0</p>
                </div>
                <img src={backgroundSasuke} alt='sasuke'></img>
            </div>

            <div className="DivCenterGame">
                <div className="DivOpponent">
                    {getOpponentCards()}
                </div>
                <div className="DivMiddleGame">
                    <button id='SelectBtn' onClick={start} className="ChoiceBtn">Escolher</button>
                    <div className="DivJutsuOut">
                        <div id='DivJutsu' className="DivJutsu">
                            <img className="ImgJutsu" id='ImgJutsu' src={selo} alt='type jutsu' />
                            <p id='PJutsu'>Escolha sua carta</p>
                        </div>
                    </div>
                    
                </div>
                <div className='DivMyCards'>
                    {getMyCards()}
                </div>
            </div>

            <div className="DivRightGame">
                <div className='DivPointsRight'>
                    <p>voce</p>
                    <p id='MyPoint'>0</p>
                </div>
                <img src={backgroundNaruto} alt='naruto'></img>
            </div>
        </main >

    )

}



export default Game;

