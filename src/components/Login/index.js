import React, {memo, useRef} from "react";
import { auth, provider } from "../../config/firebase";
import {useNavigate} from 'react-router-dom'
import {LoginContainer, Container, Title, SignWithGoogleContainer, CreateAccountContainer} from './styles'

function Login (){
          const history = useNavigate();
          const emailReference = useRef(null);
          const passwordReference = useRef(null)


    const signInWithEmailAndPasswordHandler = event => {
        event.preventDefault();
        auth 
            .signInWithEmailAndPassword(
                emailReference.current.value,
                passwordReference.current.value,
            )
            .then((signInedUser) => {
                history.push("/")
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                alert(errorMessage, errorCode)
            })
    }      

    const registerUserWithEmailAndPasswordHandler = e => {
        e.preventDefault();
        auth 
            .createUserWithEmailAndPassword(
                emailReference.current.value,
                passwordReference.current.value,
            )
            .then((registeredUser) => {
                history.push('/')
                
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                alert(errorMessage, errorCode)
            })
    }      

    const signInWithGoogleHandler = () => {
        auth 
             .signInWithPopup(provider)
             .then((signInedUser) => {
                 history.push("/")
             })
             .catch((err) => {
                 console.log(err)
             })
    }

  return(
      <LoginContainer>
          <Container>
              <Title>LogIn</Title>
              <form autoComplete="off">
              <input
              ref={emailReference} 
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              />
              <input
              ref={passwordReference} 
               type="password"
               placeholder="password"
               id="password"
               name="password"
               required
              
              />
              <button
               type="submit"
               name="submit"
              onClick={signInWithEmailAndPasswordHandler}
              >
                  Sign In
              </button>
              </form>
              <SignWithGoogleContainer>
                  <img
                    onClick={signInWithGoogleHandler} 
                     src="/images/google.png"
                     alt="logo"
                  />
                  <p href="" onClick={signInWithGoogleHandler}>Login with Google</p>
               </SignWithGoogleContainer>
               <CreateAccountContainer>
                   <p href="" onClick={registerUserWithEmailAndPasswordHandler}>
                       Create an account
                   </p>
               </CreateAccountContainer>
          </Container>
      </LoginContainer>
  )
}

export default memo(Login)