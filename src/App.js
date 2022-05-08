import { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import SendMail from "./components/SendMail";
import { useSelector, useDispatch } from "react-redux"
import Login from "./components/Login";
import { login } from "./redux/userSlice";
import { auth, onAuthStateChanged } from "./firebase/firebase";

function App() {

  const { user } = useSelector(state=> state.userState)
  const { sendMessageIsOpen } = useSelector(state=> state.mail)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, googleUser=>{
      if(googleUser){
        dispatch(login({
          displayName: googleUser.displayName,
          email: googleUser.email,
          photoUrl: googleUser.photoURL
        }))
      }
    })
  }, [dispatch])

  return (
    <Router>
      {!user
      ? (<Login />)
      : (
          <div className="app">
            <Header/>
            <div className="app__body">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<EmailList />} />
                    <Route path="/mail" element={<Mail />}/>
                </Routes>
                {sendMessageIsOpen && <SendMail />}
            </div>
          </div>)
      }

    </Router>
  );
}

export default App;
