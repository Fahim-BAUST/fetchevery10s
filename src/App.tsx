
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <div data-testid="app">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rawJson" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
