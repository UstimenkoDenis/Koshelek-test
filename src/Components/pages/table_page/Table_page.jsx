import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap';
import './Table_page.css';

import WithSDK from '../../../Hocs/withSDK';
import {snapshotLoaded, snapshotRequested, snapshotError, updateDiff, addDiffsToData} from '../../../App_Core/plugins/store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../spinner';
import Error from '../../error';

class Table_page extends Component {  
    constructor(props) {
        super(props)       
   
        this.state = {           
            tableHeight: document.documentElement.clientHeight - 10,
            tableBodyHeight: '95%',
            tableThWidth: 200,
            tableTdWidth: 200,
            tableFiveTdWidth: 200,
            tableSixTdWidth: 200,
            mobile: false
        }
    }
     
    componentDidMount() {    
        
        this.props.snapshotRequested();  

        const {SDK, currentSymbol} = this.props;         

        const updates = SDK.subscribeToUpdates(`/ws/${currentSymbol.toLowerCase()}@depth`)

        SDK.getSnapshot(`/api/v1/depth?symbol=${currentSymbol}&limit=500`)
            .then(res => this.props.snapshotLoaded(res))             
            .catch(error => this.props.snapshotError()); 
           
        updates.onmessage = (msg) => {
            let data = JSON.parse(msg.data)  
            let filterDataAsks = data.a.filter(item => item[1] != 0)  
            let filterDataBids = data.b.filter(item => item[1] != 0)  

            let {dataItems} = this.props;
            let {bids, asks} = dataItems;           

            this.props.updateDiff({
                bidsDiff: filterDataBids,
                asksDiff: filterDataAsks           
            })     
            console.log('old  ', dataItems)
            
            const newBids = [...filterDataBids, ...bids];
            const newAsks = [...filterDataAsks, ...asks];
            const newDataItems = {bids: newBids, asks: newAsks}
            
            

            this.props.addDiffsToData(newDataItems);
            console.log('new',newDataItems)
            // console.log(this.props.diff)
        }
    } 

    componentWillReceiveProps(newProps) {
        if(newProps !== this.props) {
            // console.log('new Props currentSymbol', newProps.currentSymbol)
            // console.log('old props', this.props.currentSymbol)
            // this.props.SDK.updates.close(1000,'the work is done');
        }
    }

    render() {
    
       const { dataItems, loading, error} = this.props;
       const { asks, bids } = dataItems;
      
    
        if(loading) {
            return <Spinner/>
        }   else {                  
                var bidsAndAsks = [...bids];
               
                    bidsAndAsks.forEach((element, i) => {
                        if(asks[i] && bids[i])
                           bidsAndAsks[i] = [...bidsAndAsks[i],...asks[i]]                                     
                    });                         
            }

        if(error){
            return (
                <Error/>
            )
        }
       const { mobile, tableThWidth, tableTdWidth, tableFiveTdWidth, tableSixTdWidth, tableHeight, tableBodyHeight} = this.state
        return (                                        
                <>
                    <div>{this.props.currentSymbol}</div>
                    <Table height={tableHeight} className="table" striped bordered hover>           
                        <thead className="table__header">
                            <tr>
                                <th width={tableThWidth}>Amount</th>
                                <th width={tableThWidth}>Price</th>
                                <th  width={tableThWidth} className="d-none d-lg-block">Total</th>
                                <th width={tableThWidth}>Amount</th>
                                <th width={tableThWidth}>Price</th>
                                <th width={tableThWidth} className="d-none d-lg-block">Total</th>
                            </tr>
                        </thead>                          
                        <tbody height={tableBodyHeight} className="table__body" onMouseOver = {() =>{
                                   if(mobile) {
                                        this.setState({                                       
                                            tableFiveTdWidth: 100,
                                            tableSixTdWidth: 200,
                                        })  
                                   } else {
                                        this.setState({                                       
                                            tableFiveTdWidth: 200,
                                            tableSixTdWidth: 100,
                                        })
                                   }
                                                     
                        } }>  
                            {  
                                bidsAndAsks.map( (item, i) => {                                    
                                    return (
                                        <tr key={i}>
                                            <td width={tableTdWidth}>{item[1]}</td>
                                            <td width={tableTdWidth}>{item[0]}</td>
                                            <td width={tableTdWidth} className="d-none d-lg-block" >{item[0]*item[1]}</td>
                                            <td width={tableTdWidth}>{item[3]}</td>
                                            <td width={tableFiveTdWidth}>{item[2]}</td>
                                            <td width={tableSixTdWidth} className="d-none d-lg-block">{item[2]*item[3]}</td> 
                                                    
                                        </tr>)                            
                                }) }                                                                          
                        </tbody>                             
                    </Table> 
                </> 
        
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
        diff: state.diff       
    }
}
 
const mapDispatchToProps = { 
    snapshotLoaded,
    snapshotRequested,
    snapshotError,
    updateDiff,
    addDiffsToData  
};

export default WithSDK()(connect(mapStateToProps, mapDispatchToProps)(Table_page));