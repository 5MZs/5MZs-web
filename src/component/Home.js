import React from 'react';
import '../styles/home.css';
import { useState } from 'react';

function Home() {

    let [wordsQ, a] = useState(['ㅇㅈ',
                                'ㄱㅂㅇㅌㄱ',
                                'ㄱㅅㄱㅈ']);
    let [wordsA, b] = useState(['이자',
                                '기본예탁금',
                                '가상계좌']);
    let [wordsD, c] = useState(['원본인 유동자본(화폐)의 대부로부터 발생하는 수익으로서, 원본액과 사용기간에 비례하여 일정한 이율에 따라 지급되는 금전 기타의 대체물',
                                '위험 감수능력 등을 갖춘 투자자에 한해 시장참여가 가능하도록, 코넥스 시장에서 주식을 매수하려는 투자자에 대해 일정 금액(현행 3천만원) 이상을 예탁하도록 하는 제도',
                                '다수의 고객과 거래하는 기업이 은행으로부터 가상계좌를 발급받아 고객에게 부여하고, 수납대금이 개별 가상계좌에 입금되면 실시간(또는 지정된 시각)으로 모계좌에 자동으로 이체해드리는 서비스']);


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
                        <img src='img/메인_슬라이드_카드.png'></img>
                    </div>
                </div>
            </div>
            
            {/* <div style={ {flex: 'none', height: '10px'} }></div> */}

            <div className="wordCard">
                <h4>금융 용어 찍먹하기</h4>
                <div className="wordCardContainer">
                    <div className="wordCardBox">
                        <div>
                            <div className="quiz">
                                <span>{ wordsQ[0] }</span>
                            </div>
                            <div className="description">
                                <p>{ wordsD[0] }</p>
                            </div>
                        </div>
                    </div>
                    <div className="wordCardBox">
                        <div>
                            <div className="quiz">
                                <span>{ wordsQ[1] }</span>
                            </div>
                            <div className="description">
                                <p>{ wordsD[1] }</p>
                            </div>
                        </div>
                    </div>
                    <div className="wordCardBox">
                        <div>
                            <div className="quiz">
                                <span>{ wordsQ[2] }</span>
                            </div>
                            <div className="description">
                                <p>{ wordsD[2] }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;