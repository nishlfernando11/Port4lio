import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../context/ThemeContext';
import PageLoader from '../components/PageLoader';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);
    const [routeChanging, setRouteChanging] = useState(false);

    useEffect(() => {
        const handleComplete = () => setInitialLoadComplete(true);
        if (document.readyState === 'complete') {
            handleComplete();
        } else {
            window.addEventListener('load', handleComplete);
            return () => window.removeEventListener('load', handleComplete);
        }
    }, []);

    useEffect(() => {
        const handleStart = () => setRouteChanging(true);
        const handleComplete = () => setRouteChanging(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.events]);

    return (
        <ThemeProvider>
            <PageLoader
                initialLoadComplete={initialLoadComplete}
                routeChanging={routeChanging}
            />
            <div className={`page-content${initialLoadComplete ? ' page-content--visible' : ''}`}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
