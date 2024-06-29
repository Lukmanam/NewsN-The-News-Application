import React from 'react';
import { Routes,Route } from 'react-router-dom';
import UserLogin from '../components/userComponents/UserLogin';

const UserRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={<UserLogin/>}/>
    </Routes>
    
  )
}

export default UserRoute
