import { useState } from "react";
import {useNavigate,useParams} from 'react-router-dom'
import { Form,Button} from "react-bootstrap";
export default function AddEmployee(){
    const navigate=useNavigate();
    const param=useParams();
    const [data,setData]=useState({});
    
    return(
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Code:</Form.Label>
        <Form.Control type="text" placeholder="Enter code" onChange={(e)=>{
      setData({...data,EmployeeCode:e.target.value})}}/>
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{
      setData({...data,EmployeeName:e.target.value})}}/>
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>{
      setData({...data,EmployeeEmail:e.target.value})}} />
        <Form.Label>MobileNumber:</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" onChange={(e)=>{
      setData({...data,EmployeeMobile:e.target.value})}}/>
      <Form.Label>Image:</Form.Label>
        <Form.Control type="text" placeholder="Upload" onChange={(e)=>{
      setData({...data,EmployeeImage:e.target.value})}}/>
      </Form.Group>
        </Form>
      <Button variant="secondary" onClick={()=>{
        fetch("https://63202bbae3bdd81d8ef3fecc.mockapi.io/employee"+"/",
        {method:"POST",
        body:JSON.stringify(data),
        headers:
        {"Content-Type":"application/json"}})
        
        .then((res)=>navigate("/Employee"))}}>Add</Button>
      </>
    )
}