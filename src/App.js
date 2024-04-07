import logo from './logo.svg';
import './App.css';
import Home from './components/page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/actualcomp/Navbar';
import SignUp from './components/page/auth/Signup';
import Login from './components/page/auth/Login';
import Artisanspage from './components/page/auth/Artisanspage';
import Client from './components/page/auth/Client';
import Artisandetails from './components/page/Artisandetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Artisan' element={<Artisanspage/>} />
        <Route path='/client' element={<Client/>} />
        <Route path='/details/:userId' element={<Artisandetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
