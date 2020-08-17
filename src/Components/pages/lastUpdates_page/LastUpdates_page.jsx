import React, { Component } from 'react'
import { Dropdown, ListGroup, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import './LastUpdates_page.css';

import { setCurrentSymbol } from '../../../App_Core/plugins/store/actions'

class LastUpdates_page extends Component {
    constructor(props) {
        super(props)

        this.symbolLabel = props.currentSymbol;
    }
    render() {       
        
        return (  
            <div className="wrapper">
                <Container fluid>
                    <Row className="m-2">
                        <h4>Last updates in {this.symbolLabel}</h4>
                    </Row>
                    
                    <Row className="input">
                        
                        <Col sm={12} md={2} className="last-updates__dropdown mt-3 m-4 ml-3">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select a simbol
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick = {() => this.props.setCurrentSymbol('BTCUSDT')}>BTCUSDT</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => this.props.setCurrentSymbol('BNBBTC')}>BNBBTC</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => this.props.setCurrentSymbol('ETHBTC')}>ETHBTC</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col sm={12} md={4} className="last-updates__list p-3">
                            <ListGroup>
                                <ListGroup.Item>
                                    <h2>Bids</h2>
                                </ListGroup.Item>
                                {   this.props.diff.bidsDiff.map((item, i) => {
                                        return <ListGroup.Item key={i} className="last-updates-item">
                                                    <span>
                                                        <strong>Price:  </strong>{item[0]}
                                                    </span> 
                                                    <span>
                                                        <strong>Amount: </strong>{item[1]}
                                                    </span></ListGroup.Item>
                                })}                     
                            </ListGroup>                          
                        </Col>
                        <Col sm={12} md={4} className="last-updates__list p-3">
                            <ListGroup>
                                <ListGroup.Item>
                                    <h2>Asks</h2>
                                </ListGroup.Item>
                                {   this.props.diff.asksDiff.map((item, i) => {
                                        return  <ListGroup.Item key={i} className="last-updates-item">
                                                    <span>
                                                        <strong>Price:  </strong>{item[0]}
                                                    </span> 
                                                    <span>
                                                        <strong>Amount:  </strong>{item[1]}
                                                    </span></ListGroup.Item>
                                })}                     
                            </ListGroup>
                        </Col> 
                    </Row>                               
                </Container>
            </div>       
                 
        )
    }    
}

const mapStateToProps = (state) => {    
    return {
        dataItems: state.data,
        currentSymbol: state.currentSymbol,
        error: state.error, 
        loading : state.loading,
        diff: state.diff      
    }
}
 
const mapDispatchToProps = { 
    setCurrentSymbol
};

export default connect(mapStateToProps, mapDispatchToProps)(LastUpdates_page);