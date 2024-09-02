import styles from './App.module.css'
import userData from '../userData.json'
export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.bodyContainer}>
                <img
                    className={styles.containerImage}
                    src={userData.avatar}
                    width="200"
                    alt="User avatar"
                />

                <div className={styles.containerHero}>
                    <h2 className={styles.heroName}>{userData.username}</h2>
                    <p className={styles.heroText}>{userData.tag}</p>
                    <p className={styles.heroText}>{userData.location}</p>
                </div>

                <ul className={styles.stats}>
                    <li>
                        <p className={styles.statsText}>
                            Followers {userData.stats.followers}
                        </p>
                    </li>
                    <li>
                        <p className={styles.statsText}>
                            Views {userData.stats.views}
                        </p>
                    </li>
                    <li>
                        <p className={styles.statsText}>
                            Likes {userData.stats.likes}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
