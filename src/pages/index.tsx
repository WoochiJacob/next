import styled from '@emotion/styled';
import Link from 'next/link';

function Home() {
    return (
        <Container>
            <LintBlock>
                <Link
                    href="/"
                    passHref
                >
                    Index
                </Link>
                <Link href="/about">About</Link>
                <Link href="/USDT/BTC">BTC</Link>
                <Link href="/USDT/ETH">ETH</Link>
            </LintBlock>
        </Container>
    );
}

const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
`;

const LintBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
`;

export default Home;
