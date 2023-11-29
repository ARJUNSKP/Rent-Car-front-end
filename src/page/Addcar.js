import React,{useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {carAddApi} from '../Servise/allApi'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcar() {
    const navigation=useNavigate()

    const [carname,setCarname]=useState(false)
    const [cBrant,setCBrant]=useState(false)
    const [cCategory,setCategory]=useState(false)
    const [cRent,setCRent]=useState(false)
    const [cKm,setKm]=useState(false)
    const [cGearSystem,setGearSystem]=useState(false)
    const [cSeat,setSeat]=useState(false)
    const [cfuelPump,setFuelPump]=useState(false)
    const [img1,setImg1]=useState(false)
    const [imgprivew,setImgprivew]=useState('')

    const [input,setInput]=useState({
        carBrant:'',
        category:'',
        carName:'',
        dayRent:'',
        km:'',
        gearSystem:'',
        seat:'',
        fuelPump:'',
    })
    const [image,setImage]=useState({
        carPreview:''
    })

    const imagesset=(e)=>{
        const {name}=e.target
        const profile=e.target.files[0]
        if(name=="carPreview"){
            setImage({...image,[name]:profile})
        }
    }

    const inputDataChange=(e)=>{
        const {value,name}=e.target
        
        if(name=="carBrant" || name=="category" || name=="carName" || name=="dayRent" || name=="km" || name=="gearSystem" || name=="seat" || name=="fuelPump"){
            setInput({...input,[name]:value})
        }
    }

    const addCarData=async()=>{
        const {carBrant,category,carName,dayRent,km,gearSystem,seat,fuelPump}=input
        const {carPreview,car}=image
        if(carBrant==""){
            setCBrant(true)
        }else{
            setCBrant(false)
        }
        if(category==""){
            setCategory(true)
        }else{
            setCategory(false)
        }
        if(carName==""){
            setCarname(true)
        }else{
            setCarname(false)
        }
        if(dayRent==""){
            setCRent(true)
        }else{
            setCRent(false)
        }
        if(km==""){
            setKm(true)
        }else{
            setKm(false)
        }
        if(gearSystem==""){
            setGearSystem(true)
        }else{
            setGearSystem(false)
        }
        if(seat==""){
            setSeat(true)
        }else{
            setSeat(false)
        } if(fuelPump==""){
            setFuelPump(true)
        }else{
            setFuelPump(false)
        } if(carPreview==""){
            setImg1(true)
        }else{
            setImg1(false)
        }
        if(carBrant  && category && carName && dayRent && km && gearSystem && seat && fuelPump && carPreview ){
            const headerConfig={
                "Content-Type":"multipart/form-data"
            }
            

            const data=new FormData()

            data.append("carBrant",carBrant)
            data.append("category",category)
            data.append("carName",carName)
            data.append("dayRent",dayRent)
            data.append("km",km)
            data.append("gearSystem",gearSystem)
            data.append("seat",seat)
            data.append("fuelPump",fuelPump)
            data.append("car-profile",carPreview)

            const Response = await carAddApi(data,headerConfig)
            if(Response.status>=200 && Response.status<300){
                toast.success(`${Response.data}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                navigation('/')
                setInput(
                    {...input,
                        carBrant:"",
                        category:'',
                        carName:'',
                        dayRent:'',
                        km:'',
                        gearSystem:'',
                        seat:'',
                        fuelPump:''
                    }
                )
                setImage({...Image,
                    carPreview:''
                })
                
            }else{
                toast.warn(`${Response.response.data}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }

        }
    }
    useEffect(()=>{
        if(localStorage.getItem('aid')){
        }else{
            navigation('/')
        }
    },[])

    useEffect(()=>{
        if(image.carPreview){
            setImgprivew(URL.createObjectURL(image.carPreview))
        }
    },[image.carPreview])
    console.log(imgprivew)
  return (
    <div>
        <div style={{height:'auto'}} className='py-5'>
            <Container>
                <div className='mt-3' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img data-aos="fade-down-left" data-aos-duration="600" src={imgprivew?imgprivew:'https://i.postimg.cc/3RpJTdJX/pngwing-com-11.png'} alt='...' width='280px' height='250px'/>
                </div>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12} style={{display:'flex',flexDirection:'column'}}>
                        <label for="car-select">Choose Car Brant:</label>
                        <select onChange={(e)=>{inputDataChange(e)}} name="carBrant" id="car-select">
                            <option value="">--Please choose an option--</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Porsche">Porsche</option>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Roll Sroyce">Roll Sroyce</option>
                            <option value="Bentley">Bentley</option>
                        </select>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cBrant&&
                                <label>Car Brant Required</label>
                            }
                        </p>
                        <label htmlFor='cnameid'>CarName</label>
                        <input type='text' onChange={(e)=>{inputDataChange(e)}} placeholder='Car name' id='cnameid' name='carName'/>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {carname&&
                                <label>Car Name required</label>
                            }
                        </p>
                        <label htmlFor='rendid'>Day Rent</label>
                        <input type='text' onChange={(e)=>{inputDataChange(e)}} placeholder='Day Rent' id='rendid' name='dayRent'/>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cRent&&
                                <label>Day Rent required</label>
                            }
                        </p>
                        <label htmlFor='kmid'>kilometer</label>
                        <input type='text' onChange={(e)=>{inputDataChange(e)}} placeholder='Car name' id='kmid' name='km'/>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cKm&&
                                <label>Kilometer required</label>
                            }
                        </p>
                        <label htmlFor='gearid'>Gear System</label>
                        <select onChange={(e)=>{inputDataChange(e)}} name="gearSystem" id="car-select">
                            <option value="">--Please choose Gear System--</option>
                            <option value="Auto">Auto</option>
                            <option value="Manual">Manual</option>
                        </select>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cGearSystem&&
                                <label>Gear System Required</label>
                            }
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12} style={{display:'flex',flexDirection:'column'}}>
                        <label for="car-select">Choose Car category:</label>
                        <select onChange={(e)=>{inputDataChange(e)}} name="category" id="car-select">
                            <option value="">--Please choose an option--</option>
                            <option value="suv">SUV</option>
                            <option value="sedan">Sedan</option>
                            <option value="hatchback">HatchBack</option>
                        </select>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cCategory&&
                                <label>Car category required</label>
                            }
                        </p>
                        <label htmlFor='Personid'>Person</label>
                        <input onChange={(e)=>{inputDataChange(e)}} type='text' placeholder='Person number' id='Personid' name='seat'/>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cSeat&&
                                <label>String and number only</label>
                            }
                        </p>
                        <label htmlFor='fuelid'>Fuel Pump System</label>
                        <select onChange={(e)=>{inputDataChange(e)}} name="fuelPump" id="car-select">
                            <option value="">--Please choose an option--</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                        </select>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {cfuelPump&&
                                <label>String and number only</label>
                            }
                        </p>
                        <label htmlFor='carpreviewid'>Car Preview</label>
                        <input type='file' id='carpreviewid' onChange={(e)=>{imagesset(e)}} name='carPreview' multiple/>
                        <p className='text-danger m-0 p-0' style={{height:'1rem'}}>
                            {img1&&
                                <label>image jpg/png/jpeg format</label>
                            }
                        </p>
                    </Col>
                </Row>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Button type='button' className='my-4' variant="success" onClick={()=>{addCarData()}}>Success</Button>
                </div>
            </Container>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
    </div>
  )
}

export default Addcar