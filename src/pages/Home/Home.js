import './Home.css';
import kunai from './../../images/Kunai.png';
import naruto1 from './../../images/Naruto1.png';
import alvoKunai from './../../images/AlvoKunai.png';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <main>
      <container className='MainHome'>
        <div className='DivLeftHome'>
          <ul className='MenuOptions'>
            <li><img alt='kunai' src={kunai} /><p>Instrucoes</p></li>
            <li><img alt='kunai' src={kunai} /><p>Cartas</p></li>
            <li><img alt='kunai' src={kunai} /><p>contato</p></li>
          </ul>
        </div>
        <div className='DivCenterHome'>
          <img src={naruto1}></img>
          <Link to='/game'><button>Play</button></Link>
          
        </div>
        <div className='DivRightHome'>
          <img alt='alvo da kunai' src={alvoKunai}></img>
        </div>
      </container>
    </main>
  );
}

export default Home;