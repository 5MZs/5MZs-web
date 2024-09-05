import React from 'react';
import BenefitCategory from './BenefitCategory';
import '../styles/benefit.css';

function CardNav() {
    return (
        <div className="benefitAll">
          <BenefitCategory /> 
          <div className="cardInfoBox">
            <div className="cardInfoName">
              <div className="cardInfoWord">
                <h1><span>카드별 혜택</span>을 한눈에 모아봤어요.</h1>
                <h2>원하는 카드의 혜택을 골라서 확인해보세요.</h2>
              </div>
            </div>
            <div>
              <ul>
                <li><img src="https://d1c5n4ri2guedi.cloudfront.net/card/274/card_img/20496/274card.png" alt="Card 1" /></li>
                <li><img src="https://d1c5n4ri2guedi.cloudfront.net/card/49/card_img/27705/49card.png" alt="Card 2" /></li>
                <li><img src="https://d1c5n4ri2guedi.cloudfront.net/card/2441/card_img/28283/2441card.png" alt="Card 3" /></li>
                <li><img src="https://d1c5n4ri2guedi.cloudfront.net/card/2559/card_img/33437/2690card.png" alt="Card 4" /></li>
                <li><img src="https://d1c5n4ri2guedi.cloudfront.net/card/2719/card_img/35783/2719card.jpg" alt="Card 5" /></li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default CardNav;
