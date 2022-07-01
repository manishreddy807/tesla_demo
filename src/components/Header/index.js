import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router';
import { IconButton } from "@material-ui/core";
import { selectCar } from "../../features/carSlice";
import {v4 as uuidv4} from 'uuid';
import { Wrapper, ImgContainer, Menu, RightMenu, CustomMenu,
    HiddenCustomMenu, BurgerNav, CustomCloseIconWrapper, CustomCloseIcon } from "./styles";
import { auth } from "../../config/firebase";

function Header (){
    const [burgerMenuStatus, setBurgerMenuStatus] = useState(false)
    const cars= useSelector(selectCar)
    const history = useNavigate();

    const signOut = () => {
        auth.signOut()
    }

    return(
        <Wrapper>
            <ImgContainer>
            <img alt="logo" src="/images/logo.svg" />
            </ImgContainer>
            <Menu>
                {cars && 
                   cars.map((car) => {
                       return(
                           <a href="#" key={uuidv4()} >
                               {car}
                           </a>
                       )
                   })
                }
                <a>Soloar Roof</a>
                <a>Solar Panels</a>
            </Menu>
            <RightMenu>
                <a className="shop">Shop</a>
                <a onClick={signOut}>Sign Out</a>
                <a onClick={() => history('/register')} >Tesla Account</a>
                <IconButton>
                    <CustomMenu
                     onClick={() => setBurgerMenuStatus(true)}
                    ></CustomMenu>
                </IconButton>
            </RightMenu>
            <HiddenCustomMenu
             onClick={() => setBurgerMenuStatus(true)}
            ></HiddenCustomMenu>
            <BurgerNav showMenu={burgerMenuStatus}>
                <CustomCloseIconWrapper>
                    <IconButton>
                        <CustomCloseIcon
                         onClick={() => setBurgerMenuStatus(false)}
                        ></CustomCloseIcon>
                    </IconButton>
                </CustomCloseIconWrapper>
                <li>
                    <a onClick={() => history('/register')}>Tesla Account</a>
                </li>
                {cars && 
                   cars.map((car) => {
                       return(
                           <a href="." key={uuidv4()} >
                               {car}
                           </a>
                       )
                   })
                }
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Trade-In </a>
				</li>
				<li>
					<a href="#">Test Drive</a>
				</li>
				<li>
					<a href="#">Cybertruck</a>
				</li>
            </BurgerNav>
        </Wrapper>
    )
}

export default memo(Header);
