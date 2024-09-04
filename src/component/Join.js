// import '../styles/join.css'
// import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
// import {useState} from 'react';
// // import axios frm 'axios';

// function Join() {

//     /* 입력 값 저장 */
//     const [joinValue, setJoinValues] = useState(
//         {userId: '', userPwd: '', userPhone: '', userNickname: '', userCardnum: ''}
//     );

//     /* 아이디 중복검사 */
//     const [idCheckResult, setIdCheckResult] = useState(null);


//     /*
//         입력 필드의 값이 변경될 떄 마다 호출
//         입력 필드의 name 과 value 를 추출
//      */
//     const handleChange = (e) => {
//         setJoinValues(prevValues => {
//             const {name, value} = e.target;
//             return {
//                 ...prevValues,
//                 [name]: value
//             };
//         });
//     };

//     // const checkId = async () => {
//     //     try {
//     //         const response = await fetch('/check-id', { // 아이디 중복 확인을 위한 서버 API 엔드포인트
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify({ userId: joinValue.userId })
//     //         });

//     //         if (!response.ok) {
//     //             throw new Error('네트워크 응답이 실패했습니다.');
//     //         }

//     //         const result = await response.json();
//     //         if (result.isDuplicate) {
//     //             setIdCheckResult('이미 사용 중인 아이디입니다.');
//     //         } else {
//     //             setIdCheckResult('사용 가능한 아이디입니다.');
//     //         }
//     //     } catch (error) {
//     //         console.error('서버 요청 중 오류 발생:', error);
//     //         setIdCheckResult('중복 확인 중 오류가 발생했습니다.');
//     //     }
//     // };

//     /*
//     입력 폼 데이터를 서버로 전송
//  */
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // console.log({SON.stringify(joinValue));

//         try {
//             const response = await fetch('http://15.165.135.177:3000/join', { // 서버 API 엔드포인트로 변경
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(joinValue)
//             });

//             if (!response.ok) {
//                 throw new Error('네트워크 응답이 실패했습니다.');
//             }
//             console.log(JSON.stringify(joinValue))
//             const result = await response.json();
//             console.log('서버 응답:', result);

//             // 성공 시 사용자에게 메시지 표시 또는 페이지 리디렉션

//             window.location.href = 'http://localhost:3000/login';  // 원하는 리디렉션 경로로 변경
//         } catch (error) {
//             console.error('서버 요청 중 오류 발생:', error);
//             // 오류 처리 (예: 사용자에게 오류 메시지 표시)
//         }
//     };

//     return (
//         <div className="joinBox">
//             <div className="joinContent">
//                 <div className="joinMessage">
//                     회원가입
//                 </div>

//                 {/* <div className="joinForm"> */}

//                 <div>
//                     <form className="joinForm" action="#" method='POST'>

//                         <div className="joinInput">
//                             <label>아이디</label>
//                             <input
//                                 type="text"
//                                 name="userId"
//                                 placeholder="6자리 ~ 12자리"
//                                 maxLength="15"
//                                 value={joinValue.userId}
//                                 onChange={handleChange}/>
//                             <button
//                                 type="button"
//                                 className="checkId">
//                                 중복확인
//                             </button>
//                             <br/>
//                             {idCheckResult && <div className="idCheckResult">{idCheckResult}</div>}
//                         </div>

//                         <div className="joinInput">
//                             <label>비밀번호</label>
//                             <input
//                                 type="text"
//                                 name="userPwd"
//                                 placeholder="비밀번호를 입력해주세요"
//                                 maxLength="15"
//                                 value={joinValue.userPwd}
//                                 onChange={handleChange}/>
//                             <br/>
//                         </div>

//                         <div className="joinInput">
//                             <label>전화번호</label>
//                             <input
//                                 type="text"
//                                 name="userPhone"
//                                 placeholder="01012345678"
//                                 maxLength="11"
//                                 value={joinValue.userPhone}
//                                 onChange={handleChange}/>
//                             <br/>
//                         </div>

//                         <div className="joinInput">
//                             <label>닉네임</label>
//                             <input
//                                 type="text"
//                                 name="userNickname"
//                                 placeholder="닉네임을 설정해주세요"
//                                 maxLength="10"
//                                 value={joinValue.userNickname}
//                                 onChange={handleChange}/>
//                             <br/>
//                         </div>

//                         <div className="joinInput">
//                             <label>카드번호</label>
//                             <input
//                                 type="text"
//                                 name="userCardnum"
//                                 placeholder="카드번호를 입력해주세요"
//                                 maxLength="16"
//                                 value={joinValue.userCardnum}
//                                 onChange={handleChange}/>
//                             <br/>
//                         </div>

//                         <div className="submit">
//                         <button type="submit" onClick={ () => {handleSubmit()} }>가입하기</button>
//                         </div>

//                     </form>
//                 </div>
//             </div>

//         </div>
//         // </div>
//     )
// }

// export default Join;


import '../styles/join.css';
import { useState } from 'react';

function Join() {
    // 입력 값 저장
    const [joinValue, setJoinValues] = useState({
        user_id: '', password: '', phone_number: '', nick_name: '', card_no: ''
    });

    // 아이디 중복검사
    // const [idCheckResult, setIdCheckResult] = useState(null);

    // 입력 필드의 값이 변경될 때마다 호출
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJoinValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    // 입력 폼 데이터를 서버로 전송
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://15.165.135.177:3000/join', { // 서버 API 엔드포인트
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(joinValue)
            });
                console.log(response);
                console.log({joinValue});
                console.log(JSON.stringify(joinValue));
            if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다.');
            }
            const result = await response.json();
            console.log('서버 응답:', result);

            // 성공 시 사용자에게 메시지 표시 또는 페이지 리디렉션
            window.location.href = 'http://localhost:3000/login';  // 원하는 리디렉션 경로로 변경
        } catch (error) {
            console.error('서버 요청 중 오류 발생:', error);
            // 오류 처리 (예: 사용자에게 오류 메시지 표시)
        }
    };

    return (
        <div className="joinBox">
            <div className="joinContent">
                <div className="joinMessage">
                    회원가입
                </div>

                <div>
                    <form className="joinForm" onSubmit={handleSubmit}>
                        <div className="joinInput">
                            <label>아이디</label>
                            <input
                                type="text"
                                name="user_id"
                                placeholder="6자리 ~ 12자리"
                                maxLength="15"
                                value={joinValue.user_id}
                                onChange={handleChange}
                            />
                            {/* <button
                                type="button"
                                className="checkId">
                                중복확인
                            </button>
                            <br />
                            {idCheckResult && <div className="idCheckResult">{idCheckResult}</div>} */}
                        </div>

                        <div className="joinInput">
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력해주세요"
                                maxLength="15"
                                value={joinValue.password}
                                onChange={handleChange}/>
                            <br />
                        </div>

                        <div className="joinInput">
                            <label>전화번호</label>
                            <input
                                type="text"
                                name="phone_number"
                                placeholder="01012345678"
                                maxLength="11"
                                value={joinValue.phone_number}
                                onChange={handleChange}
                            />
                            <br />
                        </div>

                        <div className="joinInput">
                            <label>닉네임</label>
                            <input
                                type="text"
                                name="nick_name"
                                placeholder="닉네임을 설정해주세요"
                                maxLength="10"
                                value={joinValue.nick_name}
                                onChange={handleChange}
                            />
                            <br />
                        </div>

                        <div className="joinInput">
                            <label>카드번호</label>
                            <input
                                type="text"
                                name="card_no"
                                placeholder="카드번호를 입력해주세요"
                                maxLength="16"
                                value={joinValue.card_no}
                                onChange={handleChange}
                            />
                            <br />
                        </div>

                        <div className="submit">
                            <button type="submit">가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Join;
