import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap';
import './Table_page.css';
import App_Core from '../../../App_Core/App_Core';
import WithSDK from '../../../Hocs/withSDK';
import {dataLoaded, dataRequested, dataError, updateDiff, updateNewData} from '../../../App_Core/plugins/store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../spinner';
import Error from '../../error';

class Table_page extends Component {  
    
    componentDidMount() {    
        
        this.props.dataRequested();  

        const {SDK, currentSymbol} = this.props; 
         
       SDK.getData(`/api/v1/depth?symbol=${currentSymbol}&limit=500`)
        .then(res => this.props.dataLoaded(res)) 
        .catch(error => this.props.dataError());   
        
        const updates = SDK.subscribeToUpdates(`/ws/${currentSymbol.toLowerCase()}@depth`)

        updates.onmessage = (msg) => {
            let data = JSON.parse(msg.data)
            
            if(data.u <= this.props.dataItems.lastUpdateId) {}

           console.log(data)
           console.log('last', this.props.dataItems.lastUpdateId)

           this.props.updateNewData(data)

        }
    }

    method = () => {
        this.wsObj.onmessage = (msg) => {
            let data = JSON.parse(msg.data)
           console.log(data)
        }
    }
   
    render() {
    //  this.method();
       const { dataItems, loading, error } = this.props;
       const { asks, bids } = dataItems;
    //    console.log('newdata', this.props.newData)
        if(loading) {
            return <Spinner/>
        }   else {                  
                var bidsAndAsks = [...bids];
               
                    bidsAndAsks.forEach((element, i) => {
                           bidsAndAsks[i] = [...bidsAndAsks[i],...asks[i]]                                     
                    }); 
                                        
            }

        if(error){
            return (
                <Error/>
            )
        }
       const styleTD = {
            width: 10
       }
        return (                                        
                <Container>
                    <Table className="table" striped bordered hover>           
                        <thead className="table__header">
                            <tr>
                                <th>Amount</th>
                                <th>Price</th>
                                <th className="d-none d-lg-block">Total</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th className="d-none d-lg-block">Total</th>
                            </tr>
                        </thead>                          
                        <tbody className="table__body" onMouseOver = {() =>{
                            const td = document.querySelectorAll('td')
                            td.forEach((item) => {
                                item.style={styleTD}
                            })
                            
                        } }>  
                            { bidsAndAsks.map( (item, i) => {
                                return (
                                    <tr key={i}>
                                        <td width="16%">{item[1]}</td>
                                        <td width="16%">{item[0]}</td>
                                        <td className="d-none d-lg-block" >{item[0]*item[1]}</td>
                                        <td width="16%">{item[3]}</td>
                                        <td width="16%">{item[2]}</td>
                                        <td className="d-none d-lg-block">{item[2]*item[3]}</td> 
                                                  
                                    </tr>)                              
                            })}                           
                        </tbody>                             
                    </Table> 
                </Container> 
        
        )
    };       
};

const mapStateToProps = (state) => {
    console.log('current table state', state)
    return {
        dataItems: state.data,
        currentSymbol: state.currentSymbol,
        loading: state.loading,
        error: state.error,
        diff: state.diff,
        newData: state.newData
    }
}
 
const mapDispatchToProps = { 
    dataLoaded,
    dataRequested,
    dataError,
    updateDiff,
    updateNewData
};

export default WithSDK()(connect(mapStateToProps, mapDispatchToProps)(Table_page));