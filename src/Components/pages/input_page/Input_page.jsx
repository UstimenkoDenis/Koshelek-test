import React, { Component } from 'react'
import { Dropdown, ListGroup, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import './Input_page.css';

import { setCurrentSymbol } from '../../../App_Core/plugins/store/actions'

class Input_page extends Component {
    render() {       
        console.log('input currentSymbol',this.props.currentSymbol) 
        return (          
            <Container>
                <Row className="input">
                    <Col xs={12} lg={3} className="input__dropdown mt-3 ml-3">
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
                    <Col xs={12} lg={8} className="input__list p-3">
                        <ListGroup>
                            {   this.props.diff.bids.map((item, i) => {
                                    return <ListGroup.Item key={i}>{`${this.props.currentSymbol} ${item[0]} ${item[1]}`}</ListGroup.Item>
                            })}                     
                        </ListGroup> 
                    </Col> 
                </Row>                               
            </Container>     
        )
    }    
}

const mapStateToProps = (state) => {
    console.log('current input state', state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Input_page);