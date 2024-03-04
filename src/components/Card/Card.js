import './Card.css';
import ninjutsu from './../../images/Ninjutsu.png';
import taijutsu from './../../images/Taijutsu.png';
import genjutsu from './../../images/Genjustu.png';
import itachi from './../../images/ItachiUchiha.png';


function Card(props){
    return(
        <div className='NarutoCard'>
            <div className='CardInfo'>
                <h2 className='CardTitle'>Itachi Uchicha</h2>
                <hr className='Line'/>
                <p className='Info'>Ninjutsu<img src={ninjutsu} alt='ninjutsu'/>89</p>
                <p className='Info'>Taijutsu<img src={taijutsu} alt='taijutsu'/> 89</p>
                <p className='Info'>Genjutsu<img src={genjutsu} alt='genjutsu'/> 89</p>
            </div>
        </div>
    )
};

export default Card;