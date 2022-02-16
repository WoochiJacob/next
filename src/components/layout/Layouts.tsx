import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface ILayouts {
    children: React.ReactNode;
}

const Layouts = ({ children }: ILayouts) => {
    const router = useRouter();

    return (
        <LayoutBlock>
            <Header>Header</Header>
            {children}
            <Footer>Footer</Footer>
        </LayoutBlock>
    );
};

const LayoutBlock = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Header = styled.section`
    width: 1280px;
    background: #333;
    margin: 0 auto;
    height: 80px;
    font-size: 40px;
    color: #fff;
`;

const Footer = styled.section`
    width: 1280px;
    background: #333;
    height: 300px;
    font-size: 40px;
    color: #fff;
    margin: auto auto 0 auto;
`;

export default Layouts;
