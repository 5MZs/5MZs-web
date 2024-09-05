import React, { useState } from 'react';
import '../styles/home.css';
function Home() {
    // 여러 개의 퀴즈 카드 데이터
    const [quizCards] = useState([
        {
            front: 'ㅇㅈ',
            back: '이자',
            description: '원본인 유동자본(화폐)의 대부로부터 발생하는 수익으로서, 원본액과 사용기간에 비례하여 일정한 이율에 따라 지급되는 금전 기타의 대체물'
        },
        // 추가 카드 데이터
        {
            front: '다른 용어1',
            back: '다른 설명1',
            description: '설명1'
        },
        {
            front: '다른 용어2',
            back: '다른 설명2',
            description: '설명2'
        },
        // 필요한 만큼 더 추가
    ]);
    const [flipped, setFlipped] = useState(Array(quizCards.length).fill(false));
    function handleCardClick(index) {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    }
    return (
        <div>
            <div className="mainCard1">
                <div className="mainCardContent1">
                    <span>금융 용어 Check~! </span>
                    <div>
                        <p>금융용어에 대해 얼마나 아시나요?</p>
                        <p>금융 단어 게임을 통해 점검해보아요😉</p>
                        <br/>
                        <p className=''>
                            👇
                        </p>
                    </div>
                </div>
            </div>
            <div className="wordCard">
                <h4>금융 용어 찍먹하기</h4>
                <div className="wordCardContainer">
                    {quizCards.map((card, index) => (
                        <div
                            key={index}
                            className={`wordCardBox ${flipped[index] ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="wordCardInner">
                                <div className="wordCardFront">
                                    {card.front}
                                </div>
                                <div className="wordCardBack">
                                    {card.back}
                                </div>
                            </div>
                            <div className='wordContent'>
                                {card.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 나머지 섹션은 변경하지 않음 */}
            <div className="mainCard2">
                <div className="mainCardContent1">
                    <span>카드 혜택을 뿌셔보자 !</span>
                    <div>
                        <p>#알뜰 #실속 #카드 혜택</p>
                        <p>나에게 필요한 카드 혜택은? <br />
                            카드 혜택 모음 확인해보세요😁
                        </p>
                    </div>
                </div>
            </div>
            <div className="mainCard3">
                <div className="mainCardContent1">
                    <span>카드 혜택 톺아보기 !</span>
                    <div>
                        <p>혜택 로드맵을 통해</p>
                        <p>사용 중인 카드로 받을 수 있는 혜택을 <br />
                            지도에 ~ 위치까지~ 확인 가능!👌
                        </p>
                    </div>
                </div>
            </div>
            <div className="mainCard4">
                <div className="mainCardContent1">
                    <span>플렉스 해버렸지 뭐야 !</span>
                    <div>
                        <p>머니머니해도 돈쓰는게 최고</p><br />
                        <p>효율적인 소비습관을 위해 금융생활권 확인할 수 있는
                            플렉스 맵 이용해보세요😎
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;