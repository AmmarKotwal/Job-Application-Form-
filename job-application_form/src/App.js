import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
