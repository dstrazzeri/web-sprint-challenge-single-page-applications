import React from 'react';
import { Link } from 'react-router-dom';
import pizza from './Pizza.jpg'

const Home = (props) => {

    return(
        <div>
            <div>
                <img src={pizza} alt='pizza logo'/>
            </div>
            <p>something about pizza here wow im hungry</p>

            <Link to='/pizza'>
                <button id='order-pizza'> Order Pizza</button>
            </Link>
        </div>
    )
}

export default Home