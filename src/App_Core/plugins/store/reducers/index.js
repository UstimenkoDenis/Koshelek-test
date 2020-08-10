const initialState = {
   data: [],
   loading: true,
   error: false,
 }
 
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
        return {                
                data: action.payload,
                loading: false,
                error: false
            }               
        case 'DATA_REQUESTED' :        
            return {
                data: state.data,
                loading: true,
                error: false
            }
        case 'DATA_ERROR': 
            return {
                ...state,
                error: true
            }   
        default:
        return state;
    } 
 }
 export default reducer;