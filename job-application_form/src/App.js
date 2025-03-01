import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobApplicationForm from './Components/JobApplicationForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<JobApplicationForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
