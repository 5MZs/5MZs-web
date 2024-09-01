import React from 'react';
import '../../styles/benefit.css';
// import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

/* BC 캐러셀 컴포넌트 */
const BcImages = [
  {
    id: 0,
    url: "https://d1c5n4ri2guedi.cloudfront.net/card/2458/card_img/31078/2458card_1.png",
  },
  {
    id: 1,
    url: "https://d1c5n4ri2guedi.cloudfront.net/card/2644/card_img/32094/2644card.png",
  },
  {
    id: 2,
    url: "https://d1c5n4ri2guedi.cloudfront.net/card/2346/card_img/32523/2346card.png",
  },
  {
    id: 3,
    url: "https://d1c5n4ri2guedi.cloudfront.net/card/2418/card_img/28128/2418card.png",
  },
  {
    id: 4,
    url: "https://d1c5n4ri2guedi.cloudfront.net/card/2557/card_img/33458/2557card.png",
  }
];

function BC() {
  return (
      <div className='carouselContainer'> 
        <div className='carouselBox'>
          <div id='btnL' onClick={btnLeft}>
            왼
          </div>
          <div >
            <img className='carouselImage' src='https://d1c5n4ri2guedi.cloudfront.net/card/2458/card_img/31078/2458card_1.png' alt=''></img>
            <img className='carouselImage' src='https://d1c5n4ri2guedi.cloudfront.net/card/2644/card_img/32094/2644card.png' alt=''></img>
            <img className='carouselImage carouselMainImage' src='https://d1c5n4ri2guedi.cloudfront.net/card/2346/card_img/32523/2346card.png' alt=''></img>
            <img className='carouselImage' src='https://d1c5n4ri2guedi.cloudfront.net/card/2418/card_img/28128/2418card.png' alt=''></img>
            <img className='carouselImage' src='https://d1c5n4ri2guedi.cloudfront.net/card/2557/card_img/33458/2557card.png' alt=''></img>
          </div>
          <div id='btnR'>
            오  
          </div>
        </div>
      </div>
  )
}

let now = 2;
function btnLeft(){
  // 클래스를 뺀다. 그리고 왼쪽에 있는 카드를 클래스 넣는다
  // 맨 왼쪽 카드는 빠지고 기존 카드 왼쪽으로 1칸 이동. 오른쪽카드 차례차례 왼쪽으로 한칸씩 이동.

    // 이미지 슬라이드 넣기.
  let 너 = document.getElementsByClassName('carouselImage')[now];
  너.classList.toggle('carouselMainImage');
  now=now+1

  /* 
   // 오른쪽 전환 효과 추가.
  너.style.transition = 'transform 0.5s ease-in-out';
  너.style.transform = 'translateX(-173.5px)';
  let 다음 = document.getElementsByClassName('carouselImage')[now];
  다음.classList.toggle('carouselMainImage')
  // 새로운 이미지 불러오고 기존 이미지 삭제 */

} 





export default BC