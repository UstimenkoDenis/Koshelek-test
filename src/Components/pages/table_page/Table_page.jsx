import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import './Table_page.css';
import App_Core from '../../../App_Core/App_Core';
import WithSDK from '../../../Hocs/withSDK';
import {dataLoaded, dataRequested, dataError} from '../../../App_Core/plugins/store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../spinner';
import Error from '../../error';

class Table_page extends Component {   
    componentDidMount() {    
        
        this.props.dataRequested();  

        const {SDK} = this.props; 
        // console.log(this.props)
        
        SDK.getData()
        .then(res => this.props.dataLoaded(res)) 
        .catch(error => this.props.dataError());        

        // fetch('https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=500')          
        //     .then( (response) => response.json() )
        //     .then ( json => console.log(json) )

    }

    render() {
        
       const { dataItems, loading, error } = this.props;
       const { asks, bids } = dataItems;
      
        if(loading) {
            return <Spinner/>
        }   else {                  
                var bidsAndAsks = [...bids];
               
                    bidsAndAsks.forEach((element, i) => {
                           bidsAndAsks[i] = [...bidsAndAsks[i],...asks[i]]                 
                           console.log(bidsAndAsks[i])              
                });                    
            }

        if(error){
            return (
                <Error/>
            )
        }
       
        return (   
            <>                            
                <div className="table-wrapper">
                    <Table className="table" striped bordered hover>           
                        <thead className="table__header table__header_fixed">
                            <tr>
                                <th>Amount</th>
                                <th>Price</th>
                                <th className="d-none d-lg-table-cell">Total</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th className="d-none d-lg-table-cell">Total</th>
                            </tr>
                        </thead>                
                        <tbody className="table__body">  
                            { bidsAndAsks.map( (item, i) => {
                                return (
                                    <tr key={i}>
                                        <td width="16%">{item[0]}</td>
                                        <td width="16%">{item[1]}</td>
                                        <td className="d-none d-lg-block width='16%'" >{item[0]*item[1]}</td>
                                        <td width="16%">{item[2]}</td>
                                        <td width="16%">{item[3]}</td>
                                        <td className="d-none d-lg-block width='16%'">{item[2]*item[3]}</td>
                                    </tr>)                                       
                            })}                           
                        </tbody>              
                    </Table> 
                </div> 
            </>
        )
    };       
};

const mapStateToProps = (state) => {
    return {
        dataItems: state.data,
        currentSymbol: state.currentSymbol,
        loading: state.loading,
        error: state.error
    }
}
 
const mapDispatchToProps = { 
    dataLoaded,
    dataRequested,
    dataError
};

export default WithSDK()(connect(mapStateToProps, mapDispatchToProps)(Table_page));