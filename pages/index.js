import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import InterestsSection from '../components/InterestsSection';
import AchievementsSection from '../components/AchievementsSection';
import landingData from '../data/landing.json';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <Layout title="Home">
            <div className={styles.container}>
                <HeroSection
                    headline={landingData.headline}
                    summary={landingData.summary}
                />
                <SkillsSection skills={landingData.skills} />
                <InterestsSection interests={landingData.interests} />
                <AchievementsSection achievements={landingData.achievements} />
            </div>
        </Layout>
    );
}
