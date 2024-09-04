import styles from './FriendsList.module.css'
import friends from '../friends.json'
export default function FriendListItem() {
    return (
        <div className={styles.friendsList}>
            {friends.map((friend) => (
                <div key={friend.id} className={styles.container}>
                    <img src={friend.avatar} width="80" alt="User avatar" />
                    <div>
                        <p className={styles.friendName}>{friend.name}</p>
                        <p
                            className={
                                friend.isOnline ? styles.online : styles.offline
                            }
                        >
                            {friend.isOnline ? 'Online' : 'Offline'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
