import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className='bg-color'>
            <Container>
                <Row>
                    <Col className="text-center py-3 footer-text-color">Copyright &copy; Fashionphile</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
