import React from 'react';
import {useEffect,useState} from 'react';
import {Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {getAllRentApi,getSingleCarApi} from '../Servise/allApi';
import {Base_url} from '../Servise/baseurl';
import { useNavigate } from 'react-router-dom';

function AddEnquery(){
    
    const navigation=useNavigate()

    const [allRent,setAllRent]=useState([])
    const AllRentFetching=async()=>{
        const Response = await getAllRentApi()
        if(Response.status>=200 && Response.status<300){
            setAllRent(Response.data)
        }else{
            alert("All Car Available")
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('aid')){
        }else{
            navigation('/')
        }
    },[])

    useEffect(()=>{
        AllRentFetching()
    },[])
    return(
        <div>
            <div className='py-5'>
                <h3 className='text-center'>All Rent Enquiry</h3>
            </div>
            <div className='py-3'>
                <Container style={{overflowX:'auto'}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>CarName</th>
                            <th>Brant</th>
                            <th>Booking Date</th>
                            <th>SubmitDate</th>
                            <th>Car Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRent.length>0?allRent.map((item,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.uname}</td>
                                <td>{item.carName}</td>
                                <td>{item.carBrant}</td>
                                <td>{item.date}</td>
                                <td>{item.todate}</td>
                                <td><img src={`${Base_url}/carImage/${item.carImage}`} alt='' width='250px'/></td>
                            </tr>
                        )):("")
                        }
                    </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    )
}

export default AddEnquery