import React from 'react';
import "./SendMail.css";
import { Close }  from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../redux/mailSlice";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore" ;

function SendMail() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const submitHandler = async(formData) =>{
        // db.collection('emails').add({
        //     to: formData.to,
        //     subject: formData.subject,
        //     message: formData.message,
        //     timestamp: 
        // })
        dispatch(closeSendMessage());
        const docRef = await addDoc(collection(db, "emails"), {
                    to: formData.to,
                    subject: formData.subject,
                    message: formData.message,
                    timestamp: serverTimestamp()
        });
        console.log("the new document is", docRef.id)
        

    }

    return (
        <div className="sendmail">
            <div className="sendmail__header">
                <h2>New Message</h2>
                <Close 
                    className="sendmail__close"
                    onClick = {()=>dispatch(closeSendMessage())}
                />
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input type="email"
                    name = "to" 
                    placeholder="To"
                    {...register("to", {required: true})}
                />
                {errors?.to && <p className="err">The "To" field is required</p>}
                <input type="text"
                    name = "subject" 
                    placeholder="Subject"
                    {...register("subject", {required: true})}
                />
                {errors?.subject && <p className="err">The "Subject" field is required</p>}
                <textarea type="text"
                    name="message"
                    placeholder="Message" 
                    className="sendmail__message"
                    {...register("message", {required: true})}
                />
                {errors?.message && <p className="err">Email must include message</p>}
                <div className="sendmail_options">
                    <Button
                        type="submit"
                        color="primary"
                        className="sendmail__send"
                        variant="contained"
                    >
                        Send
                    </Button>
                    <div className="sendmail__sendIcons">

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMail