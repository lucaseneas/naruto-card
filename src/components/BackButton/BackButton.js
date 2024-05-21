import { Link } from 'react-router-dom';
import './BackButton.css';
import arrow from './../../images/Arrow.svg';

function BackButton() {
    return (
        <Link to='../'>
            <button className="BackButton">
                <img className='BackButtonImg' src={arrow}></img>
            </button>
        </Link>

    )
}

export default BackButton;