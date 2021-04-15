import React from 'react';
import Emoji from './assets/sadEmoji.png'
import {Link} from 'react-router-dom'
const Bag = () => {
    return ( 
        <div className="container text-center ">
            <img src={Emoji} className="m-5"/>
            <p className="text-center"><b>It's empty here</b><br/></p>
            <p>Start shopping to add items to your bag</p>
            
            <Link to="/" className="btn applyBtn mt-3 pl-5 pr-5">Back to Homepage</Link>
        </div>
     );
}
 
export default Bag;