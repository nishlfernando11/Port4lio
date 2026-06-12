import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children, title = 'Port4lio' }) {
    return (
        <>
            <Head>
                <title>{title} | Port4lio</title>
                <meta name="description" content="Professional portfolio showcasing skills, projects, and experience" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0f172a" />
            </Head>
            <NavBar />
            <main>
                {children}
            </main>
            <footer style={{ textAlign: 'center', padding: '2rem 1rem', borderTop: '1px solid rgba(148, 163, 184, 0.1)', marginTop: '2rem', color: '#64748b' }}>
                <p>&copy; {new Date().getFullYear()} Port4lio. All rights reserved.</p>
            </footer>
        </>
    );
}
