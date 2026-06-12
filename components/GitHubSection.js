import styles from '../styles/GitHubSection.module.css';

export default function GitHubSection({ github }) {
    return (
        <section className={styles.githubSection}>
            <h2>Open Source & GitHub</h2>
            <p className={styles.description}>{github.description}</p>

            <div className={styles.reposContainer}>
                <h3>Featured Repositories</h3>
                <div className={styles.reposList}>
                    {github.keyRepos.map((repo, index) => (
                        <div key={index} className={styles.repoCard}>
                            <h4>{repo.name}</h4>
                            <p>{repo.description}</p>
                            <a href={repo.url} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.profileCTA}>
                <a href={github.profileUrl} target="_blank" rel="noopener noreferrer" className={styles.profileButton}>
                    Visit My GitHub Profile →
                </a>
            </div>
        </section>
    );
}
