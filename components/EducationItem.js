import styles from '../styles/EducationItem.module.css';

export default function EducationItem({ item, type = 'education' }) {
    return (
        <div className={styles.educationItem}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h3>{item.degree || item.credential}</h3>
                    <p className={styles.institution}>{item.institution || item.issuer}</p>
                </div>
                <p className={styles.dates}>{item.dates}</p>
            </div>
            {item.location && <p className={styles.location}>{item.location}</p>}
            <ul className={styles.details}>
                {item.details && item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
}
