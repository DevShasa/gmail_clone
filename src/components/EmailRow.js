import React from 'react';
import "./EmailRow.css";
import { IconButton, Checkbox } from "@mui/material";
import { LabelImportantOutlined, StarBorderOutlined} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../redux/mailSlice";

function EmailRow({ id, sender_title, subject, description, time }) {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const openMail = () =>{
        // navigate("/mail?next=wolan&shata=shatade") navigate to mail with search params
        dispatch(selectMail({id, sender_title, subject, description, time}))
        navigate("/mail")
    }

    function trimString(str){
        const maxlength = 100
        if(str.length < maxlength){
            return str
        }else{
            return str.substring(0, maxlength) + " ..."
        }
    }
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton> <LabelImportantOutlined/> </IconButton>
                <IconButton> <StarBorderOutlined/> </IconButton>
            </div>

            <h4 className="emailRow__title">{sender_title}</h4>

            <div className="emailRow__message">
                <h4>
                    { subject }
                    <span className="emailRow__description">
                        {" - " + trimString(description)}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">{time.slice(4,22)}</p>

        </div>
    );
}

export default EmailRow