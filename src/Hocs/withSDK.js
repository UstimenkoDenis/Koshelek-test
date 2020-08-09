import React from 'react';
import SDK from '../App_Core/plugins/SDK/SDK';
import SDKContext from '../App_Core/plugins/SDK/SDKContext/SDK-context';


const WithSDK = () => (Wrapped) => { 
    return (props) => {
        return (
            <SDKContext.Consumer>
                { (SDK) => {
                        return <Wrapped {...props} SDK = {SDK}/> }
                }
            </SDKContext.Consumer>
        )
    }
};

export default WithSDK;