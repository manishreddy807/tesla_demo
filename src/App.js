import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { selectUser, setLogInState, setLogOutState } from './features/userSlice';
import HomePage from './components/HomePage'
import SignUp from './components/signUp';
import { auth } from './config/firebase';
import Login from './components/Login';


const AppWrapper = styled.div`
display: "flex";
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
position: relative;
`;

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
 
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      if(authenticatedUser){
        dispatch(
          setLogInState({
            uid : authenticatedUser.uid,
            email: authenticatedUser.email
          }),
        );
      }else{
        dispatch(setLogOutState())
      }
    });
    return () => {
      unSubscribe()
    };
  }, [dispatch])
  

  const currentURL = window.location.href;
  const pathname = window.location.pathname;

  return (
    <AppWrapper>
      <BrowserRouter>
         {!user ? (
           <Login />
          
         ): (
           <Routes>
             <Route exact path="/" element={<HomePage />} />
             <Route exact path="/login" element={<Login />} />
             <Route exact path="/register" element={<SignUp />} />
           </Routes>
         )}
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
