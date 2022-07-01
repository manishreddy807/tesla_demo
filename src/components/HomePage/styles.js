import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
width: 100vw;
min-height: 100vh;
height: 100vh;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
background: ${(props) => `url("/images/${props.backgroundImage}")`};
background-repeat: no-repeat;
background-size: cover;
background-position: center;


`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align:center;
 

`;


export const ButtonWrapper = styled.div`
 text-align: center;
`;

export const ButtonsGroup = styled.div`
 display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 30px;

`;

export const LeftButton = styled.div`
background: rgba(13, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 13px;
cursor: pointer;
margin: 10px;

`;

export const RightButton = styled(LeftButton)`
color: black;
opacity: 0.7;
background: white;

`;

export const DownArrow =styled.img`
height: 40px;
animation: animateDown infinite 1.5ms;
overflow-x: hidden;


`;

