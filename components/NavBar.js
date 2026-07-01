import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
    const router = useRouter();

    const isActive = (path) => router.pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Port4lio
                </Link>
                <ul className={styles.navList}>
                        <li>
                            <Link
                                href="/"
                                className={isActive('/') ? styles.active : ''}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/experiences"
                                className={isActive('/experiences') ? styles.active : ''}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={isActive('/projects') ? styles.active : ''}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/education"
                                className={isActive('/education') ? styles.active : ''}
                            >
                                Education
                            </Link>
                        </li>
                </ul>
                <ThemeToggle />
            </div>
        </nav>
    );
}
