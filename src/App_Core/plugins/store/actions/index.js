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
export {
    dataLoaded,
    dataRequested,
    dataError  
};