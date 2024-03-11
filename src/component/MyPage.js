import { Container, Row, Col, Image, Button, Form, Table } from "react-bootstrap";
import { Link } from 'react-router-dom' ;
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";


const MyPage = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // 사용자가 로그인한 경우, 이메일 뜨게해줌
                setEmail(user.email);
            } else {
                //로그인 되어있지 않으면 마이페이지가 뜨지 않음
            }
        });

         return () => unsubscribe();
    }, []);


    return(
        <div className="mt-5">
            <h2 style={{textAlign:'center', fontFamily:'bold'}}>마이 페이지</h2>
            <Container>
                <h3 style={{fontFamily:'bold'}}>나의 계정</h3>
                
            <Row>
                <Col xs={1} md={1}>
                <Image src="./img/mypage.jpg" roundedCircle style={{width:'100px', height:'100px', border:'1px solid #ddd'}} />
                </Col>
                <Col className="ms-4">
                <div>나의 프로필</div>
                <Button variant="secondary" className="" style={{background:'#eee',height:'38px', border:'none', color:'black', width:'130px', fontSize:'14px'}}>사진 업로드</Button>
                </Col>
            </Row>
            <Row className="mt-4"> 
                <div>이름</div>
                <Form.Group as={Row} className="mb-3">
                    <Col>
                        <Form.Control type="text" style={{width:'350px'}}/>
                    </Col>
                </Form.Group>

                <div>이메일</div>
                <Form.Group as={Row} className="mb-3">
                    <Col > 
                        <div className="d-flex align-items-center text-secondary" style={{width:'350px', 
                        border:'1px solid #ddd', borderRadius:'5px', height:'40px', color:'black'}}>
                                {email}
                        </div>
                    </Col>
                </Form.Group>
            </Row>
            <Row>
                <Button className="ms-4" variant="secondary" style={{width:'150px'}}>변경사항 저장</Button>
            </Row>
            <Row className="mt-5">
                <div style={{borderTop:'1px solid #ddd'}}></div>
                <Link to="#home" className="mt-5" style={{color:'red', fontSize:'14px'}}>계정 삭제</Link>
                <div className="mt-3" style={{fontSize:'13px', fontFamily:'bold'}}>계정 삭제시 내가 저장해 둔 워크스페이스 내 드라이브와 하위 항목이 모두 삭제됩니다.</div>
            </Row>

            </Container>
            <Container className="mt-5">
                <h3 style={{fontFamily:'bold'}}>구독 설정</h3>
                <div className="mt-4" style={{fontFamily:'bold'}}>사용중인 요금제</div>
                <div className="mt-2" style={{fontSize:'13px'}}>현재 무료 요금제를 이용중입니다.</div>
                <Button className="mt-3" variant="secondary" style={{width:'400px', backgroundColor:'#f0f0f0',border:'none', color:'black', fontSize:'13px'}}>Pro로 업그레이드</Button>
            </Container>
            <Container className="mt-5">
                <h3 style={{fontFamily:'bold'}}>결제 내역</h3>
                <Table>
                    <thead>
                        <tr >
                            <td style={{color:'#aaa'}}>결제일</td>
                            <td style={{color:'#aaa'}}>설명</td>
                            <td style={{color:'#aaa'}}>구매자명</td>
                            <td style={{color:'#aaa'}}>결제 수단</td>
                            <td style={{color:'#aaa'}}>결제 금액</td>
                            <td style={{color:'#aaa'}}>주문 번호</td>
                            <td style={{color:'#aaa'}}>결제 상태</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023년 12월 9일</td>
                            <td>무료판</td>
                            <td>장가은</td>
                            <td>신용카드</td>
                            <td>₩0</td>
                            <td>20201550-20201548-20201586</td>
                            <td>결제 완료</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
export default MyPage;