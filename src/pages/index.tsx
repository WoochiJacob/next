import styled from '@emotion/styled';
import Link from 'next/link';

function Home() {
    return (
        <>
            <Container>
                <Link href="/">Index</Link>
            </Container>
            <Container>
                <Link href="/about">About</Link>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
`;

export default Home;
