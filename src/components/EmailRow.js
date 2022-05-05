import React from 'react';
import "./EmailRow.css";
import { IconButton, Checkbox } from "@mui/material";
import { LabelImportantOutlined, StarBorderOutlined} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";


function EmailRow({ id, title, subject, description, time }) {

    let navigate = useNavigate();

    const openMail = () =>{
        // navigate("/mail?next=wolan&shata=shatade") navigate to mail with search params
        navigate("/mail")
    }

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton> <LabelImportantOutlined/> </IconButton>
                <IconButton> <StarBorderOutlined/> </IconButton>
            </div>

            <h4 className="emailRow__title">{title}</h4>

            <div className="emailRow__message">
                <h4>
                    { subject }
                    <span className="emailRow__description">
                        {" - " + description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">{time}</p>

        </div>
    );
}

export default EmailRow