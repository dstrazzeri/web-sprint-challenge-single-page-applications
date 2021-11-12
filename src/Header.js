import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
   return(
      <div>
         <h3>Pizza Thyme</h3>
         <Link to='/'>
            <button>Home</button>
         </Link>
         <Link to='/pizza'>
            <button>Pizza</button>
         </Link>
      </div>
   )
}