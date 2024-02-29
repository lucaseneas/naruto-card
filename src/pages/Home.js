import './Home.css';
import kunai from './../images/Kunai.png';
import naruto1 from './../images/Naruto1.png';
import alvoKunai from './../images/AlvoKunai.png';

function App() {
  return (
    <main>
      <container className='Main'>
        <div className='DivLeft'>
          <ul className='MenuOptions'>
            <li><img alt='kunai' src={kunai} /><p>Instrucoes</p></li>
            <li><img alt='kunai' src={kunai} /><p>Cartas</p></li>
            <li><img alt='kunai' src={kunai} /><p>contato</p></li>
          </ul>
        </div>
        <div className='DivCenter'>
          <img src={naruto1}></img>
          <button>Play</button>
        </div>
        <div className='DivRight'>
          <img alt='alvo da kunai' src={alvoKunai}></img>
        </div>
      </container>
    </main>
  );
}

export default App;
