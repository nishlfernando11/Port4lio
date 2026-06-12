import SectionHeader from './SectionHeader';
import styles from '../styles/InterestsSection.module.css';

export default function InterestsSection({ interests }) {
    return (
        <section className={styles.interestsSection}>
            <SectionHeader title="Interests & Passions" subtitle="What drives my work and growth" />
            <ul className={styles.interestsList}>
                {interests.map((interest, index) => (
                    <li key={index} className={styles.interestItem}>
                        <span className={styles.icon}>→</span>
                        {interest}
                    </li>
                ))}
            </ul>
        </section>
    );
}
