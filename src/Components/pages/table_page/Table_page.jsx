import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import './Table_page.css';
import App_Core from '../../../App_Core/App_Core';
import WithSDK from '../../../Hocs/withSDK';
import {dataLoaded, dataRequested, dataError} from '../../../App_Core/plugins/store/actions/index';
import {connect} from 'react-redux';

class Table_page extends Component {   
    componentDidMount() {     
        const {SDK} = this.props; 

        SDK.getData()
            .then(res => this.props.dataLoaded(res)) 
            .catch(error => this.props.dataError());

    }

    render() {
        
        const { dataItems, loading, error } = this.props;
       
        return (   
            <>
                <App_Core store="true" SDK="true"/>
    
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
                            { dataItems.map( (item, i) => {
                                return (
                                    <tr key={i}>
                                        <td width="16%">{item.amount}</td>
                                        <td width="16%">{item.price}</td>
                                        <td className="d-none d-lg-block width='16%'" >{item.amount*item.price}</td>
                                        <td width="16%"></td>
                                        <td width="16%"></td>
                                        <td className="d-none d-lg-block width='16%'"></td>
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