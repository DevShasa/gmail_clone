import React from 'react';
import "./Sidebar.css";
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SidebarOption from "./SidebarOption";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
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

            <SidebarOption Icon ={InboxOutlinedIcon} title="Inbox" number={69} selected={true}/>
            <SidebarOption Icon ={StarBorderOutlinedIcon} title="Starred" number={9}/>
            <SidebarOption Icon ={AccessTimeOutlinedIcon} title="Snoozed" number={3}/>
            <SidebarOption Icon ={SendOutlinedIcon} title="Sent" number={100}/>
            <SidebarOption Icon ={NoteOutlinedIcon} title="Drafts" number={3}/>
            <SidebarOption Icon ={LabelIcon} title="Label" number={9}/>
            <SidebarOption Icon ={ExpandMoreOutlinedIcon} title="More"/>

        </div>
    )
}

export default Sidebar