import React from 'react';
import styled from '@emotion/styled';

// Components
import Header from '@components/layout/Header';
// import Footer from '@components/layout/Footer';

interface ILayouts {
    children: React.ReactNode;
}

function Layouts({ children }: ILayouts) {
    return (
        <LayoutBlock>
            {/* 헤더 */}
            <Header />

            {/* 컨텐츠 */}
            {children}

            {/* 푸터 */}
            {/* <Footer /> */}
        </LayoutBlock>
    );
}

const LayoutBlock = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 80px;
`;

export default Layouts;
