import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";

const Jiwon = () => {
  return (
    <>
    <div>

      <Image src="../img/jiwon.png" style={{width:'100%', height:'175px'}} alt="Card image" />
      
    </div>
    
    <Accordion style={{width:'60%', margin:'auto'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q. 아이디를 모르겠어요. 로그인이 안돼요.</Accordion.Header>
        <Accordion.Body style={{width:'90%', margin:'auto'}}>
          <div>i-NOTE에 어떤 이메일 주소로 가입했는지 기억이 안나거나 로그인이 안된다면?</div>

          <div className='mt-3'>i-NOTE는 이메일 주소를 아이디로 사용하고, 다양한 가입 및 로그인 방법을 제공합니다.</div>

          

          <div>가입 방법에 따라 로그인하는 방법이 다를 수 있는데, 가입한 이메일 주소 및 가입 정보를 혼동하여 문의를 주시는 경우가 종종 있습니다.</div>

          

          <div>만약 i-NOTE에 가입한 아이디가 생각나지 않거나 로그인이 안되는 경우, 다음과 같이 해보세요.</div>

          

          <div className='mt-5'><Link to="#home" >내 이메일 주소가 i-NOTE에 가입되어 있는지 확인하고 임시 비밀번호 발급받기</Link></div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q.i-NOTE에서 제공하는 모든 템플릿을 사용해도 되나요? </Accordion.Header>
        <Accordion.Body style={{width:'90%', margin:'auto'}}>
          <div>A. 사용 중인 요금제에 따라 사용할 수 있는 템플릿이 다를 수 있어요.</div>

          
          <div className='mt-3'>i-NOTE에서 제공하는 글꼴은 모두 제휴사와 정식계약을 맺거나 사용허가를 받아 제공하는 것들로,
          i-NOTE 에디터에서 디자인을 만드실 때 자유롭게 활용하실 수 있어요.
          단, 섬네일에 왕관 표시가 있는 프리미엄은 Pro 요금제 또는 Enterprise 요금제를 이용중인 워크스페이스에서만 사용할 수 있어요. 프리미엄 글꼴을 이용하시려면 워크스페이스의 요금제를 업그레이드해 주세요.

          또한 무료 요금제에서 사용 가능한 템플릿에도 프리미엄 글꼴이 포함될 수 있고, 템플릿 안에서 워터마크가 표시되어 있는 글꼴이 프리미엄 글꼴이예요. 무료로 이용을 원하시면 프리미엄 글꼴을 삭제하고 다른 글꼴로 대체하시면 돼요!

          만일, 템플릿에 사용된 글꼴을 그대로 사용을 원하시면 워크페이스를 Pro 요금제로 업그레이드해 주세요. </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Q.작업했던 문서가 보이지 않아요 !</Accordion.Header>
        <Accordion.Body style={{width:'90%', margin:'auto'}}> 
        <div>A. 작업한 디자인 문서가 보이지 않을 때, 간혹 미리캔버스 사용법 혼동으로 인해 문서를 못 찾으시는 경우가 있어요.

          그리고, 저장이 정상적으로 되었는데도 안 되었다고 문의를 주시기도 합니다.

          위 내용에 대한 대표적인 원인과 해결방법을 아래에서 확인해보세요.</div>

          

          

          <div className="mt-3">1. 복수의 계정 사용으로 인해 문서가 저장된 계정을 혼동
          문서가 보이지 않는다는 문의의 절반 이상이, 여러 계정을 가입 후 사용하다가 계정을 혼동해서 발생한 것이에요.</div>

          

          <div className='mt-2'>✅ 해결방법
          다른 이메일 주소(혹은 소셜 계정)으로 i_NOTE에 가입하신 적이 있는지 확인해보세요.</div>

          

          

          <div className='mt-3'>2. 다른 디자인으로 덮어쓰기되어 저장
          문서를 저장하고 다른 디자인으로 작업하시는 경우,

          에디터 상단의 문서 제목을 변경하는것으로 새 문서가 저장되는것으로 오인하시는 경우가 있어요.

          에디터 상단의 제목을 변경하는것은, 현재 작업중인 문서 제목만을 변경하는것으로 새 문서가 생성되는건 아니예요.</div>
</Accordion.Body>
      </Accordion.Item>
    <Accordion.Item eventKey='3'>
        <Accordion.Header>Q. 장시간 사용하니 사이트가 느려졌어요 !</Accordion.Header>
        <Accordion.Body style={{width:'90%', margin:'auto'}}> 
        <div> A. i-NOTE를 이용하는 웹 브라우저를 장기간 활성화하거나, PC를 종료하지 않고 지속적으로 이용하면

            메모리(데이터)가 쌓여 다소 느려질 수 있어요.</div>

            

           <div> 만약, 이용이 어려울 정도로 느려졌을 경우, 먼저 작업중인 디자인을 안전하게 저장을 마친 뒤에

           아래 3단계에 따라서 i-NOTE를 재실행 해보세요.</div>

            

          <div className='mt-4'>  1. 웹 페이지 새로고침</div>

           <div className='mt-1'> 2. 웹 브라우저 완전히 종료 후 재실행</div>

            <div className='mt-1'>3. 컴퓨터 재부팅 후 홈페이지 접속</div>
            </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='4'>
        <Accordion.Header>Q.한글 등 편집 프로그램에서 재편집해도 되나요?</Accordion.Header>
        <Accordion.Body style={{width:'90%', margin:'auto'}}>A. 네 하셔도되요!</Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </>
  );
}

export default Jiwon;