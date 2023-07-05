import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate]=useState(false); //true가 되면 로그인, false는 로그아웃
  useEffect(()=>{
    console.log("로그인");
  },[authenticate]); // 의존성배열 : []안 값이 바뀔 때 마다 다시 실행됨
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />}/>
      </Routes>
    </>
  );
}

export default App;
