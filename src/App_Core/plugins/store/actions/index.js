const dataLoaded = (newData) => {
    return {
        type: 'DATA_LOADED',
        payload: newData       
    }
}
const dataRequested = () => {
    return {
        type: 'DATA_REQUESTED',       
    }
}
const dataError = () => {
    return {
        type: 'DATA_ERROR'
    }
}
const setCurrentSymbol = (symbol) => {       
    return {        
        type: 'SET_CURRENT_SYMBOL',
        payload: symbol
    }
}
export {
    dataLoaded,
    dataRequested,
    dataError,
    setCurrentSymbol  
};