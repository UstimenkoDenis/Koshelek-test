const initialState = {
   data: [],
   currentSymbol:'BNBBTC',
   loading: true,
   error: false,
 }
 
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
        return {                
                data: action.payload,
                loading: false,
                error: false,
                currentSymbol: state.currentSymbol
            }               
        case 'DATA_REQUESTED' :        
            return {
                data: state.data,
                loading: true,
                error: false,
                currentSymbol: state.currentSymbol
            }
        case 'DATA_ERROR': 
            return {
                ...state,
                error: true
            } 
        case 'SET_CURRENT_SYMBOL':
            // console.log(action.payload)
            return {
                ...state,
                currentSymbol: action.payload
            }
        default:
        return state;
    } 
 }
 export default reducer;