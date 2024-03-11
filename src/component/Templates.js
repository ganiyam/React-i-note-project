import { Carousel,Image, Card, Button, Container, Row, Tabs, Tab, Form } from "react-bootstrap";

const Templates = () => {
    return(
        <>
    <Carousel data-bs-theme="dark" style={{width:'100%', marginTop:'100px', margin:'auto', height:'170px'}}>
      <Carousel.Item interval={1000}>
        <div style={{width:'100%', height:'170px', overflow:'hidden'}}>
            <Image
            className="d-block"
            src="../img/temimg5.jpeg"
            alt="First slide"
            style={{objectFit:'cover',height: '100%', width: '100%'}}
            />
        </div>
        <Carousel.Caption>
          <h3>Templates</h3>
          <p className="text-white">크리스마스 한정 디자인</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div style={{width:'100%', height:'170px', overflow:'hidden'}}>
            <Image
            className="d-block"
            src="../img/temimg1.jpeg"
            alt="First slide"
            style={{objectFit:'cover',height: '100%', width: '100%'}}
            />
        </div>
        <Carousel.Caption>
          <h3>Templates</h3>
          <p>신규디자인!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{width:'100%', height:'170px', overflow:'hidden'}}>
            <Image
            className="d-block"
            src="../img/temimg3.jpeg"
            alt="First slide"
            style={{objectFit:'cover',height: '100%', width: '100%'}}
            />
        </div>
        <Carousel.Caption>
          <h3>Templates</h3>
          <p>
            인기디자인
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    <div className="m-auto" style={{width:'90%'}}>
        <h5 className=" mt-5">한눈에 보기</h5>
    
    <Container>
      <Row>
    <Card style={{ width: '18rem',  margin:'auto'}}>
      <Card.Img variant="top" src="../img/look1.jpeg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>기본 템플릿 랏소베어</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/look2.jpeg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>기본 템플릿 알린</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/look3.jpeg" style={{objectFit:'contain',width:'100%', height:'250px'}} />
      <Card.Body>
        <Card.Title>기본 템플릿 스누피</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/photo7.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}} />
      <Card.Body>
        <Card.Title>크리스마스 한정판 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      </Row>
      </Container>
      
    </div>

<h5 className="ms-5">모아보기</h5>
<Card style={{width:'80%', margin:'auto'}} className="mt-5">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="인기디자인">

      <Container>
      <Row>
    <Card style={{ width: '18rem',  margin:'auto'}}>
      <Card.Img variant="top" src="../img/photo2.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>달력 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/photo3.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>인스타 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/photo5.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>멜론 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/photo8.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>인생네컷 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      </Row>
      </Container>
      
      </Tab>
      <Tab eventKey="profile" title="신규디자인">
      <Container>
      <Row>
    <Card style={{ width: '18rem',  margin:'auto'}}>
      <Card.Img variant="top" src="../img/photo7.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>크리스마스 한정판 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/look4.jpg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>무제 노트 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/look5.jpeg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>todolist 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      <Card style={{ width: '18rem' , margin:'auto' }}>
      <Card.Img variant="top" src="../img/look6.jpeg"  style={{objectFit:'contain',width:'100%', height:'250px'}}/>
      <Card.Body>
        <Card.Title>메세지창 템플릿</Card.Title>
        <Button variant="outline-secondary">다운로드</Button>
      </Card.Body> 
      </Card>
      </Row>
      </Container>
      
      </Tab>
      <Tab eventKey="contact" title="디자인 의견">

    <Form className="ms-2" style={{height:'280px'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="abcd@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>자유롭게 의견을 써주세요!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className="d-flex justify-content-end" style={{width:'90%'}}> {/* 오른쪽 정렬을 위한 부모 컨테이너 */}
    <Button variant="secondary" style={{width:'150px'}}>보내기</Button>
      </div>
    </Form>
      </Tab>
    </Tabs>
    </Card>
        </>
    );
}
export default Templates;