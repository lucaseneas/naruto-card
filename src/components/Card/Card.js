import './Card.css';
import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';
import itachi from './../../images/ItachiUchiha.png';

export function changeBackgroud() {
    document.getElementById('ImgCard').innerHTML = 'qda';
    console.log('teste');
}

function Card(props) {
    
    return (
        <div>
            <div id='ImgCard' className='NarutoCard'>
                <div className='CardInfo'>
                    <h2 id='CardName' className='CardTitle'>{props.name}</h2>
                    <hr className='Line' />
                    <p id='NinjutsuInfo' className='Info'>Ninjutsu<img src={ninjutsu} alt='ninjutsu' />{props.ninjutsu}</p>
                    <p id='TaijutsuInfo' className='Info'>Taijutsu<img src={taijutsu} alt='taijutsu' /> {props.taijutsu}</p>
                    <p id='GenjutsuInfo' className='Info'>Genjutsu<img src={genjutsu} alt='genjutsu' /> {props.genjutsu}</p>
                </div>
            </div>
            
        </div>
        
    )
   
};

export default Card;