import styles from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.container}>
            <div className={styles.bodyContainer}>
                <img
                    className={styles.containerImage}
                    src={image}
                    width="200"
                    alt="User avatar"
                />
                <h2 className={styles.heroName}>{name}</h2>
                <p className={styles.heroText}>{tag}</p>
                <p className={styles.heroText}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li>
                    <p className={styles.statsText}>
                        Followers {stats.followers}
                    </p>
                </li>
                <li>
                    <p className={styles.statsText}>Views {stats.views}</p>
                </li>
                <li>
                    <p className={styles.statsText}>Likes {stats.likes}</p>
                </li>
            </ul>
        </div>
    )
}
