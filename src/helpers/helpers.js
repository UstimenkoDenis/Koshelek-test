const helpers = () => {
    function calcScroll() {
        let div = document.createElement('div')
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflow = 'scroll'
        div.style.visibility = 'hidden'
    
        document.body.appendChild(div)
    
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
    
        return scrollWidth
    } 
    return calcScroll();   
}
export default helpers;


