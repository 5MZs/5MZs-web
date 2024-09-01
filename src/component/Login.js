import '../styles/login.css';

function Login() {
    return (
        <div className='loginBox'>
            <div className='loginMessage'>
                감성을 건드리는 로그인 요청멘트
            </div>
            <div className='loginForm'>
                <div>
                    <form className='loginInput' action='#' method='POST'>
                        <input className="id-input" type="text" placeholder="이메일을 입력하세요" value=''/><br/>
                        <input
                            className="pwd-input"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            value=''/><br/>
                            <div className='login-input-box'>
                                <input type='submit' value='로그인' className='login-input'/><br></br>
                            </div>
                            <div className='login-input-box'>
                        <input type='submit' value='회원가입' className='login-input'/>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;