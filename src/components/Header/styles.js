import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const  Wrapper = styled.div`
top: 0;
left: 0;
right: 0;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
z-index: 1000000 !important;
@media (max-width: 992px) {
    justify-content: space-between;
}



`;


export const ImgContainer = styled.div`
@media (max-width: 568px) {
    margin-right: 15px;
}

`;


export const Menu = styled.div`
display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	flex: 1;
	a {
		font-size: 0.9em;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		text-transform: capitalize;
		min-width: fit-content;
		color: black;
		padding: 8px 18px;
		border-radius: 8px;
		transition: 0.4s;
		:hover {
			background: rgba(245, 245, 245, 0.1);
		}
		a.shop {
			color: red;
		}
	}
	@media (max-width: 992px) {
		display: none;
	}

`;


export const RightMenu = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-wrap: nowrap;
a {
    font-size: 0.9em;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-transform: capitalize;
    min-width: fit-content;
    color: black;
    padding: 8px 18px;
    border-radius: 8px;
    transition: 0.4s;
    :hover {
        background: rgba(245, 245, 245, 0.1);
    }
}
@media (max-width: 568px) {
    display: none;
}

`;

export const CustomMenu = styled(MenuIcon)`
cursor: pointer;
margin-left: 10px;


`;

export const HiddenCustomMenu = styled(MenuIcon)`
display: none !important;
@media (max-width: 568px) {
    display: block !important;
}

`;


export const BurgerNav = styled.div`
transform: ${(props) =>
    props.showMenu ? "translateX(0)" : "translateX(100%)"};
transition: transform 0.3s;
position: fixed;
top: 0;
right: 0;
min-height: 100vh;
background: white;
min-width: 300px;
width: 300px;
padding: 20px;
li {
    list-style-type: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
a {
    cursor: pointer;
}

`;

export const CustomCloseIconWrapper = styled.div`
width: 100%;
	display: flex;
	justify-content: flex-end;


`;

export const CustomCloseIcon = styled(CloseIcon)`
cursor: pointer;
`

