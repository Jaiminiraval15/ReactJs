import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header(){
    return(
       
        <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./Employee">All Employee</Nav.Link>
            <Nav.Link href="./Employee/add">Add</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
       
    )
    }