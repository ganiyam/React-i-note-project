import { useState } from "react";
import { Container, Navbar, Button, Nav, Stack , Card, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./projectapp.css"
import Typewriter from 'typewriter-effect/dist/core';

import { useEffect } from "react";

function describe(){
    const desc = document.getElementById('desc');
    new Typewriter(desc,{
        strings: descMe,
        autoStart: true,
        loop: true,
        pauseFor: 1000
    });   
}
const descMe = ['굿노트 템플릿은 i-NOTE'];

const MainPage = () => {

    useEffect(describe, []); 
    return (
        <Container className="p-3">
            <Container className="p-5 bg-white" id="topcontainer">
                <h1 className="header" id="desc"></h1>
                <h3>
                    i-NOTE 에서 특별한 템플릿을 써보세요.
                </h3>
            </Container>
            <Container className="d-flex justify-content-center p-5">
                <Link to="/templates" className="btn btn-outline-secondary btn-lg mx-2 border-2">
                    더 보러 가기
                </Link>
            </Container>

            <Row>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo1.png" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>격자 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}s> 
              
              많은 종류의 격자 템플릿을 사용해보세요.
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>

      <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="../img/photo2.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>달력 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              달력 템플릿으로 원하는 달의 달력으로 꾸며서 사용하세요.
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
        </Col>
        
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo3.jpg" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>인스타그램 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              인스타그램 템플릿을 통해 사진을 꾸며보세요.  
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
        </Col>
       <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo4.jpg" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>심플 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              심플한 템플릿으로 원하는 것들을 넣어보세요.
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row className="mt-5">
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo5.jpg" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>멜론 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              좋아하는 노래를 넣어 꾸며보세요.
            </Card.Text>
            <Button variant="dark"href="/photo">다운로드</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo6.jpg" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>공책 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              원하는 것들을 넣어 꾸며보세요.
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo7.jpg" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>크리스마스 한정판 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              <div style={{color:'red', textAlign:'right', fontSize:'13px', fontFamily:'bold'}}>크리스마스 전용!!</div>  
              2023년도에는 크리스마스 한정판 템플릿으로 크리스마스를 장식하세요.
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/photo8.jpg" style={{objectFit:'contain',width:'100%', height:'250px'}}/>
          <Card.Body>
            <Card.Title>인생네컷 템플릿</Card.Title>
            <Card.Text style={{height:'70px'}}>
              원하는 사진을 넣어 꾸며보세요.
            </Card.Text>
            <Button variant="dark">다운로드</Button>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      <Row>
      <Card className="bg-white text-black mt-5" style={{border:'none'}}>
      <Card.Img src="../img/mainpageimg.jpeg" alt="Card image" 
            style={{objectFit:'cover',width:'100%', height:'200px', background:'white'}}/>
      <Card.ImgOverlay className="mt-5">
        <Card.Title className="text-center">i-NOTE</Card.Title>
        <Card.Text className="text-center">
          i-NOTE로 여러 템플릿을 경험해 보세요!
        </Card.Text>
      </Card.ImgOverlay>
      </Card>

      </Row>
            
        </Container>
        
    );
}
export default MainPage;