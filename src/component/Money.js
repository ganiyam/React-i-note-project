import { Card, Col, Container, Row, Tab, Tabs, Button } from "react-bootstrap";

const Money = () =>{
    return(

    <div style={{width:'80%', margin:'auto', marginBottom:'100px'}} className="mt-5">
        <h2 style={{textAlign:'center', fontWeight:'bold'}}>부담없이 사용하는 <br/>합리적인 요금제</h2>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-5" >
            <Tab eventKey="home" title="월간">

        <Container style={{width:'80%'}}>
        <Row>
            <Card style={{ width: '18rem', height: '400px', margin:'auto', border:'1px solid #bbb' }}>
            <Card.Body>
                <Card.Title>무료</Card.Title>
                <Card.Subtitle className="mb-2 mt-3 " style={{fontSize:'35px', fontFamily:'bold'}}>₩0</Card.Subtitle>
                <Card.Text>
                i-NOTE 를 시작하는 모든 사람을 위한 요금제입니다.
                </Card.Text>

                <Button variant="outline-secondary" style={{color:'black'}}>무료로 시작하기</Button>
                <Card.Text className="mt-3" style={{fontFamily:'bold'}}>
                    평생 무료
                </Card.Text>
                <Card.Text>
                   <div> 3만 개 이상의 템플릿 무료 사용 가능</div>
                   <div> 1GB의 개인 저장 공간</div>
                   <div> 협업을 위한 공유 드라이브 1개</div>

                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '400px', margin:'auto', border:'3px solid black' }}>
            <Card.Body>
                <Card.Title>Pro</Card.Title>
                <Card.Subtitle className="mb-2 mt-3" style={{fontSize:'35px', fontFamily:'bold'}}>₩10,000</Card.Subtitle>
                <Card.Text>
                모든 편집 기능과 콘텐츠를 이용할 수 있고, 더 효율적인 팀 협업이 가능합니다.
                </Card.Text>

                <Button variant="dark" className=" ">영업팀 문의</Button>
                <Card.Text className="mt-3" style={{fontFamily:'bold'}}>
                    무료의 모든 기능 + 
                </Card.Text>

                <Card.Text>
                   <div> 제한 없이 프리미엄 템플릿 사용</div>
                   <div> 10GB의 개인 저장 공간</div>
                   <div> 협업을 위한 공유 드라이브 10개</div>

                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '400px', margin:'auto', border:'1px solid #bbb' }}>
            <Card.Body>
                <Card.Title>EnterPrise</Card.Title>
                <Card.Subtitle className="mb-2 mt-3" style={{fontSize:'35px', fontFamily:'bold'}}>₩20,000</Card.Subtitle>
                <Card.Text>
                    대규모 조직을 위해 SSO 연동, API 연동을 지원합니다.
                </Card.Text>

                <Button variant="outline-secondary" style={{color:'black'}}>영업팀 문의</Button>

                <Card.Text className="mt-3" style={{fontFamily:'bold'}}>
                    Pro 모든 기능 + 
                </Card.Text>

                <Card.Text>
                   <div>싱글 사인온(SSO)</div>
                   <div> 100GB의 개인 저장 공간</div>
                   <div> 협업을 위한 공유 드라이브 100개</div>

                </Card.Text>
            </Card.Body>
            </Card>
        </Row>
        </Container>

      </Tab>
      <Tab eventKey="profile" title="연간">
        <Container style={{width:'80%'}}>
            <Row>
            <Card style={{ width: '18rem', height: '400px', margin:'auto', border:'1px solid #bbb' }}>
            <Card.Body>
                <Card.Title>무료</Card.Title>
                <Card.Subtitle className="mb-2 mt-3 " style={{fontSize:'35px', fontFamily:'bold'}}>₩0</Card.Subtitle>
                <Card.Text>
                i-NOTE 를 시작하는 모든 사람을 위한 요금제입니다.
                </Card.Text>

                <Button variant="outline-secondary" style={{color:'black'}}>무료로 시작하기</Button>
                <Card.Text className="mt-3" style={{fontFamily:'bold'}}>
                    평생 무료
                </Card.Text>
                <Card.Text>
                   <div> 3만 개 이상의 템플릿 무료 사용 가능</div>
                   <div> 1GB의 개인 저장 공간</div>
                   <div> 협업을 위한 공유 드라이브 1개</div>

                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '400px', margin:'auto', border:'3px solid black' }}>
            <Card.Body>
                <Card.Title>Pro</Card.Title>
                <Card.Subtitle className="mb-2 mt-3" style={{fontSize:'35px', fontFamily:'bold'}}>₩110,000</Card.Subtitle>
                <Card.Text>
                모든 편집 기능과 콘텐츠를 이용할 수 있고, 더 효율적인 팀 협업이 가능합니다.
                </Card.Text>

                <Button variant="dark" className=" ">한 달간 무료로 시작하기</Button>
                <Card.Text className="mt-3" style={{fontFamily:'bold'}}>
                    무료의 모든 기능 + 
                </Card.Text>
                <Card.Text>
                   <div> 제한 없이 프리미엄 템플릿 사용</div>
                   <div> 10GB의 개인 저장 공간</div>
                   <div> 협업을 위한 공유 드라이브 10개</div>

                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '400px', margin:'auto', border:'1px solid #bbb' }}>
            <Card.Body>
                <Card.Title>EnterPrise</Card.Title>
                <Card.Subtitle className="mb-2 mt-3" style={{fontSize:'35px', fontFamily:'bold'}}>영업팀 문의</Card.Subtitle>
                <Card.Text>
                    대규모 조직을 위해 SSO 연동, API 연동을 지원합니다.
                </Card.Text>

                <Button variant="outline-secondary" style={{color:'black'}}>영업팀 문의</Button>
                <Card.Text className="mt-3" style={{fontFamily:'bold'}}>
                    Pro 모든 기능 + 
                </Card.Text>

                <Card.Text>
                   <div>싱글 사인온(SSO)</div>
                   <div> 100GB의 개인 저장 공간</div>
                   <div> 협업을 위한 공유 드라이브 100개</div>

                </Card.Text>
            </Card.Body>
            </Card>
        </Row>
        </Container>
            </Tab>
        </Tabs>
    </div>
    );
}
export default Money;
