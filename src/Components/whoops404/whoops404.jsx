import React from 'react';

const styleWhoops = {
    marginTop: '25%'
}

const Whoops404 = ({ location }) => 
    <div className="whoops-404" style={styleWhoops}>
        <h1> Resourse not found '{location.pathname}'</h1>
    </div>

export default Whoops404;
