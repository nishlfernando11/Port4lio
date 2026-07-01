import { useEffect, useState } from 'react';
import styles from '../styles/PageLoader.module.css';

export default function PageLoader({ initialLoadComplete, routeChanging }) {
    const [splashVisible, setSplashVisible] = useState(true);
    const [splashExiting, setSplashExiting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [routeProgress, setRouteProgress] = useState(0);

    useEffect(() => {
        if (!initialLoadComplete) {
            const start = Date.now();
            const interval = setInterval(() => {
                const elapsed = Date.now() - start;
                const eased = 1 - Math.pow(1 - Math.min(elapsed / 1200, 1), 3);
                setProgress(Math.min(eased * 92, 92));
            }, 16);
            return () => clearInterval(interval);
        }

        setProgress(100);
        setSplashExiting(true);
        const timer = setTimeout(() => setSplashVisible(false), 700);
        return () => clearTimeout(timer);
    }, [initialLoadComplete]);

    useEffect(() => {
        if (!routeChanging) {
            setRouteProgress(100);
            const timer = setTimeout(() => setRouteProgress(0), 400);
            return () => clearTimeout(timer);
        }

        setRouteProgress(0);
        const start = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const eased = 1 - Math.pow(1 - Math.min(elapsed / 800, 1), 2);
            setRouteProgress(Math.min(eased * 85, 85));
        }, 16);
        return () => clearInterval(interval);
    }, [routeChanging]);

    return (
        <>
            {splashVisible && (
                <div
                    className={`${styles.splash} ${splashExiting ? styles.splashExit : ''}`}
                    aria-hidden="true"
                >
                    <div className={styles.splashInner}>
                        <div className={styles.logoRing}>
                            <div className={styles.logoPulse} />
                            <span className={styles.logoText}>Port4lio</span>
                        </div>
                        <div className={styles.progressTrack}>
                            <div
                                className={styles.progressBar}
                                style={{ transform: `scaleX(${progress / 100})` }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {routeProgress > 0 && (
                <div className={styles.routeBar} aria-hidden="true">
                    <div
                        className={styles.routeBarFill}
                        style={{
                            transform: `scaleX(${routeProgress / 100})`,
                            opacity: routeChanging ? 1 : 0,
                        }}
                    />
                </div>
            )}
        </>
    );
}
