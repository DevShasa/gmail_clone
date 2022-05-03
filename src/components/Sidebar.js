import React from 'react';
import "./Sidebar.css";
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SidebarOption from "./SidebarOption";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch } from "react-redux";

function Sidebar() {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button
                className="sidebar__compose"
                onClick = {console.log("COmposed!")}
                startIcon = { <CreateOutlinedIcon fontSize='large'/> }
                disableRipple = {true}
            >
                Compose
            </Button>

            <SidebarOption Icon ={InboxIcon} title="Inbox" number={69} selected={true}/>
            <SidebarOption Icon ={StarBorderOutlinedIcon} title="Starred" number={9}/>
            <SidebarOption Icon ={AccessTimeOutlinedIcon} title="Snoozed" number={3}/>
            <SidebarOption Icon ={SendOutlinedIcon} title="Sent" number={100}/>
            <SidebarOption Icon ={NoteOutlinedIcon} title="Drafts" number={3}/>
            <SidebarOption Icon ={LabelIcon} title="Label" number={9}/>
            <SidebarOption Icon ={ExpandMoreOutlinedIcon} title="More"/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <LocalPhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Sidebar