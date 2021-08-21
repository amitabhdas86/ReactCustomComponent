import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div className="ui pointing menu">
                <Link  className="item" to ="/add">
                  Basic Form
                </Link>
                <Link  className="item" to ="/form">
                  React Form
                </Link>
                <Link  className="item" to ="/tab">
                  Content Tab
                </Link>
                <Link  className="item" to ="/carousel">
                   Carousel Type
                </Link>
                <Link  className="item" to ="/tree">
                  Folder Tree
                </Link>                
        </div>

    );
};

export default Header;