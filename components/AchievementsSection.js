import SectionHeader from './SectionHeader';
import styles from '../styles/AchievementsSection.module.css';

export default function AchievementsSection({ achievements }) {
    return (
        <section className={styles.achievementsSection}>
            <SectionHeader title="Key Achievements" subtitle="Notable accomplishments and milestones" />
            <div className={styles.achievementsGrid}>
                {achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievementCard}>
                        <h3>{achievement.title}</h3>
                        <p>{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
