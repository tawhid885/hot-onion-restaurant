import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import Banner from './Components/Banner/Banner';
import Lunch from './Components/Lunch/Lunch';
import Breakfast from './Components/Breakfast/Breakfast';
import Dinner from './Components/Dinner/Dinner';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>  
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}/>
        <Route path="/lunch" element={<Lunch></Lunch>}/>
        <Route path="/dinner" element={<Dinner></Dinner>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
