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
import { useSelector } from "react-redux"



function App() {

  const { sendMessageIsOpen } = useSelector(state=> state.mail)

  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;
