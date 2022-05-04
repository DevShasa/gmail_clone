import React from 'react'
import "./EmailList.css"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {} from 

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__setttingsLeft">
                    <Checkbox />
                    <IconButton> <ExpandMoreOutlinedIcon/> </IconButton>
                    <IconButton> <RefreshIcon/> </IconButton>
                    <IconButton> <MoreVertIcon/> </IconButton>

                </div>
                <div className="emailList__setttingsRight">
                    <IconButton> <ExpandMoreOutlinedIcon/> </IconButton>
                    <IconButton> <RefreshIcon/> </IconButton>
                    <IconButton> <MoreVertIcon/> </IconButton>
                </div>
            </div>
        </div>
    )
}

export default EmailList