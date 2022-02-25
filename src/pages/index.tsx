import styled from '@emotion/styled';
import Link from 'next/link';

import { motion } from 'framer-motion';

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
                <Link href="/exchange/USDT/BTC">BTC</Link>
                <Link href="/exchange/USDT/ETH">ETH</Link>
            </LintBlock>

            <Section>
                <Animation
                    animate={{ x: [-100, 0] }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                >
                    안녕
                </Animation>

                <motion.circle
                    cx={500}
                    animate={{ cx: [null, 100, 200] }}
                    transition={{ duration: 3, times: [0, 0.2, 1] }}
                >
                    dddd
                </motion.circle>
            </Section>
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

const Section = styled.section`
    margin-top: 60px;
`;

const Animation = styled(motion.div)`
    font-size: 14px;
`;

export default Home;
