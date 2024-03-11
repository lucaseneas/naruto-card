import './Cards.css';
import Card from './../../components/Card/Card'
import React, { ReactDOM, useEffect, useState } from 'react';


function Cards() {

    const [ cards , setCards] = useState([])

    useEffect(() => {
        const searchCards = async () => {
            const response = await fetch('data.json')
            const data = await response.json()
            console.log(data)
            setCards(data)
            
        }
        searchCards()
    },[])

    return (

        <div id='DivShowCard'>
            <section>
                {cards.length > 0 ? (
                    cards.map((response) => (
                        <Card name={response.name} ninjutsu={response.ninjutsu} taijutsu={response.taijutsu} genjutsu={response.genjutsu}></Card>
                    )))
                    : 
                    (<p>Carregando cartas...</p>)
                }
            </section>
            
        </div>

    )
}

export default Cards; 