import '../styles/login.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';


function Login() {

    const [loginValue, setLoginValues] = useState(
        { inputId: '', inputPwd: '' }
    );


    return (
        <div className='loginBox'>
            <div className='loginMessage'>
                로그인
            </div>
            <div className='loginForm'>
                <div>
                    <form className='loginInput' action='#' method='POST'>
                        <input 
                            className="inputId" 
                            type="text" 
                            placeholder="아이디를 입력하세요" 
                            value={ loginValue.inputId }/><br/>
                        <input
                            className="inputPwd"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            value={ loginValue.inputPwd }/><br/>

                        <div className='loginBtn'>
                            <button type='submit'>로그인</button>
                            {/* <input type='submit' value='로그인' className='login-input'/><br></br> */}
                        </div>
                        <div className='loginBtn'>
                            <button type='submit'><Link to="/join">회원가입</Link></button>
                            {/* <input type='submit' value='회원가입' className='login-input'/> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;