import {useState} from 'react';
import {Navigate} from 'react-router-dom';

const Protected = ({ Children})=>{
    const adminLogin = localStorage.getItem("aid")
    const [logged,setLogged]= useState(adminLogin)
    return logged ? Children :<Navigate to='/' replace/>
}

export default Protected