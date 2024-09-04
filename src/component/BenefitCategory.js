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
                                <Link to="/benefit/SHINHAN">신한카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/SAMSUNG">삼성카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/KB">KB국민카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/SAEMAEULGEUMGO">새마을금고카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/WOORI">우리카드</Link>
                            </li>
                            <li >
                                <Link to="/benefit/NH">NH농협카드</Link>
                            </li>
                            <li>
                                <Link to="/benefit/TOSS">Toss카드</Link>
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