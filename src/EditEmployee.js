import { useNavigate,useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
export default function EditEmployee(){
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
        <Form>
       <Form.Group className="mb-3" >
       <Form.Label>Code</Form.Label>
        <Form.Control type="text" placeholder={data.EmployeeCode} onChange={(e)=>{
      setData({...data,EmployeeCode:e.target.value});
    }} />
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={data.EmployeeName}  onChange={(e)=>{
      setData({...data,EmployeeName:e.target.value});
    }}/>
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder={data.EmployeeEmail} onChange={(e)=>{
      setData({...data,EmployeeEmail:e.target.value});
    }}/>
    <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder={data.EmployeeMobile} onChange={(e)=>{
      setData({...data,EmployeeMobile:e.target.value});
    }}/>
    <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder={data.EmployeeImage} onChange={(e)=>{
      setData({...data,EmployeeImage:e.target.value});
    }}/>
      </Form.Group>
      </Form>
  <Button variant='secondary' onClick={()=>{

      fetch("https://63202bbae3bdd81d8ef3fecc.mockapi.io/employee"+"/"+param.id,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((res)=>{
        
        navigate('/Employee');
      })
    }} >Edit</Button>
        </>
    )
}