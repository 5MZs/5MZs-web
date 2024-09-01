import React from 'react';
import '../styles/benefit.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

/* 카드 서브메뉴 */
/* 카드헤택 내용 */
function CardNav() {
  return(
    <div>
        <nav className='CardNav'>
          <div>
            <p>카드 한눈에 보기</p> 
          </div>
            <div>
              <ul>
              <li Classname='CardNavList'><Link to="/benefit/shinhan">신한카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/samsung">삼성카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/KB">KB국민카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/hyunda">현대카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/lotte">롯데카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/woori">우리카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/NH">NH농협카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/hana">하나카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/BC">BC바로카드</Link></li>
              <li Classname='CardNavList'><Link to="/benefit/IBK">IBK카드</Link></li>
              </ul>
            </div>
        </nav>

        <div>
          <h1>
          카드 혜택 뿌시기
          </h1>
          <h2>
              MZ 여러분들, 가장 필요로 하는 카드 혜택은? <br/>
              알뜰하고 실속있는 카드 혜택 모음 확인해보세요!
          </h2>
          <p>
          신용카드, 쓰는 건 참 쉬운데 혜택을 밑바닥까지 싹싹 긁어모아 쓰려면 어떤 카드를 써야 할지 참 어렵죠? 신용카드 혜택을 일일이 비교해보려 해도 종류가 너무 많아 어떤 게 내 소비패턴에 잘 맞는지도 헷갈리고요.
          나에게 맞는 신용카드를 찾으려면 우선 내 소비 패턴이나 성향을 먼저 파악해보세요. 그리고 어떤 종류의 혜택들이 있는지 먼저 살펴봐야 에 따라 두루 사용 가능한 범용카드나 주유할인카드와 같이 특정 업종에 특화된 특화 카드로 나눌 수 있어요. 더불어 할인 혹은 적립으로 나뉘기도 하죠. 이번 글에서는 어디서든 골고루 혜택받을 수 있는 범용카드, 할인 혜택을 많이 받을 수 있는 신용카드 중심으로 추천해봤습니다.
          </p>
        </div>
      </div>

  );
}


export default CardNav;