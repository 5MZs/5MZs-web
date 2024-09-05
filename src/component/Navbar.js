import { Link } from 'react-router-dom';
import {React, useEffect} from 'react';
import '../styles/navbar.css';

function Nav() {
    useEffect(() => {
        let token = window.localStorage.getItem('token');
        if (token != null) {
            document.getElementById('loginNav').style.opacity='0'  // 토큰이 있으면 로그인 상태로 설정
        }
    }, []); // 컴포넌트가 처음 렌더링될 때 실행

    return (
        <nav className="navbar">
            <div className='navbarBox'>
                <div className='navbarContent'>
                    <div className='navbarLogo'>
                        logo
                    </div>
                    <ul className='navbarList'>
                        <Link to={'/benefit'} style={{ textDecoration: "none", color:"black", paddingLeft:'30%' }}>
                        <li className='navbarItem'>카드 혜택</li>
                        </Link>
                        <Link to={'/map'} style={{ textDecoration: "none", color:"black", paddingLeft:'30%' }}>
                        <li className='navbarItem'>혜택 로드맵</li>
                        </Link>
                        <Link to={'/accountBook'} style={{ textDecoration: "none", color:"black", paddingLeft:'30%' }}>
                        <li className='navbarItem'>가계부</li>
                        </Link>
                        <Link to={'/login'} style={{ textDecoration: "none", color:"black", paddingLeft:'30%' }}>
                            <li className='navbarItem' id='loginNav'>로그인 / 회원가입</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;