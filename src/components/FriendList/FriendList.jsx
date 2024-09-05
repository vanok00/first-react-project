import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './Friendlist.module.css'
export default function FriendList({ friends }) {
    return (
        <ul className={styles.friendsList}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </ul>
    )
}
