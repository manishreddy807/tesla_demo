import styled from 'styled-components';

export const LoginWrapper = styled.div`
background: radial-gradient(transparent, hsl(0, 0%, 2%)),
#333 url("/images/login-semi-hangar.jpg") no-repeat center center/cover;
width: 100vw;
min-height: 100vh;
font-size: 1rem;
color: #4a4a4a;


`;

export const Container = styled.div`
background: #eeeeee;
position: fixed;
right: 7%;
top: 10px;
bottom: 2.5em;
left: 51%;
border-radius: 10px;
@media (max-width: 991.98px) {
    right: 0;
    top: 10px;
    bottom: 0;
    left: 0%;
}


`;

export const Confirmation = styled.div`
background: white;
padding: 15px 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
a {
    color: #3e6be2;
    cursor: pointer;
    text-decoration: underline;
}

`;


export const Title = styled.h2`
font-weight: 200;
font-size: 1.6rem;
margin: 15px 0 30px 0;
text-align: center;

`;

export const FormWrapper = styled.div`
padding: 0 10%;
display: flex;
justify-content: center;
form {
    padding-top: 30px;
    width: 100%;
    flex-direction: column;
    margin-top: 15px;
    border-top: 1px solid rgba(123, 123, 123, 0.4);
    max-width: 500px;
    @media (max-width: 991.98px) {
        max-width: 450px;
    }
    input {
        align-items: center;
        border-radius: 50px;
        display: inline-flex;
        font-size: 1rem;
        height: 2.5em;
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
    width: 100%;
    display: block;
    transition: 0.4s;
    border: none;
    border-radius: 80px !important;
    cursor: pointer;
    background: #3e6be2;
    color: #f3d9f0;
    border-radius: 3px;
    box-shadow: none;
    font-size: 14px;
    height: 2.5em;
    text-transform: uppercase;
    :hover {
        background: rgba(62, 107, 226, 0.9);
    }
}


`;