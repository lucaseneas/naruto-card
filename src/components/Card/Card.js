import './Card.css';
import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';



import itachi from './../../images/characters/ItachiUchiha.png';
import kakashi from './../../images/characters/KakashiHatake.png';
import madara from './../../images/characters/MadaraUchiha.png';
import naruto from './../../images/characters/NarutoUzumaki.png';
import sasuke from './../../images/characters/SasukeUchiha.png';

function verifyName(name) {
    switch (name) {
        case 'Sasuke Uchiha':
            return sasuke
        case 'Itachi Uchiha':
            return itachi
        case 'Naruto Uzumaki':
            return naruto
    }
}

export function changeBackgroud(imgBackground, index) {
    console.log('Antees' + imgBackground);
    var const2 = document.getElementsByClassName('NarutoCard');


    const2[index].style.backgroundImage = "url('" + verifyName(imgBackground) + "')";

    console.log(itachi);
}


function Card(props) {

    return (
        <div id='TestCard'>
            <div className='NarutoCard'>
                <div className='ImgCardDiv'>
                    <img className='ImgCard' src={props.image}></img>
                </div>
                <div className='CardInfo'>
                    <h2 id='CardName' className='CardTitle'>{props.name}</h2>
                    <p id='NinjutsuInfo' className='Info'>Ninjutsu<img src={ninjutsu} alt='ninjutsu' /><p id='NinjutsuStatus'>{props.ninjutsu}</p></p>
                    <p id='TaijutsuInfo' className='Info'>Taijutsu<img src={taijutsu} alt='taijutsu' /><p id='TaijutsuStatus'>{props.taijutsu}</p> </p>
                    <p id='GenjutsuInfo' className='Info'>Genjutsu<img src={genjutsu} alt='genjutsu' /><p id='GenjutsuStatus'>{props.genjutsu}</p> </p>

                </div>
            </div>
        </div>

    )

};



export default Card;