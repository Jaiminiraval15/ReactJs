import { useNavigate,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
export default function EmployeeDetail(){
    const navigate=useNavigate();
    const param=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch("https://63202bbae3bdd81d8ef3fecc.mockapi.io/employee"+"/"+param.id,{method:"GET"})
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
    return(
        <>
       <img src={data.EmployeeImage} class="img-rounded" ></img>
       <p className='info'>Id: {data.id}</p>
       <p className='info'>Code: {data.EmployeeCode}</p>
       <p className='info'>Name: {data.EmployeeName}</p>
       <p className='info'>Email: {data.EmployeeEmail}</p>
       <p className='info'>Mobile: {data.EmployeeMobile}</p>
       <Button  className='btn'variant="success" onClick={()=>navigate('../Employee/edit/'+param.id)}>Edit</Button>
       <Button className='btn-1' variant="danger" onClick={()=>{
        fetch("https://63202bbae3bdd81d8ef3fecc.mockapi.io/employee"+"/"+param.id,{method:"DELETE"})
        .then((res)=>navigate("/Employee/"))
       }}>Delete</Button>
        </>
    )
}