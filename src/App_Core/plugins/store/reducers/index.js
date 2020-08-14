const initialState = {
   data: [],
   newData: [1,2], 
   currentSymbol:'BTCUSDT',
   loading: true,
   error: false,
   diff: 0   
 }
 
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
        return {                
                data: action.payload,
                newData: state.newData,
                loading: false,
                error: false,
                currentSymbol: state.currentSymbol,
                diff: state.diff
            }               
        case 'DATA_REQUESTED' :        
            return {
                data: state.data,
                newData: state.newData,
                loading: true,
                error: false,
                currentSymbol: state.currentSymbol,
                diff: state.diff
            }
        case 'DATA_ERROR': 
            return {
                ...state,
                error: true
            } 
        case 'SET_CURRENT_SYMBOL':
            
            return {
                ...state,
                currentSymbol: action.payload
            }
        case 'UPDATE_DIFF':        
            return {
                ...state,
                diff: action.payload
            }
        case 'UPDATE_NEWDATA':        
            return {
                ...state,
                newData: action.payload
            }
        default:
        return state;
    } 
 }
 export default reducer;