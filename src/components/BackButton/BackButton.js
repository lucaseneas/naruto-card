import { Link } from 'react-router-dom';
import './BackButton.css';
import arrow from './../../images/Arrow.svg';
import { cancelTimeouts } from '../../pages/Game/Rules';

function BackButton() {
    return (
        <Link to='../naruto-card'>
            <button onClick={cancelTimeouts} className="BackButton">
                <img className='BackButtonImg' src={arrow}></img>
            </button>
        </Link>

    )
}

export default BackButton;