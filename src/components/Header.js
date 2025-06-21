import React from 'react';

function Header() {
    return(
        <header>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '3% 2%'}}>
                <img src="/insta_logo2.png" alt="Instagram Logo"
                style={{ height: '30px' }}
                />
                <div style={{position: 'relative'}}>
                    <button onClick={() => alert('아이디와비번을 내놓아라')} style={{
                        color: 'white',
                        fontWeight: '500',
                        border: 'none',
                        borderRadius: '6px',
                        backgroundColor: '#2692fb',
                        padding: '7px 16px'
                    }}>로그인</button>
                    <button onClick={() => alert('이 가짜인스타에 가입하시겠다고요?!')} style={{
                        color: '#2692fb',
                        fontWeight: '500',
                        border: 'none',
                        borderRadius: '6px',
                        backgroundColor: 'white',
                        padding: '7px 16px',
                        marginLeft: '5px'
                    }}>가입하기</button>
                </div>
            </div>
        </header>
    );
}

export default Header;