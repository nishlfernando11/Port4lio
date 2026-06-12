import styles from '../styles/SectionHeader.module.css';

export default function SectionHeader({ title, subtitle }) {
    return (
        <div className={styles.sectionHeader}>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}
