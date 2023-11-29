import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import {useEffect,useState} from 'react'
import {
  SiToyota,
  SiLamborghini,
  SiTesla,
  SiVolkswagen,
  SiFerrari ,
  SiPorsche,
  SiBmw,
  SiMercedes,
  SiRollsroyce,
  SiBentley,
} from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { carBrant } from '../Servise/allApi'

function Home() {
  const navigate=useNavigate()
  const [brant,setBrant]=useState([])
  const carinfomovr=(carBrant)=>{
    navigate(`/carinfo/${carBrant}`)
  }
  const getAllCarBrant=async()=>{
    const Response = await carBrant()

    setBrant(Response.data)
    console.log(Response.data)
  }
  useEffect(()=>{
    getAllCarBrant()
  },[])
  return (
    <div>
      <div id="banner" >
        <h1 data-aos="fade-down" >
          Discover the World on Wheels
          <br /> with our car rental service
        </h1>
      </div>
      {brant.length>0&&
      <div className="my-5">
        <Container>
          <h3 className="text-center">Rend By Brand</h3>
            <div
            style={{
              display: "flex",
              height: "auto",
              gap: "2rem",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
            className="my-4"
          >
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[0])}} >
              <SiToyota />
              <h6>Toyota</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[1])}}>
              <SiLamborghini />
              <h6>Lamborghini</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[2])}} >
              <SiTesla />
              <h6>Tesla</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[3])}} >
              <SiVolkswagen />
              <h6>Volkswagen</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[4])}} >
              <SiFerrari  />
              <h6>Ferrari</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[5])}} >
              <SiPorsche />
              <h6>Porsche</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[6])}}>
              <SiBmw />
              <h6>BMW</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[7])}}>
              <SiMercedes />
              <h6>Mercedes-Benz</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[8])}}>
              <SiRollsroyce />
              <h6>Roll Sroyce</h6>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{carinfomovr(brant[9])}}>
              <SiBentley />
              <h6>Bentley</h6>
            </div>
          </div>
        </Container>
      </div>
      }
      <div className="bg-dark" style={{ height: "auto",padding: '5rem 0' }}>
        <div className="text-center text-light pt-5 pb-2">
          <h1 className='pb-3' data-aos="fade-down" data-aos-duration="1000">Our Services & Benefits</h1>
          <p data-aos="fade-up" data-aos-duration="1100" className="mx-2" style={{ fontSize: "16px" }}>
            To make renting easy and hassle-free, we provide a variety of
            services and advantages.
            <br /> We have you covered with a variety of vehicles and flexible
            rental terms.
          </p>
        </div>
        <div className="py-3">
          <Container>
            <Row>
              <Col lg={4} md={4} sm={4} xs={12} className="text-light">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  className="text-center"
                >
                  <h5 data-aos="fade-up" data-aos-duration="1100">Quality Choice</h5>
                  <p data-aos="fade-up" data-aos-duration="1100" className="mx-2">
                    We offer a wide range of high-quality vehicles to choose
                    from, including luxury cars, SUVs, vans, and more.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={12} className="text-light">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  className="text-center"
                >
                  <h5 data-aos="fade-up" data-aos-duration="1100">Affordable Prices</h5>
                  <p data-aos="fade-up" data-aos-duration="1100" className="mx-2">
                    Our rental rates are highly competitive and affordable,
                    allowing our customers to enjoy their trips without breaking
                    the bank.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={12} className="text-light">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  className="text-center"
                >
                  <h5 data-aos="fade-up" data-aos-duration="1100" >Convenient Online Booking</h5>
                  <p data-aos="fade-up" data-aos-duration="1100" className="mx-2">
                    With our easy-to-use online booking system, customers can
                    quickly and conveniently reserve their rental car from
                    anywhere, anytime.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div style={{ height:"auto",padding:'10rem 0'}} className="bg-light">
          <Container>
            <h2 data-aos="fade-up" data-aos-duration="1100" className='py-3'>What Our Customers Say</h2>
            <p data-aos="fade-up" data-aos-duration="1100">
              “I was really impressed with the level of service I received from
              this car rental company. The process was smooth and easy, and the
              car I rented was in excellent condition. The staff was friendly
              and helpful, and I felt well taken care of throughout my rental
              period. I would definitely recommend this company to anyone
              looking for a premium car rental experience.”
            </p>
          </Container>
        </div>
    </div>
  );
}

export default Home;
