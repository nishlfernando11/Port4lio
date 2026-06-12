import styles from '../styles/HeroSection.module.css';

export default function HeroSection({ headline, summary }) {
    return (
        <section className={styles.hero}>
            <h1 className={styles.headline}>{headline}</h1>
            <p className={styles.summary}>{summary}</p>
        </section>
    );
}
