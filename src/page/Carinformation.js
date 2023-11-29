import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Carinformation.css";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { getBrantCars,searchCarsBrant } from "../Servise/allApi.js";
import { Base_url } from '../Servise/baseurl';
import { Row,Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Carinformation() {
  const { carBrant } = useParams();
  const navigate = useNavigate()
  

  const [carData, setCarData] = useState([]);
  const getAllBrantCar = async () => {
    const Response = await getBrantCars(carBrant);
    setCarData(Response.data);
  };
  const searchCatagory =  async (category)=>{
    const Response = await searchCarsBrant(carBrant,category)
    setCarData(Response.data);
  }
  const singleView=(carId)=>{
    navigate(`/singleView/${carId}`)
  }

  useEffect(() => {
    getAllBrantCar();
  }, []);
  return (
    <div>
      <div className="headerContent mt-5">
        <div id="titlebar" className="text-center">
          <h3 data-aos="fade-up" data-aos-duration="1000" >Our Impressive Collection of Cars</h3>
          <div className="discriptionofHead" data-aos="fade-up" data-aos-duration="1100">
            <p>
              Ranging from elegant sedans to powerful sports cars, all carefully
              selected to provide our customers with the ultimate driving
              experience.
            </p>
          </div>
          <button data-aos="fade-up" data-aos-duration="1200" className="btn btnSearch" active onClick={()=>{getAllBrantCar()}}>All Car</button>
          <button data-aos="fade-up" data-aos-duration="1200" className="btn btnSearch" onClick={()=>{searchCatagory("suv")}}>SUV</button>
          <button data-aos="fade-up" data-aos-duration="1200" className="btn btnSearch" onClick={()=>{searchCatagory("sedan")}}>Sedan</button>
          <button data-aos="fade-up" data-aos-duration="1200" className="btn btnSearch" onClick={()=>{searchCatagory("hatchback")}}>HatchBack</button>
        </div>
      </div>
      <div className="container my-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap:'2rem'
          }}
        >
          {carData.length>0?carData.map(item=>(
            <div className="cardetails" data-aos="fade-up" data-aos-duration="1300" data-aos-anchor-placement="top-bottom">
            <div className="imgcontent">
              <div className="carimg">
                <img
                  src={`${Base_url}/carImage/${item.carPreview}`}
                  alt=""
                />
              </div>
            </div>
            <div className="px-4">
              <label className="carname mt-3">{item.carName}</label>
              <h3 className="prizedata">
                {item.dayRent}<span className="day">/day</span>
              </h3>
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label className="speedLabel">
                    <IoSpeedometerOutline />
                  </label>
                  <label>{item.km}</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label className="speedLabel">
                    <GiGearStickPattern />
                  </label>
                  <label>{item.gearSystem}</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label className="speedLabel">
                    <MdOutlinePeopleAlt />
                  </label>
                  <label>{item.seat} Person</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label className="speedLabel">
                    <BsFuelPump />
                  </label>
                  <label>{item.fuelPump}</label>
                </div>
              </div>
              <button className="btn btn-outline-dark w-100 my-4" onClick={()=>singleView(item._id)}>
                Explore The Details
              </button>
            </div>
          </div>

          )):
          <Row>
            <Col id='loding' lg={12} md={12} sm={12} xs={12}>
                <img src='https://i.postimg.cc/0NY6jcVg/Fast-loading.gif' alt=''/>
            </Col>
          </Row>
            
          }
        </div>
      </div>
    </div>
  );
}

export default Carinformation;
