import "./projectapp.css"
import { Link, useNavigate } from 'react-router-dom' 
import { Button, Form, Row, Col, Container, Checkbox, Card }from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    function handleLogin(event){
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential)
            const user = userCredential.user;
            // 로그인 성공 후 메인 페이지로 이동
            nav('/');
        })
        .catch((error) => {
            console.log('로그인 실패!')
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return(
        <Row style={{width:'100%'}}>
            <Card className="box1">
                <Container className="  d-flex justify-content-center align-items-center">
                    <Form>
                        <Form.Label className="h2 mb-5 mt-5">로그인</Form.Label>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control type="email" placeholder="이메일" className="ipbox" 
                                id="signInEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                 />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control type="password" placeholder="비밀번호" className="ipbox"
                                id="signInPwd"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                            <Form.Check 
                                    type={'checkbox'}
                                    id={'checkbox'}
                                    label={'아이디 기억하기'}
                                    style={{width:'140px', margin:'auto'}}
                                    className="mb-4"
                            />
                        <div>
                        <Button variant="dark" className="mb-2" id="singInBtn" onClick={handleLogin}>로그인</Button>
                        </div>


                        <div >
                        <p>계정이 없으십니까? <Link to="/signup">회원가입</Link></p>
                        </div>
                        <div >
                            <p>비밀번호를 잊으셨습니까? <Link to="/pwsearch">비밀번호 찾기</Link></p>
                        </div>
                    </Form>
                </Container>
            </Card>
        </Row>
        
    );
};
export default Login;