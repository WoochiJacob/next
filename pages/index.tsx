import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home: NextPage = () => {
    const router = useRouter();

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
};

const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
`;

export default Home;
