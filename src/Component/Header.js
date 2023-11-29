import React,{useEffect} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import './Header.css';
import { Form,Container } from 'react-bootstrap';
import {useState} from 'react'
import {userReg,userLogin,adminSinup} from '../Servise/allApi'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header() {
    const navigate = useNavigate()
    const [signUp,setSignUp]=useState(false)
    const [uIdLogin,setUIdLogin]=useState(false)
    
    const [emailData,setEmailData]=useState(false)
    const [pswData,setPswData]=useState(false)
    const [conformPsw,setConformPsw]=useState(false)

    const [loginEmail,setLoginEmail]=useState(false)
    const [loginPsw,setLoginPsw]=useState(false)

    const [addminLogined,setAddminLogined]=useState(true)

    const [signupData,setSignupData]=useState({
        email:'',
        psw:'',
        cpsw:''
    })
    const [userLoginData,setUserLoginData]=useState({
        email:'',
        psw:''
    })

    const userSinup=(e)=>{
        const {name,value}=e.target

        if(name=="semail"){
            if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
                setEmailData(false)
                setSignupData({...signupData,["email"]:value})
            }else{
                setEmailData(true)
            }
        }
        if(name=="spsw"){
            if(value.match(/^[a-zA-Z0-9 ]+$/)){
                setPswData(false)
                setSignupData({...signupData,["psw"]:value})
            }else{
                setPswData(true)
            }
        }
        if(name=="cpsw"){
            setSignupData({...signupData,[name]:value})
        }
    }
    const newUserReg=async()=>{
        console.log("ys")
        
        const {email,psw,cpsw}=signupData
        if(email==""){
            setEmailData(true)
        }
        else if(psw==""){
            setPswData(true)
        }
        else if(cpsw != psw){
            setConformPsw(true)
        }
        else if(email !="" && psw !=""){
            setConformPsw(false)
            const Response=await userReg({email,psw})
            if(Response.status>=200 && Response.status<300){
                toast.success(`${Response.data}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            else{
                toast.warn(`${Response.response.data}`, {
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
    }
    const loginData=(e)=>{
        const {name,value}=e.target
        if(name=="email"){
            if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
                setLoginEmail(false)
                setUserLoginData({...userLoginData,[name]:value})
            }else{
                setLoginEmail(true)
            }
        }
        if(name=="psw"){
            if(value.match(/^[a-zA-Z0-9 ]*$/)){
                setLoginPsw(false)
                setUserLoginData({...userLoginData,[name]:value})
            }else{
                setLoginPsw(true)
            }
        }
    }
    const loginuser=async()=>{
        const {email,psw}=userLoginData
        if(email==""){
            setLoginEmail(true)
        }
        else if(psw==""){
            setLoginPsw(true)
        }
        else if(email !="" && psw !=""){
            if(email=="admin@gmail.com"){
                const Response =await adminSinup({email,psw})
                if(Response.status>=200 && Response.status<300){
                   
                    setAddminLogined(false)
                    console.log(Response.data)
                    localStorage.setItem("aid",Response.data.aid)
                    
                }
                else{
                    toast.warn(`${Response.response.data}`, {
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
            else{
                const Response= await userLogin({email,psw})
            if(Response.status>=200 && Response.status<300){
               
                setUIdLogin(true)
                setAddminLogined(false)
                localStorage.setItem("uId",Response.data.uId)
            }
            else{
                toast.warn(`${Response.response.data}`, {
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
        }

    }
    const logoutuser=()=>{
        if(localStorage.getItem("aid")||localStorage.getItem("uId")){
            setUIdLogin(false)
            setAddminLogined(true)
            localStorage.clear()
        }
    }
    const adminOruser=()=>{
        if(localStorage.getItem("aid")){
            setAddminLogined(false)
        }else if(localStorage.getItem("uId")){
            setAddminLogined(false)
            setUIdLogin(true)
        }
    }
    const Home = ()=>{
        navigate('/')
    }
    useEffect(()=>{
        adminOruser()
    },[addminLogined,uIdLogin])
    // console.log(userLoginData)
  return (
    <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
            <img src='https://i.postimg.cc/SNKdPBqb/download-1.png' alt='' width={'200rem'}/>
            <button id='btnlogin' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
                {addminLogined&&
                    <div className='displaymenu mx-5' >
                        <button className='btn btn-outline-light my-2 mx-1' onClick={()=>{Home()}}>Home</button>
                        <button className='btn btn-outline-light my-2 mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" >Login/Register</button>
                    </div>
                }
                {!addminLogined&&
                   <div className='displaymenu mx-5 text-light'>
                        <Link to='/'>
                            <label className='text-light' onClick={()=>{Home()}}>Home</label>
                        </Link>
                        <Link to='/addCar' style={{textDecoration:'none',color: 'white',display:uIdLogin?'none':'block'}}>
                            <label>AddCar</label>
                        </Link>
                        <Link to='/allEnquiry' style={{textDecoration:'none',color: 'white',display:uIdLogin?'none':'block'}}>
                            <label>AllEnquiry</label>
                        </Link>
                        <label className='text-light' onClick={()=>{logoutuser()}}>LogOut</label>
                   </div>
                }
            </div>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
                <div className=" modal-content" style={{
                     background: 'rgba(255, 255, 255, 0)',
                     borderRadius: '16px',
                     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                     backdropFilter: 'blur(2.6px)',
                     webkitBackdropFilter: 'blur(2.6px)',
                     border: '1px solid rgba(255, 255, 255, 0.45)',
                }}>
                <div className="modal-body text-light">
                    <div>
                        <Container >
                            {signUp?(
                                <div>
                                    <h3 className='tetele text-center pb-2'><b>Sign Up</b></h3>
                                    <button type="button" class="btncloss btn-close" data-bs-dismiss="modal"></button>
                                    <div  style={{display:'flex',justifyContent:'center',flexDirection: 'column'}}>
                                        <label htmlFor='Semail'>Email</label>
                                        <input placeholder='Email' onChange={(e)=>userSinup(e)} type='text' id='Semail' name='semail' /> 
                                         {emailData&&
                                            <p className='text-danger'>Required Email</p>
                                         }   
                                        <label className='pt-1' htmlFor='Spsw'>Password</label>
                                        <input placeholder='password' onChange={(e)=>userSinup(e)} type='password' id='Spsw' name='spsw' />
                                        {pswData&&
                                            <p className='text-danger'>Password Required</p>
                                        }
                                        <label className='pt-1'htmlFor='cpsw'>Conform Password</label>
                                        <input placeholder='Conform Password' onChange={(e)=>userSinup(e)} type='password' id='cpsw' name='cpsw' />
                                        {conformPsw&&
                                            <p className='text-danger'>Password and Conform Password not same</p>
                                        }
                                    </div>
                                </div>
                            ):(
                                <div>
                                    <h3 className='tetele text-center pb-2'><b>Login</b></h3>
                                    <button type="button" class="btncloss btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div style={{display:'flex',justifyContent:'center',flexDirection: 'column'}}>
                                    <label htmlFor='Lemail'>Email</label>
                                    <input placeholder='Email' onChange={(e)=>loginData(e)} type='text' id='Lemail' name='email' /> 
                                    {loginEmail&&
                                        <p className="text-danger">Email Not Valid</p>
                                    }
                                    <label className='pt-1' htmlFor='Lpsw'>Password</label>
                                    <input placeholder='password' onChange={(e)=>loginData(e)} type='password' id='Lpsw' name='psw' />
                                    {loginPsw&&
                                        <p className="text-danger">Password Not Valid</p>
                                    }
                                </div>
                                </div>
                                
                            )
                                
                                
                            }

                            <div style={{display:'flex',justifyContent:'center',flexDirection: 'column'}}>
                                {signUp?(
                                <label>Already Have Account?<span onClick={()=>{setSignUp(false)}}>Login</span></label>
                                ):(
                                <label>create a account?<span onClick={()=>{setSignUp(true)}}>Sign Up</span></label>
                                )
                                    
                                    
                                 }
                                  
                                {signUp?"":
                                  <label style={{cursor:'pointer'}}>Forgot Password</label> 
                                }
                            </div>
                            <div className='text-center my-2'>
                                {signUp?(
                                    <Button type='button' onClick={()=>{newUserReg()}} className='btn' variant="success" >Sign Up</Button> 
                                ):(
                                    <Button type='submit' onClick={()=>{loginuser()}}  className='btn' variant="success" >Login</Button> 
                                )
                                }
                            </div>
                        </Container>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <ToastContainer
            position="top-center"
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

    </nav>
  )
}

export default Header