import React from 'react'
import "./EmailList.css"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { 
    ChevronLeft,  
    ChevronRight , 
    KeyboardHide, 
    Inbox,
    PeopleAltOutlined,
    LocalOfferOutlined
} from '@mui/icons-material';
import Section from "./Section";
import EmailRow from "./EmailRow";


function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__setttingsLeft">
                    <Checkbox />
                    <IconButton> <ArrowDropDown/> </IconButton>
                    <IconButton> <RefreshIcon/> </IconButton>
                    <IconButton> <MoreVertIcon/> </IconButton>

                </div>
                <div className="emailList__setttingsRight">
                    <IconButton> <ChevronLeft/> </IconButton>
                    <IconButton> <ChevronRight/> </IconButton>
                    <IconButton> <KeyboardHide/> </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon = {Inbox} title="Primary" color="red" selected />
                <Section Icon = {PeopleAltOutlined} title="Social" color="#1A73E8"  />
                <Section Icon = {LocalOfferOutlined} title="Promotions" color="green" />
            </div>

            <div className="emailList__list">
                <EmailRow 
                    title="Google" 
                    subject="Regarding the Gmail clone"
                    description="Please dont put us out of business"
                    time="10pm"
                />
                <EmailRow 
                    title="Playstation 5 now in store" 
                    subject="Grab the latest playstation now"
                    description="Fresh restock of the latest playstation"
                    time="2pm"
                />
            </div>
        </div>
    )
}

export default EmailList