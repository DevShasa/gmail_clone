import React from 'react'
import "./Mail.css"
// import { useSearchParams } from "react-router-dom";
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {
    ArrowBackOutlined,
    ArchiveOutlined,
    DeleteOutlineOutlined,
    EmailOutlined,
    AccessTimeOutlined,
    AddTaskOutlined,
    DriveFileMoveOutlined,
    LabelOutlined,
    MoreVertOutlined,
    ReportGmailerrorredOutlined,
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
    LocalPrintshop,
    Launch,
}from "@mui/icons-material"
import { useSelector } from "react-redux";


function Mail() {
    // let [searchParams, setSearchParams] = useSearchParams();
    // const next = searchParams.get("next")
    // const shata = searchParams.get("shata")
    // console.log(next)
    // console.log(shata)

    const { selectedMail } = useSelector(state => state.mail)
    const navigate = useNavigate()

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={()=> navigate("/")}> <ArrowBackOutlined/> </IconButton>
                    <IconButton> <ArchiveOutlined  /> </IconButton>
                    <IconButton> <ReportGmailerrorredOutlined  /> </IconButton>
                    <IconButton> <DeleteOutlineOutlined  /> </IconButton>
                    <span> | </span>
                    <IconButton> <EmailOutlined  /> </IconButton>
                    <IconButton> <AccessTimeOutlined  /> </IconButton>
                    <IconButton> <AddTaskOutlined  /> </IconButton>
                    <span> | </span>
                    <IconButton> <DriveFileMoveOutlined  /> </IconButton>
                    <IconButton> <LabelOutlined  /> </IconButton>
                    <IconButton> <MoreVertOutlined  /> </IconButton>

                </div>
                <div className="mail__toolsRight">
                    <IconButton> <ArrowBackIosOutlined  /> </IconButton>
                    <IconButton> <ArrowForwardIosOutlined  /> </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__content">
                        <div className="mail__bodyHeader">
                            <div className="mail__subject">
                                <div className="mail__subjectInner">
                                    <div className="inner-1">
                                        <h2>{selectedMail?.subject}</h2>
                                        <span>Inbox &#10006;</span>
                                    </div>
                                    <div className="inner-2">
                                        <LocalPrintshop/>
                                        <Launch />
                                    </div>
                                </div>
                                <div className="mail__titleTime">
                                    <p>{selectedMail?.sender_title}</p>
                                    <p className="mail__time">{selectedMail?.time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mail__message">
                            <p>{selectedMail?.description}</p>
                        </div>
                </div>  
            </div>
        </div>
    )
}

export default Mail