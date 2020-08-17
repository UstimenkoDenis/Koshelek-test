import React from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';

export const Header = () => 
    <div className="app__header">
        <div className="app__title">
            <div className="app__image">
                <img src="https://hhcdn.ru/employer-logo/2880273.png"/>
            </div>              
        </div>  
        <Navigation/>                       
    </div>
    
export default Header;

