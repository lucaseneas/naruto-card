import './Cards.css';
import Card from './../../components/Card/Card'

function returnJson(){
    fetch('data.json')
    .then((response) => response.text())
    .then(card => {
        console.log(card.nome)
    })
}


function Cards(){
    returnJson()
    return(
        
        <div id='DivShowCard'><Card></Card></div>
    )
}

export default Cards; 