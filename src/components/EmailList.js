import React, { useState, useEffect } from 'react'
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
import { db } from "../firebase/firebase"
import { 
    collection, 
    // getDocs, 
    onSnapshot, 
    orderBy, 
    query 
} from "firebase/firestore";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function EmailList() {

    const [emails, setEmails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // const fetchData = async()=>{
        //     const emails = collection(db, "emails");
        //     const emailSnapshot = await getDocs(emails)
        //     // const emailList = emailSnapshot.docs.map(doc=> doc.data())
        //     // console.log(emailList)
        //     setEmails(emailSnapshot.docs.map(doc =>(
        //         { id: doc.id, data: doc.data() }
        //     )))
        // }

        const q = query(collection(db, "emails"), orderBy('timestamp', 'desc'));
        onSnapshot(q, (querySnapshot)=>{
            setEmails(querySnapshot.docs.map(doc=>(
                { id: doc.id, data: doc.data() }
            )))
            setLoading(false)
        })
        
    },[])

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
                { loading 
                ? (
                    <Stack sx={{ width: '100%', color: 'red', marginTop: '20px'}} spacing={2}>
                        <LinearProgress color="inherit" />
                        <LinearProgress color="inherit" />
                        <LinearProgress color="inherit" />
                    </Stack>)
                :(
                    <div>
                        {emails.map(mail=>(
                            <EmailRow 
                                id={mail.id}
                                key={mail.id}
                                subject = {mail.data.subject}
                                description={mail.data.message}
                                time = {new Date(mail.data.timestamp?.seconds * 1000).toUTCString()}
                                sender_title = {mail.data.to}
                            />
                        ))}
                    </div>)
                }


            </div>
        </div>
    )
}

export default EmailList