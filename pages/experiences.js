import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ExperienceItem from '../components/ExperienceItem';
import experienceData from '../data/experience.json';
import styles from '../styles/Experiences.module.css';

export default function Experiences() {
    return (
        <Layout title="Experience">
            <div className={styles.container}>
                <SectionHeader
                    title="Professional Experience"
                    subtitle="My career journey and professional achievements"
                />
                <div className={styles.experiencesList}>
                    {experienceData.experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
