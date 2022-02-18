import type { AppProps } from 'next/app';
import Layouts from '@components/layout/Layouts';
import { Global } from '@emotion/react';
import globalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layouts>
            <Global styles={[globalStyles]} />
            <Component {...pageProps} />
        </Layouts>
    );
}

export default MyApp;
