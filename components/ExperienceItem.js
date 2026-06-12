import styles from '../styles/ExperienceItem.module.css';

export default function ExperienceItem({ experience }) {
    return (
        <div className={styles.experienceItem}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h3>{experience.title}</h3>
                    <p className={styles.company}>{experience.company}</p>
                </div>
                <p className={styles.dates}>{experience.dates}</p>
            </div>
            <p className={styles.location}>{experience.location}</p>
            <p className={styles.summary}>{experience.summary}</p>
            <ul className={styles.highlights}>
                {experience.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </div>
    );
}
