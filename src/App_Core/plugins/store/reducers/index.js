const initialState = {
   data: [],    
   currentSymbol:'BTCUSDT',
   loading: true,
   error: false,
   diff: { bidsDiff: [], asksDiff: [] }   
 }
 
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
        return {                
                data: action.payload,               
                loading: false,
                error: false,
                currentSymbol: state.currentSymbol,
                diff: state.diff
            }               
        case 'DATA_REQUESTED' :        
            return {
                data: state.data,                
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
        case 'ADD_DIFFS_TO_DATA':        
            return {
                ...state,
                data: action.payload
            }    
            
        default:
        return state;
    } 
 }
 export default reducer;