import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
function Home() {
    // 여러 개의 퀴즈 카드 데이터
    const [quizCards] = useState([
        {
            front: 'ㅈㄱㅈㄱ',
            back: '정기적금',
            description: '매월 일정금액을 정기적으로 납입하고 만기일에 원리금을 지급받는 상품'
        },
        // 추가 카드 데이터
        {
            front: 'ㅇㅁㅈㅅ',
            back: '연말정산',
            description: '1년간의 총급여액에 대한 근로소득세액을 소득세법에 따라 계산한 뒤 매월 급여 지급 시 간이세액표에 의해 이미 원천징수한 세액과 비교해 이듬해 1월분 급여 지급 시 차액을 돌려주는 제도'
        },
        {
            front: 'ㅈㄹㅅㅍㄷ',
            back: '적립식펀드',
            description: '목돈을 마련하기 위해 적금 상품처럼 일정 시기마다 일정한 금액을 지속해서 펀드에 투자하는 것'
        },
        {
            front: 'ㅅㅇㅈㅅ',
            back: '신용점수',
            description: '개인이 경제활동 내에서 빌린 돈을 정해진 기간 내에 상환할 수 있는 능력인 신용도를 점수화한 것'
        },
        {
            front: 'ㅂㅁㅈㅅ',
            back: '빅맥지수',
            description: '맥도날드의 ‘빅맥(big mac)’의 판매가격을 기준으로 하여 각국의 상대적 물가수준과 통화가치를 비교하는 것'

        }
        // 필요한 만큼 더 추가
    ]);
    const [flipped, setFlipped] = useState(Array(quizCards.length).fill(false));
    const navigate = useNavigate();

    function handleCardClick(index) {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    }

    function handleButtonClick(path) {
        navigate(path); // 지정된 경로로 이동
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
                        <p className='under'>
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
                        >
                            <div className="wordCardInner"
                            onClick={() => handleCardClick(index)}>
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

                        <div className="moveBtn">
                        <button onClick={() => handleButtonClick('/benefit')}>카드 혜택 확인</button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainCard3">
                <div className="mainCardContent1">
                    <span>카드 혜택 모음을 톺아보기 !</span>
                    <div>
                        <p>혜택 로드맵을 통해</p>
                        <p>사용 중인 카드로 받을 수 있는 혜택을 <br />
                            지도에 ~ 위치까지~ 확인 가능!👌
                        </p>

                        <div className="moveBtn">
                        <button onClick={() => handleButtonClick('/Map')}>혜택 로드맵</button>
                        </div>
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
                        
                        <div className="moveBtn">
                        <button onClick={() => handleButtonClick('/AccountBook')}>가계부</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;