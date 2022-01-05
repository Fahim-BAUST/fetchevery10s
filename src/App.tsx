
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rawJson/:page/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
