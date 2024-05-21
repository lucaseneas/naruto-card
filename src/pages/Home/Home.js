import './Home.css';
import Header from './../../components/Header/Header'
import kunai from './../../images/Kunai.png';
import naruto1 from './../../images/Naruto1.png';
import alvoKunai from './../../images/AlvoKunai.png';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <main>
      
      <Header></Header>
      <container className='MainHome'>
        <div className='DivLeftHome'>
          <ul className='MenuOptions'>
            <Link className='NoUnderline'><li><img alt='kunai' src={kunai} /><p>Instrucoes</p></li></Link>
            <Link className='NoUnderline' to='/cards'><li><img alt='kunai' src={kunai} /><p>Cartas</p></li></Link>
            <Link className='NoUnderline' to='https://lucaseneas.github.io/meu-portifolio/'><li><img alt='kunai' src={kunai} /><p>contato</p></li></Link>
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
