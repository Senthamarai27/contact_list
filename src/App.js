import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const data=[];
    const promise = async()=>{
      await fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res)=> res.json())
      .then((json) =>{
        json.map((contact)=>{
          data.push({
            id: contact.id,
            name: contact.name,
            number:contact.phone,
            email:contact.email
            
          });
        })
      })
      dispatch({type: 'FETCH_CONTACTS', payload:data});
    }
    promise();
  }, []);
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddContact />} />
        <Route path='/edit/:id' element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App
