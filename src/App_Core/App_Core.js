import lazyComponentLoader from '../Hocs/LazyLoader';

const AsyncStore = lazyComponentLoader(() => import('./plugins/store/Store'));
const AsyncSDK = lazyComponentLoader(() => import('./plugins/SDK/SDK'));

const App_Core = (props) => {
    const ask =  (props.store === true)?  console.log(props) : null 
        // (props.SDK == true)?  console.log(props) : return null 
    return (        
        ask       
    )
}
export default App_Core;