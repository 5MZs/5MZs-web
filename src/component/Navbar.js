import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/navbar.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className='navbarBox'>
                <div className='navbarContent'>
                    <div className='navbarLogo'>
                        logo
                    </div>
                    <ul className='navbarList'>
                        <Link to={'/Benefit'}>
                        <li className='navbarItem'>카드 혜택</li>
                        </Link>
                        <Link to={'/Map'}>
                        <li className='navbarItem'>혜택 로드맵</li>
                        </Link>
                        <Link to={'/AccountBook'}>
                        <li className='navbarItem'>가계부</li>
                        </Link>
                        <Link to={'/login'}>
                            <li className='navbarItem'>로그인 / 회원가입</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;