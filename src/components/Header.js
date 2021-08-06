import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div className="ui pointing menu">
                <Link  className="item" to ="/add">
                  Form
                </Link>
                <Link  className="item" to ="/tab">
                   Tab
                </Link>
                <Link  className="item" to ="/carousel">
                   Carousel
                </Link>
                <Link  className="item" to ="/add">
                   Add Contact
                </Link>                
        </div>

    );
};

export default Header;