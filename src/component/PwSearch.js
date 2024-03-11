// import "./projectapp.css"
import { Link } from 'react-router-dom' 
import { Button, Form, Row, Col, Container, Checkbox, Card }from 'react-bootstrap'

const PwSearch = () => {

    return(
        <Row>
            <Card className="box1">
                <Container className="  d-flex justify-content-center align-items-center">
                  
                    <Form>
                        <Form.Label className="h2 mb-5 mt-5">비밀번호를 잊으셨습니까?</Form.Label>
                        <div>
                         <h6>가입한 이메일 주소로 임시 비밀번호를 알려드립니다.</h6>
                        </div>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control type="password" placeholder="E-mail" className="ipbox" />
                            </Col>
                        </Form.Group>

                        {/* <Form.Check inline className="mb-4">
                            <Form.Check.Label>아이디 기억</Form.Check.Label>
                            <Form.Check.Input/>
                        </Form.Check> */}
                        <div>
                        <Button variant="dark" className="mb-2" >임시 비밀번호 전송</Button>
                        </div>


                        <div class="register-link">
                        <p>비밀번호가 기억났습니다! <Link to="/login">로그인 하기</Link></p>
                        </div>
                    </Form>
                </Container>
            </Card>
        </Row>
        
    );
};
export default PwSearch;