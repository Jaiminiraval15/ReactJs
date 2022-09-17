import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Employee from './Employee';
import Home from './Home';
import EditEmployee from './EditEmployee';
import AddEmployee from './AddEmployee';
import EmployeeDetail from './EmployeeDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}></Route>
      <Route path='/Employee' element={<Employee/>} ></Route>
      <Route path='/Employee/:id' element={<EmployeeDetail/>} ></Route>
      <Route path='/Employee/add' element={<AddEmployee/>} ></Route>
      <Route path='/Employee/edit/:id' element={<EditEmployee/>} ></Route>
    </Route>
  </Routes>
  </BrowserRouter>
 
);


