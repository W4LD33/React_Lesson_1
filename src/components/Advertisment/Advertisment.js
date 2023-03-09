import './Advertisment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'


function Advertisment() {
    return (
        <div className='Ad'>
            <FontAwesomeIcon icon={ faTag } />
            &nbsp;FREE SHIPPING: Physical textbook orders of $85+. 
            <span className='Ad-grey'>
            &nbsp;Use Code: 
            </span>
            <span className='Ad-blue'>
            &nbsp;CHEGGFREESHIP
            </span>
        </div>
    );
}

export default Advertisment

