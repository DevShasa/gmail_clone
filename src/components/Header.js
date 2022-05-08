import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from "react-redux";
import { auth, signOut } from "../firebase/firebase";
import { logout } from "../redux/userSlice"; 


function Header() {

    const dispatch = useDispatch()
    const { user } = useSelector(state=> state.userState)

    const logMeOut = ()=>{

        signOut(auth).then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            console.log("LOGOUT ERROR>>", error)
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
                    alt="gmail logo"
                />
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input type ="text" placeholder="Search Mail" />
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            
            <div className="header__right">
                <IconButton>
                    <HelpOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AppsOutlinedIcon />
                </IconButton>
                <Avatar 
                    sx={{width: 30, height: 30, cursor:'pointer'}}
                    src={user?.photoUrl}
                    onClick = {logMeOut}
                >
                    {user?.email[0].toUpperCase()}
                </Avatar>
            </div>
        </div>
    );
}

export default Header
