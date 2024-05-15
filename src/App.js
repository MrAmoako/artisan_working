import logo from './logo.svg';
import './App.css';
import Home from './components/page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/actualcomp/Navbar';
import SignUp from './components/page/auth/Signup';
import Login from './components/page/auth/Login';
import Artisanspage from './components/page/auth/Artisanspage';
import Client from './components/page/auth/Client';
import Uploadgallery from './components/page/auth/firebaseconfig/uploadgallery';
import Gallery from './components/page/auth/Gallery';
import Alreadyuploadedpic from './components/page/Alreadyuploadedpic';
import Updaterecords from './components/page/Updaterecords';
import Profilepic from './components/page/Profilepic';


function App() {
  return (
    <div className="App" >
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Artisan' element={<Artisanspage/>} />
        <Route path='/client' element={<Client/>} />
        <Route path='/ugallery' element={<Uploadgallery/>} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/already" element={<Alreadyuploadedpic />} />
        <Route path='/records' element={<Updaterecords/>} />
        <Route path='/profile' element={<Profilepic/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
