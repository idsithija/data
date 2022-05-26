import React, { useContext } from 'react'
import { logoutStart } from '../../context/authContext/AuthActions';
import { AuthContext } from '../../context/authContext/AuthContext';
import './navigation.scss';

export default function Navigation() {

  const {dispatch} = useContext(AuthContext);

  return (
    <>
      <button className='btn' onClick={() => dispatch(logoutStart())}>Log out</button>
    </>
  )
}