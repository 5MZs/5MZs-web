import '../styles/login.css';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import {useState} from 'react';

function Login() {

    const [loginValue, setLoginValues] = useState({
        user_id: '', password: ''
    });

    // 아이디 중복검사
    // const [idCheckResult, setIdCheckResult] = useState(null);

    // 입력 필드의 값이 변경될 때마다 호출
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    // 입력 폼 데이터를 서버로 전송
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://15.165.135.177:3000/login', { // 서버 API 엔드포인트
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginValue)
            });
                console.log(response);
                console.log({loginValue});
                console.log(JSON.stringify(loginValue));
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



    // const [loginValue, setLoginValues] = useState({user_id: '', password: ''});




    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setLoginValues(prevValues => ({
    //         ...prevValues,
    //         [name]: value
    //     }));
    // };

    // // 입력 폼 데이터를 서버로 전송
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://15.165.135.177:3000/join', { // 서버 API 엔드포인트
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(loginValue)
    //         });
    //             console.log(response);
    //             console.log({loginValue});
    //             console.log(JSON.stringify(loginValue));
    //         if (!response.ok) {
    //             throw new Error('네트워크 응답이 실패했습니다.');
    //         }
    //         const result = await response.json();
    //         console.log('서버 응답:', result);

    //         // 성공 시 사용자에게 메시지 표시 또는 페이지 리디렉션
    //         window.location.href = 'http://localhost:3000/login';  // 원하는 리디렉션 경로로 변경
    //     } catch (error) {
    //         console.error('서버 요청 중 오류 발생:', error);
    //         // 오류 처리 (예: 사용자에게 오류 메시지 표시)
    //     }
    // };

    return (
        <div className='loginBox'>
            <div className='loginMessage'>
                로그인
            </div>
            <div className='loginForm'>
                <div>
                    <form className='loginInput' onSubmit={handleSubmit} method='POST'>
                        <input
                            className='inputId'
                            type="text"
                            placeholder="아이디를 입력하세요"
                            name="user_id"
                            value={loginValue.user_id}
                            onChange={handleChange}/><br/>
                        <input
                            className='inputPwd'
                            type="password"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            value={loginValue.password}
                            onChange={handleChange}/><br/>

                        <div className='loginBtn'>
                            <button type='submit'>로그인</button>
                            {/* <input type='submit' value='로그인' className='login-input'/><br></br> */}
                        </div>
                        <div className='loginBtn'>
                            <button type='button'>
                                <Link
                                    to="/join"
                                    style={{
                                        textDecoration: 'none'
                                    }}>회원가입</Link>
                            </button>
                            {/* <input type='submit' value='회원가입' className='login-input'/> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;