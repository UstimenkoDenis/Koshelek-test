import React, { Component } from 'react'
import { Dropdown, ListGroup, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import './Input_page.css';
import App_Core from '../../../App_Core/App_Core';


class Input_page extends Component {
    render() {
        return (          
            <Container>
                <Row className="input">
                    <Col sm={12} lg={3} className="input__dropdown mt-3 ml-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select a simbol
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href=''>BTCUSDT</Dropdown.Item>
                                <Dropdown.Item href=''>BNBBTC</Dropdown.Item>
                                <Dropdown.Item href=''>ETHBTC</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col sm={12} lg={8} className="input__list p-3">
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup> 
                    </Col> 
                </Row>                               
            </Container>     
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        dataItems: state.data,
        currentSymbol: state.currentSymbol,
        loading: state.loading,
        error: state.error,
    }
}
 
const mapDispatchToProps = { 
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Input_page);