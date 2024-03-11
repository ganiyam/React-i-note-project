import "./projectapp.css"
import { useNavigate } from 'react-router-dom';

import React, { useState, useRef } from 'react';
import { Button, Form, Row, Col, Container, Checkbox, Card, Modal }from 'react-bootstrap';

import {auth } from "./firebaseinit"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc } from "firebase/firestore";


const Signup2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false); 
    const auth = getAuth();
    const nav = useNavigate();

    function handleSignup(event) {
        event.preventDefault();
        const emailValue = document.getElementById('signUpEmail').value;
        const pwdValue = document.getElementById('signUpPwd').value;

        if (!emailValue.trim() || !pwdValue.trim()) {
            setWarning('정보를 모두 입력해주세요!');
        } else if (pwdValue.length < 6) {
            setWarning('비밀번호는 6자리 이상이어야 합니다!');
        } else {
            setWarning('');
            setEmail(emailValue);
            setPassword(pwdValue);

            createUserWithEmailAndPassword(auth, emailValue, pwdValue)
                .then((userCredential) => {
                    console.log(userCredential);
                    setSignupSuccess(true); // 회원가입 성공을 true로 설정
                })
                .catch((error) => {
                    console.error(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }

    if (signupSuccess) {
        // 로그인 성공 후 메인 페이지로 이동
        nav('/');
    }

    return (
        <Row style={{width:'100%'}}>
            <Card className="box1">
                <Container className="  d-flex justify-content-center align-items-center">
                    <Form> 
                        <Form.Label className="h2 mb-5 mt-5">회원가입</Form.Label>
                        <Form.Group as={Row} className="mt-3" >
                            <Col>
                                <Form.Control 
                                    type="email" 
                                    placeholder="이메일" 
                                    className="ipbox"
                                    id="signUpEmail"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 mt-3">
                            <Col>
                                <Form.Control 
                                    type="password" 
                                    placeholder="비밀번호" 
                                    className="ipbox"
                                    id="signUpPwd"
                                />
                               <p style={{color:'red', fontSize:'13px'}}>{warning}</p>
                            </Col>

                            <div>
                                <Form.Check 
                                    type={'checkbox'}
                                    id={'checkbox'}
                                    label={'다음 약관에 모두 동의합니다.'}
                                    style={{width:'230px', margin:'auto', fontFamily:'bold'}}
                                />
                            </div>
                                <div style={{fontSize:'15px'}}>
                                <Form.Check 
                                    type={'checkbox'}
                                    id={'checkbox'}
                                    label={'아이노트 이용약관 동의'}
                                    style={{width:'230px', margin:'auto', textAlign:'left'}}
                                />
                                    
                                <Form.Check 
                                    type={'checkbox'}
                                    id={'checkbox'}
                                    label={'개인정보 취급방침에 대한 안내'}
                                    style={{width:'230px', margin:'auto', textAlign:'left'}}
                                />
                                </div>
                        </Form.Group>
                        <Button variant="dark" className="mb-2 mt-3" id="signUpBtn" onClick={handleSignup}>회원가입</Button>
                    </Form>
                </Container>
            </Card>
        </Row>
    );
};
export default Signup2;