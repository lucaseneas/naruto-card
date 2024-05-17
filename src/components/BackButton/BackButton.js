import { Link } from 'react-router-dom';
import './BackButton.css';

function BackButton(){
    return(
        <Link to='../'><button className="BackButton"> Back </button>
        </Link>
        
    )
}

export default BackButton;