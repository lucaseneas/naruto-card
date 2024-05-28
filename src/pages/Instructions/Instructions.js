
import './Instructions.css'
import BackButtom from './../../components/BackButton/BackButton.js'
import Ninjutsu from './../../images/Ninjutsu.png';
import Taijutsu from './../../images/Taijutsu.png';
import Genjutsu from './../../images/Genjustu.png';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card.js';
import { getData} from './../Game/Rules.js';

function Instructions() {

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        // Carrega os dados dos cards quando o componente é montado
        getData().then(data => {
            setCardData(data);
        });
    }, []);

    function getCard(id){
        if (!cardData) {
            return null;
        }
        return(<Card name={cardData[id].name} image={cardData[id].imageUrl} ninjutsu={cardData[id].ninjutsu} taijutsu={cardData[id].taijutsu} genjutsu={cardData[id].genjutsu}></Card>);
    }

    return (
        <main className='InstructionsMain'>
            <BackButtom></BackButtom>
            <h1>Instrucoes</h1>
            <div className='InstructionsDiv'>
                <h2 className='InstructionsDivH2'>Cartas</h2>
                <p className='InstructionsDivP'>Ao iniciar o jogo voce e seu adversario receberao tres cartas aleatorias. Cada carta contendo 3 atributos:</p>
                <p className='InstructionsDivP'>Ninjutsu <img className='InstructionsDivImg' src={Ninjutsu}/> </p>
                <p className='InstructionsDivP'>Taijutsu <img className='InstructionsDivImg' src={Taijutsu}/> </p>
                <p className='InstructionsDivP'>Genjutsu <img className='InstructionsDivImg' src={Genjutsu}/> </p>
                <p className='InstructionsDivP'>Os atributos serao atribuidos em uma escala de 1 a 10 de acordo com o poder do respectivo personagem baseado no anime.</p>
                <div className='DivCards'>
                    {getCard(1)}
                    {getCard(5)}
                    {getCard(7)}
                </div>
                <h2 className='InstructionsDivH2'>Partida</h2>
                <p className='InstructionsDivP'>A partida sera composta de tres rounds, onde em cada round voce e seu adversario escolherao um carta, apos a escolha, o jogo ira sortear um tipo de Jutsu para ser disputado, a carta que tiver o maior numero de pontos no jutsu escolhido vencera o round.</p>
            </div>
        </main>
    )
}

export default Instructions