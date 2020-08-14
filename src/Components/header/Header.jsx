import React from 'react';
import Navigation from '../navigation/Navigation';

export const Header = () => 
    <div className="App__header">
        <div className="App__title">
            <div className="App__image">
                <img src="https://hhcdn.ru/employer-logo/2880273.png"/>
            </div>              
        </div>  
        <Navigation/>                       
    </div>
    
export default Header;

