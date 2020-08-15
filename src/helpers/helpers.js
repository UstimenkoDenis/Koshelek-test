import React from 'react';

const helpers = () => {
    function calcScroll() {
        let div = React.createElement('div')
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflow = 'scroll'
        div.style.visibility = 'hidden'
                
        let scrollWidth = div.offsetWidth - div.clientWidth
            
        return scrollWidth
    } 
    return calcScroll();   
}
export default helpers;


