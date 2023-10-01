import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    setAlert({
      message: message,
      type: type
    })
  }

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils -Dark Mode"
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils"
      showAlert("Dark mode has been disabled", "success");
    }
  }
  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} handleMode={handleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>

  );
}
export default App;
