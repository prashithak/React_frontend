import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Employee from './components/Employee';
import Home from './components/Home';
import Dashbd from './components/Dashbd';

function App() {
  
  return (
    <div className="App" > 
    
    <Navbar/>
    {/* <div  className = "image" style = {imageStyle}> */}
    
     <Routes>
      <Route path='/' element={<Dashbd/>}></Route>
      <Route  path='/h' element={<Home/>}></Route>
      <Route path='/e' element={<Employee/>}></Route>
     </Routes>
    </div>
    // </div>
    
  );
}

export default App;
