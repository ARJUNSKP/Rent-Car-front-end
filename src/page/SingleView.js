import React,{useEffect,useState} from 'react';
import './SingleView.css'
import {Container,Row,Col} from 'react-bootstrap'
import {getSingleCarApi,RentCarApi} from '../Servise/allApi'
import {useParams} from 'react-router-dom'
import {Base_url} from '../Servise/baseurl'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleView(){

    const {carId} = useParams()
    const [carData,setCarData]=useState('')
    const [show, setShow] = useState(false);
    const [input,setInput] = useState({
        uid:'',
        uname:'',
        email:'',
        date:'',
        toDate:''
    })

    const handleClose = () => setShow(false);
    const handleShow = () =>{
        if(localStorage.getItem('uId')){
            setShow(true);
        }else{
            toast.warn('plase Login', {
                position: "top-center",
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

    const getCarData= async()=>{
        const Response = await getSingleCarApi(carId)
        setCarData(Response.data)
    }
    const inputData=(e)=>{
        const {name,value}=e.target
        if(name=="uname" || name=="email" || name=="date" || name=="todate"){
            setInput({...input,[name]:value})
        }
    }
    const payMent=async()=>{
        const {uId,uname,email,date,todate}=input
        if(uname !="" && email !="" && date !="" && todate !=""){
            if(localStorage.getItem("uId")){
                const Response = await RentCarApi({uId:(localStorage.getItem("uId")),uname:uname,email:email,date:date,todate:todate,carId:carId,carBrant:carData.carBrant,carName:carData.carName,carImage:carData.carPreview})
                console.log(Response)
                if(Response.status>=200 && Response.status<300){
                    console.log("ys")
                    handleClose()
                    toast.success('Car Booked', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
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
        }else{
            toast.warn('All Field are required', {
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
    console.log()

    useEffect(()=>{
        getCarData()
    },[])
    return(
        <div  className='py-5'>
            <div className='heading-main'>
                <div className='mainDiv' >
                    <div className='labelHeading text-center' >
                        <h1 data-aos="fade-up" data-aos-duration="1000" >How it Works</h1>
                        <div data-aos="fade-up" data-aos-duration="1100" >
                            <h4 className='text-center'>Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Container className='py-5'>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12} >
                        <div className='px-1'>
                            <div className='labelHeading'>
                                <h3>Browse and select</h3>
                                <p>Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.</p>
                            </div>
                            <div className='labelHeading'>
                                <h3>Book and confirm</h3>
                                <p>Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.</p>
                            </div>
                            <div className='labelHeading'>
                                <h3>Enjoy your ride</h3>
                                <p>Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.</p>
                            </div>
                            <div className='labelHeading-btn'>
                                <button className='btn btn-outline-dark w-25' onClick={handleShow} >RentNow</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='carImagedis h-100 my-4'>
                            <img src={`${Base_url}/carImage/${carData.carPreview}`} alt='..'/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{
                background: 'rgba(0, 0, 0, 0.22)',
                // borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(2.8px)',
                webkitBackdropFilter: 'blur(2.8px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
            }} >
                    <Modal.Title>Book Now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{
                background: 'rgba(0, 0, 0, 0.22)',
                // borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(2.8px)',
                webkitBackdropFilter: 'blur(2.8px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
            }} >
                        <div className='modelBox'>
                            <label htmlFor='Unameid'>Name</label>
                            <input type='text' className='inputBox' onChange={(e)=>{inputData(e)}} id='unameid' name='uname' placeholder="Name"/>
                            <label htmlFor="uemailid">Email</label>
                            <input type='email' id='uemailid' className='inputBox' name='email' onChange={(e)=>{inputData(e)}}  placeholder="email"/>
                            <label htmlFor='BDate'>Booking Date</label>
                            <input type='date' onChange={(e)=>{inputData(e)}} name="date" className='inputBox' />
                            <label htmlFor='toDateid'>to Date</label>
                            <input type='date' id='toDateid' onChange={(e)=>{inputData(e)}} name="todate" className='inputBox' />
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{
                background: 'rgba(0, 0, 0, 0.22)',
                // borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(2.8px)',
                webkitBackdropFilter: 'blur(2.8px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
            }} >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>payMent()}>
                        PayNow
                    </Button>
                </Modal.Footer>
            </Modal>
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

export default SingleView