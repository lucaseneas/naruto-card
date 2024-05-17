import './Cards.css';
import Card from './../../components/Card/Card'
import React, { ReactDOM, useEffect, useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';


function Cards() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const searchCards = async () => {
            const response = await fetch('data.json')
            const data = await response.json()
            console.log(data)
            setCards(data)

        }
        searchCards()
    }, [])


    

    return (
        <main className='PageCardsMain'>
            <BackButton></BackButton>
            <h1>Cartas</h1>
            <div className='DivShowCard'>
                {console.log("teste")}
                {cards.length > 0 ? (
                    cards.map((response) => (
                        <div className='DivInternalShowCard'>
                            <Card name={response.name} ninjutsu={response.ninjutsu} taijutsu={response.taijutsu} genjutsu={response.genjutsu} image={response.imageUrl}></Card>
                        </div>
                    )))
                    :
                    (<p>Carregando cartas...</p>)
                }
            </div>
        </main>


    )
}

export default Cards; 