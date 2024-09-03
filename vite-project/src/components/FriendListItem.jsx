import styles from './FriendsList.module.css'
import friends from '../friends.json'
export default function FriendListItem() {
    return (
        <div className={styles.container}>
            <img
                className={styles.containerImage}
                src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
                width="80"
                alt="User avatar"
            />
            <div>
                <p className={styles.friendName}>{friends.name}</p>
                <p className={styles.friendName}>{friends.isOnline}</p>
            </div>
        </div>
    )
}
