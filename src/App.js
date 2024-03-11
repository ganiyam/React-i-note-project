import React from 'react';
import Signup from './component/Signup';
import MainPage from './component/MainPage';
import Login from './component/Login';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate, BrowserRouter } from 'react-router-dom';
import PwSearch from './component/PwSearch';
// import { Container, Navbar, Button, Nav, Stack, Image } from "react-bootstrap";
import Header from './component/Header';
import Templates from './component/Templates';
import Footer from './component/Footer';
import Money from './component/Money';
import MyPage from './component/MyPage';
import Jiwon from './component/Jiwon';
import Photo from './component/Photo';



  const AppRouter = () => {
  
    return (
      <>
      <div style={{paddingTop:'90px'}}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/Signup' element={<Signup />} /> {/* 회원가입 페이지 */}
            <Route path='/Login' element={<Login />} /> {/* 로그인 페이지 */}
            <Route path='/pwsearch' element={<PwSearch />} /> {/*비밀번호 찾기 페이지*/}
            <Route path='/templates' element={<Templates />} /> {/*템플릿 상세 페이지*/}
            <Route path='/money' element={<Money />} /> {/*요금제 상세 페이지*/}
            <Route path='/mypage' element={<MyPage/>}/>{/*mypage 상세 페이지*/}
            <Route path='/jiwon' element={<Jiwon/>}/> {/*고객센터 상세 페이지 */}
            <Route path='/photo' element={<Photo/>}/>
          </Routes>
        </div>
      </>
  );
}
function App() {
  return (
   <Router>
    <Header/>
    <AppRouter/>
    <Footer/>
  </Router>
  );
}


export default App;