import React from 'react';
import '../styles/benefit.css';
import {Link} from 'react-router-dom';

/* 카드 서브메뉴 */
/* 카드헤택 내용 */
function BenefitCategory () {
    return (
        <div>

            <div className="cardNav">
                <div className="cardContent">
                    <div className="cardSee">
                        <p>카드 한눈에 보기</p>
                    </div>

                    <div>
                        <ul className="cardNavList">
                            <li>
                                <Link to="/benefit/shinhan">신한카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/samsung">삼성카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/KB">KB국민카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/hyunda">현대카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/lotte">롯데카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/woori">우리카드</Link>
                            </li>
                            <li >
                                <Link to="/benefit/NH">NH농협카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/hana">하나카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/BC">BC바로카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/IBK">IBK카드</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitCategory;