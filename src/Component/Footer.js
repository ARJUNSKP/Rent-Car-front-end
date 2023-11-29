import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {AiOutlineApple} from 'react-icons/ai'
import {GrGooglePlay} from 'react-icons/gr'

function Footer(){
    return(
        <div className='text-light bg-dark' style={{padding:'5rem 0'}}>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <h2 className='pt-5 pb-4'>Download our mobile app ⚡️</h2>
                        <p className='pb-3'>Get exclusive access to car rentals with our mobile app. Download now and experience convenience on the go.</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                        <div>
                            <label className='btn btn-outline-light mx-2'><AiOutlineApple className='px-3 text-light'/>App Store</label>
                            <label className='btn btn-outline-light'><GrGooglePlay className='px-3 text-light'/>Play Store</label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer