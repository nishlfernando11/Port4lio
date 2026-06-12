import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import GitHubSection from '../components/GitHubSection';
import projectsData from '../data/projects.json';
import githubData from '../data/github.json';
import styles from '../styles/Projects.module.css';

export default function Projects() {
    return (
        <Layout title="Projects">
            <div className={styles.container}>
                <SectionHeader
                    title="Featured Projects"
                    subtitle="Showcase of my recent work and portfolio projects"
                />
                <div className={styles.projectsGrid}>
                    {projectsData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <GitHubSection github={githubData} />
            </div>
        </Layout>
    );
}
