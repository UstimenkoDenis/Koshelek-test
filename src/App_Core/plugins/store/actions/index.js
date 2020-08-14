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
const updateDiff = (diff) => {       
    return {        
        type: 'UPDATE_DIFF',
        payload: diff
    }
}
const updateNewData = (newData) => {       
    return {        
        type: 'UPDATE_NEWDATA',
        payload: newData
    }
}
export {
    dataLoaded,
    dataRequested,
    dataError,
    setCurrentSymbol,
    updateDiff,
    updateNewData  
};