import './App.css';
import Home from './components/home';
import Register from './components/register';
import Consult from './components/consult';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home mensaje="Hola" />}></Route>
          <Route path="/home" element={<Home mensaje="Hola 2" />}></Route>
          <Route path='/register_page' element={<Register />}></Route> 
          <Route path='/consult_page' element={<Consult />} />
        </Routes>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
