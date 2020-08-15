const snapshotLoaded = (newData) => {
    return {
        type: 'DATA_LOADED',
        payload: newData       
    }
}
const snapshotRequested = () => {
    return {
        type: 'DATA_REQUESTED',       
    }
}
const snapshotError = () => {
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

export {
    snapshotLoaded,
    snapshotRequested,
    snapshotError,
    setCurrentSymbol,
    updateDiff  
};