import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children, title = 'Port4lio' }) {
    return (
        <>
            <Head>
                <title>{`${title} | Port4lio`}</title>
                <meta name="description" content="Professional portfolio showcasing skills, projects, and experience" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0f172a" />
            </Head>
            <NavBar />
            <main>
                {children}
            </main>
            <footer className="site-footer">
                <p>&copy; {new Date().getFullYear()} Port4lio. All rights reserved.</p>
            </footer>
        </>
    );
}
