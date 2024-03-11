import { useState,useEffect } from "react";
import { Container, Navbar, Button, Nav, Stack, Image } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { getAuth,onAuthStateChanged, signOut } from "firebase/auth";
import { render } from "@testing-library/react";

const Header = () => {
    
  const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const nav = useNavigate();
    const auth = getAuth();




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const email = user.email;
                setUserEmail(email);
                setIsLoggedIn(true);
            } else {
                setUserEmail('');
                setIsLoggedIn(false);
            }
            setInit(true)
        })

        return () => unsubscribe(); 
    }, [auth]);



    //로그아웃
    const onLogoutClick = () => {
        signOut(auth)
        setUserEmail('');
        nav('/');
    };


    //로그인 상태 렌더링 함수
    const renderButtons = () =>{
        if (init) {
            if (isLoggedIn) {
                return (
                    <>
                        <p style={{fontSize:'15px', marginRight:'20px',  margin:'auto'}}>{`${userEmail} 님`}</p>
                        <Button href="/mypage" variant="secondary" size='lg' style={{ width: '120px', fontSize: '17px' }}> 마이페이지 </Button>
                        <Button variant="dark" size='lg' style={{ width: '120px', fontSize: '17px' }} onClick={onLogoutClick}>로그아웃</Button>
                    </>
                );
            } else {
                return (
                    <>
                        <Button variant="dark" href='/Login' size='lg' style={{ width: '120px', fontSize: '17px' }}>로그인</Button>
                        <Button variant="secondary" size='lg' href='/Signup' className='w-20' style={{ width: '120px', fontSize: '17px' }}>회원가입</Button>
                    </>
                );
            }
        } else {
            return null;
        }
    }


    return(
        <Navbar expand="lg" bg="white" fixed="top" className="bg-body-white" > 
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{background:'white'}}>
                
                <Navbar.Brand><Nav.Link href='/' className='navlink'>
                    <Image src='../img/titleLogo.png' style={{width:'100px'}}/>
                    </Nav.Link></Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="/" className="navlink">Home</Nav.Link> {/*홈이동 */}
                    <Nav.Link href="/templates" className="navlink">템플릿</Nav.Link> {/*바로 시작하기 랑 같은 페이지하면 될듯 */}
                    <Nav.Link href="/money" className="navlink">요금제</Nav.Link>
                    <Nav.Link href="/jiwon" className="navlink">고객센터</Nav.Link>
                </Nav>
                 
                <Stack direction="horizontal" gap={2} className='ml-auto'>
                        {/* {isLoggedIn ? (
                             <> 삼항 연산자로 넣어두면 로그인 로그아웃 값이 생겼다가 마이페이지 로그아웃 값으로 넘어가는게 보이는 문제가 발생, 렌더링 문제
                             <p style={{fontSize:'15px', marginRight:'20px',  margin:'auto'}} >{`${userEmail} 님`}</p>
                            <Button href="/mypage" variant="secondary"size='lg' style={{ width: '120px', fontSize: '17px' }}> 마이페이지 </Button>
                            <Button variant="dark" size='lg' style={{ width: '120px', fontSize: '17px' }} onClick={onLogoutClick}>로그아웃</Button>
                            </>
                        ) : (
                            <>
                                <Button variant="dark" href='/Login' size='lg' style={{ width: '120px', fontSize: '17px' }}>로그인</Button>
                                <Button variant="secondary" size='lg' href='/Signup' className='w-20' style={{ width: '120px', fontSize: '17px' }}>회원가입</Button>
                            </>
                        )} */}
                        {renderButtons()}
                    </Stack>
                </Navbar.Collapse>
                </Container> 
        </Navbar> 
    );
}
export default Header;