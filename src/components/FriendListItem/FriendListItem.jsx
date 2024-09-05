import styles from './FriendListItem.module.css'

export default function FriendListItem({ friend }) {
    return (
        <div className={styles.container}>
            <img src={friend.avatar} width="80" alt="User avatar" />

            <p className={styles.friendName}>{friend.name}</p>
            <p className={friend.isOnline ? styles.online : styles.offline}>
                {friend.isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    )
}
