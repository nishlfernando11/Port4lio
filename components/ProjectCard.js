import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
    return (
        <div className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                ))}
            </div>
            <div className={styles.links}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Project →
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Code →
                </a>
            </div>
        </div>
    );
}
