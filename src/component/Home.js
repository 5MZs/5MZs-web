import React, { useState } from 'react';
import '../styles/home.css';

// function answer(e){
// /**
//  * 이게 작동되면
//  * 1. 기존에 보여주는 거 지우고
//  * 2. 넘어가는 애니메이션 주고
//  * 3. 정답 보여주기
//  */
//     e.target.classList.toggle('showAnswer');
// }

function Home() {

    let [quiz1, a] = useState(['ㅇㅈ',
                                '이자',
                                '원본인 유동자본(화폐)의 대부로부터 발생하는 수익으로서, 원본액과 사용기간에 비례하여 일정한 이율에 따라 지급되는 금전 기타의 대체물']);
    let [quiz2, b] = useState(['ㄱㅂㅇㅌㄱ',
                                '기본예탁금',
                                '위험 감수능력 등을 갖춘 투자자에 한해 시장참여가 가능하도록, 코넥스 시장에서 주식을 매수하려는 투자자에 대해 일정 금액(현행 3천만원) 이상을 예탁하도록 하는 제도']);
    let [quiz3, c] = useState(['ㄱㅅㄱㅈ',
                                '가상계좌',
                                '다수의 고객과 거래하는 기업이 은행으로부터 가상계좌를 발급받아 고객에게 부여하고, 수납대금이 개별 가상계좌에 입금되면 실시간(또는 지정된 시각)으로 모계좌에 자동으로 이체해드리는 서비스']);
    
    
    // const Card = () => {
    //     // 카드가 뒤집혀 있는지 여부를 상태로 관리
    //     const [flipped, setFlipped] = useState(false);

    //     // 카드 클릭 시 호출되는 함수
    //     const handleClick = () => {
    //         // 현재 상태를 반전시킴
    //         setFlipped(!flipped);
    //     };

//     function answer(e){
// /**
//  * 이게 작동되면
//  * 1. 기존에 보여주는 거 지우고
//  * 2. 넘어가는 애니메이션 주고
//  * 3. 정답 보여주기
//  */
//     e.target.classList.toggle('showAnswer');
// }
    const [flipped, setFlipped] = useState(false);

    function handleCardClick() {
        // 카드 클릭 시 flipped 상태를 토글하여 카드가 뒤집히게 함
        setFlipped(!flipped);
    }



    return (
        <div>

            <div className="mainCard">
                <div className="mainCard_content1">
                    <span>카드 혜택을 지도에 표시해줘요 !</span>
                    <div>
                        <p>사용 중인 카드로 받을 수 있는 혜택을 확인하고</p>
                        <p>지도에 위치까지 확인해요</p>
                    </div>
                    <div className="image">
                        <img src='../img/메인_슬라이드_카드.png'></img>
                    </div>
                </div>
            </div>
            
            {/* <div style={ {flex: 'none', height: '10px'} }></div> */}



            <div className="wordCard">
                <h4>금융 용어 찍먹하기</h4>
                <div className="wordCardContainer">
                <div className={`wordCardBox ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                        <div>
                            <div className="wordCardFront" onClick={handleCardClick}>
                                { quiz1[0] }
                            </div>

                            <div className="wordCardBack">
                                { quiz1[1] }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


export default Home;