import {Card,Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import  './index.css'
export default function Employee(){
    const navigate=useNavigate();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://63202bbae3bdd81d8ef3fecc.mockapi.io/employee")
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
    function MyEmployee(){
        const FormattedEmployee =data.map((emp)=>{
            return(
                <>
            <Card 
              bg={"Light".toLowerCase()}
              key={"Dark"}
              text={"Light".toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '17rem',marginRight:'2rem'}}
              className="mt-2"
              border="Primary"
              onClick={()=>navigate('/Employee/'+emp.id)}
              
            >
              
              <Card.Body>
              <Card.Img variant='top' src={emp.EmployeeImage}></Card.Img>
                <Card.Text>{emp.EmployeeName} </Card.Text>
                <Card.Text>{emp.id} </Card.Text>
                
              </Card.Body>
            </Card>
    
          
                </>
            )
        })
        return(
            <Row>{FormattedEmployee}</Row>
        )
    }
   
    return(
        
       <MyEmployee/>
    
    )
    
}

     
