import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: radial-gradient(transparent, hsl(0, 0%, 2%)),
        #333 url("/images/login-semi-interior.jpg") no-repeat center center/cover;
    color: #4a4a4a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
 

`;

export const Container = styled.div`
min-height: 336px;
height: 400px;
width: 414px;
background: rgb(238, 238, 238);
border-radius: 15px;
padding: 20px;
padding-bottom: 0;
@media (max-width: 568px) {
    width: 90%;
}
form {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 15px;
    input {
        align-items: center;
        border-radius: 50px;
        display: inline-flex;
        font-size: 1rem;
        height: 2.4em;
        justify-content: flex-start;
        line-height: 1.5;
        padding-left: 0.8em;
        padding-right: 0.8em;
        background-color: #fff;
        border: 1px solid #dbdbdb;
        color: #363636;
        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
        width: 100%;
        margin-bottom: 20px;
        transition: 0.5s;
        :focus {
            border: 1px solid #666666;
            outline: 0 !important;
        }
        ::placeholder {
            font-size: 15px;
        }
    }
}
button {
    transition: 0.4s;
    border: none;
    border-radius: 80px !important;
    cursor: pointer;
    background: #3e6be2;
    color: #f3d9f0;
    border-radius: 3px;
    box-shadow: none;
    font-size: 0.9rem;
    height: 2.4em;
    text-transform: uppercase;
    :hover {
        background: rgba(62, 107, 226, 0.9);
    }
}


`;

export const Title = styled.div`
color: #4a4a4a;
font-weight: 200;
font-size: 1.6rem;
padding: 15px 0;
padding-bottom: 13px;
text-align: center;
border-bottom: 1px solid rgba(123, 123, 123, 0.4);

`;

export const SignWithGoogleContainer = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
margin-bottom: 20px;
a {
    cursor: pointer;
    font-size: 15px !important;
    display: inline-block;
    :hover {
        text-decoration: underline;
    }
}
img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
 


`;

export const CreateAccountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
margin-top: 6px;
min-height: 44px;
a {
    transition: 0.4s;
    display: block;
    color: #3e6be2;
    cursor: pointer;
    font-size: 16px;
    :hover {
        text-decoration: underline;
    }
}

`;