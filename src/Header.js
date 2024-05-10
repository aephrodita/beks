import logo from './images/new-logo-desktop.svg';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Header(){

    const [hasToken, setHasToken] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            setHasToken(true);
        }

    }, [])

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/",{state: {message: "Вы вышли из аккаунта"}});
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-left">
                    <Link to="/">
                        <span>
                            <img src={logo} alt="" />
                        </span>
                    </Link>
                    <div className="dropdown-wrapper">
                        <span className="title">
                            Алматы
                            <svg className="dropdown-icon large" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77552 5.41257C5.8995 5.52914 6.1005 5.52914 6.22448 5.41257L10.907 1.00958C11.031 0.89301 11.031 0.704005 10.907 0.587431C10.783 0.470856 10.582 0.470856 10.4581 0.587431L6 4.78808L1.54194 0.587431C1.41796 0.470856 1.21696 0.470856 1.09298 0.587431C0.969006 0.704005 0.969006 0.89301 1.09298 1.00958L5.77552 5.41257Z" fill="currentColor" stroke="currentColor"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="header-btns-group justify-end hide-xs">
                    {/* <div className="header-locale-changer mr-50">
                        <div className="header-locale-changer__label">
                            <span>Рус</span>
                            <svg className="dropdown-icon large" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77552 5.41257C5.8995 5.52914 6.1005 5.52914 6.22448 5.41257L10.907 1.00958C11.031 0.89301 11.031 0.704005 10.907 0.587431C10.783 0.470856 10.582 0.470856 10.4581 0.587431L6 4.78808L1.54194 0.587431C1.41796 0.470856 1.21696 0.470856 1.09298 0.587431C0.969006 0.704005 0.969006 0.89301 1.09298 1.00958L5.77552 5.41257Z" fill="currentColor" stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div> */}
                    {
                        hasToken ? (
                            <div className="header-auth-menu">
                                <div className="header-auth-menu-icon">
                                    <div className="icon-btn strokes">
                                        <button onClick={logout} style={{background: "none", border: "none"}}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70px', width: '70px' }}>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: 'absolute' }}>
                                                    <circle cx="20" cy="20" r="19.5" stroke="#303044"></circle>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none" style={{ position: 'absolute' }}>
                                                    <path d="M19.7778 21.9999V19.7777C19.7778 18.599 19.3095 17.4685 18.476 16.635C17.6425 15.8015 16.5121 15.3333 15.3333 15.3333H6.44444C5.2657 15.3333 4.13524 15.8015 3.30175 16.635C2.46825 17.4685 2 18.599 2 19.7777V21.9999" stroke="#303044" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M10.8889 10.8889C13.3435 10.8889 15.3333 8.89904 15.3333 6.44444C15.3333 3.98985 13.3435 2 10.8889 2C8.4343 2 6.44446 3.98985 6.44446 6.44444C6.44446 8.89904 8.4343 10.8889 10.8889 10.8889Z" stroke="#303044" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg> */}
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to={"/sign-in"}><button className="btn new" type="button">Войти</button></Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

