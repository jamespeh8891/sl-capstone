import React from 'react';
import './App.css';
import Header from './components/Loyout/Header';
import TopHeader from './components/Loyout/TopHeader';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Pages/Home';
// import Body from './components/Loyout/Body';
// import Button from './components/Loyout/Button';
import Living from './components/Pages/LivingInError';
import Goodnight from './components/Pages/Goodnight';
import Broken from './components/Pages/Broken';
import Login from './components/Login/Login';
import PostForm from './Server/PostForm';
import SignupForm from './components/Login/SignupForm';
import Footer from './components/Loyout/Footer';



function App() {

  const navigate = useNavigate();

  const nav = (location) => {
    navigate(location)
  }

  return (
    <div className='App'>
    <Header />
    <TopHeader />
    <Footer />
     <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='bab' element={<Broken />} />
      <Route path='gag' element={<Goodnight />} />
      <Route path='lie' element={<Living />} />
      <Route path='log' element={<Login />} />
      <Route path="/signup" element={<SignupForm nav={nav} />} />
    </Routes>
    </main>
  
    </div>
  );
}

export default App;
