import SectionHeader from './SectionHeader';
import styles from '../styles/SkillsSection.module.css';

export default function SkillsSection({ skills }) {
    return (
        <section className={styles.skillsSection}>
            <SectionHeader title="Core Skills" subtitle="Technologies and expertise I specialize in" />
            <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillTag}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
