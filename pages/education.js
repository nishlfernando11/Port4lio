import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import EducationItem from '../components/EducationItem';
import educationData from '../data/education.json';
import styles from '../styles/Education.module.css';

export default function Education() {
    return (
        <Layout title="Education">
            <div className={styles.container}>
                <SectionHeader
                    title="Education & Qualifications"
                    subtitle="Academic background and professional certifications"
                />

                <div className={styles.section}>
                    <h2>Academic Education</h2>
                    <div className={styles.itemsList}>
                        {educationData.education.map((edu, index) => (
                            <EducationItem key={index} item={edu} type="education" />
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>Professional Certifications</h2>
                    <div className={styles.itemsList}>
                        {educationData.certifications.map((cert, index) => (
                            <EducationItem key={index} item={cert} type="certification" />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
