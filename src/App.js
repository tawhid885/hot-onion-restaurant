import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";import Lunch from './Components/Lunch/Lunch';
import Breakfast from './Components/Breakfast/Breakfast';
import Dinner from './Components/Dinner/Dinner';
import AuthProvider from "./Context/AuthProvider";
import Detail from './Components/Detail/Detail';
import Cart from './Components/Cart/Cart';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Shipping from './Components/Shipping/Shipping';
import Placeorder from './Components/Placeorder/Placeorder';


function App() {
  return (
    <div>
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>  
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}/>
        <Route path="/lunch" element={<Lunch></Lunch>}/>
        <Route path="/dinner" element={<Dinner></Dinner>}/>
        <Route path="/details/:tag/:id" element={<Detail></Detail>}/>
        <Route path="/cart" element={<PrivateRoute><Cart></Cart></PrivateRoute>}/>
        <Route path="/shipping" element={<PrivateRoute><Shipping></Shipping></PrivateRoute>}/>
        <Route path="/placeorder" element={<PrivateRoute><Placeorder></Placeorder></PrivateRoute>}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </AuthProvider>
    </div>
  );
}

export default App;
