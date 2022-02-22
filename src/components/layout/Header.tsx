import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import PravangLogo from '@img/pravang_logo_m.png';

function Header() {
    return (
        <Container>
            <Navigarion>
                <Logo
                    src={PravangLogo}
                    alt="logo"
                />
                <MenuGroup>
                    <Menu>거래소</Menu>
                    <Menu>입출금</Menu>
                    <Menu>투자내역</Menu>
                    <Menu>고객지원</Menu>
                </MenuGroup>
            </Navigarion>
            <UserInfo>
                <MenuGroup>
                    <Menu>로그인</Menu>
                    <Menu>회원가입</Menu>
                </MenuGroup>
            </UserInfo>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 80px;
    background: #000;
    color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
`;

const Logo = styled(Image)`
    height: 40px;
    margin-right: 40px;
`;

const Navigarion = styled.div`
    display: flex;
    align-items: center;
`;

const UserInfo = styled.div``;

const MenuGroup = styled.div`
    display: flex;
    align-items: center;
`;

const Menu = styled.div`
    margin: 0 10px;
    font-size: 14px;
`;

export default Header;
