import React, {useRef,memo, useState} from "react";
import { LoginWrapper, Container,Confirmation, Title, FormWrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { auth } from "../../config/firebase";

function SignUp(){
   const [firstNameValue, setFirstNameValue] = useState();
   const [lastNameValue, setLastNameValue] = useState();
   const [emailValue, setEmailValue] = useState();
   const [passwordValue, setPasswordValue] = useState()

    const history = useNavigate()
    const emailReference = useRef(null);
    const passwordReference = useRef(null);

 
    const registerUserWithEmailAndPasswordHandler = (e) => {
        e.preventDefault()
        auth 
            .createUserWithEmailAndPassword(
                emailReference.current.value,
                passwordReference.current.value
            )
            .then((registeredUser) => {
                history.push('/login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            }) 
            
    }


  return(
      <LoginWrapper>
          <Container>
             <Confirmation>
             <span onClick={() => history.push("/login")}>
                  Already have an account? &nbsp;
              </span>
              <a href="/login">Sign In</a>
             </Confirmation>
          
          <Title>Create Account</Title>
          <FormWrapper>
              <form autoComplete="off">
                  <input
                    onChange={(e) => setFirstNameValue(e.target.value)} 
                    className="input"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    autoComplete="first_name"
                  />
                   <input
                   onChange={(e) => setLastNameValue(e.target.value)} 
                    className="input"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    autoComplete="last_name"
                  />
                  <input
                   onChange={(e) => setEmailValue(e.target.value)} 
                   ref={emailReference}
                    className="input"
                    type="email"
                    name="email"
                    placeholder="email"
                    autoComplete="email"
                    required
                    id="email"
                  />
                   <input
                   onChange={(e) => setPasswordValue(e.target.value)}
                   ref={passwordReference} 
                    className="input"
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="new-password"
                    autoCapitalize="none"
                    required
                    
                  />
                  <button
                  onClick={registerUserWithEmailAndPasswordHandler}
                    className="button create-button"
                    type="submit"
                    name="submit"
                    id="submit-form"
                  >
                      Create Account
                  </button>
              </form>
          </FormWrapper>
          </Container>
      </LoginWrapper>
  )   
}


export default memo(SignUp)