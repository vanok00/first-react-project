import Profile from '../Profile/Profile.jsx'
import friends from '../../friends.json'
import FriendList from '../FriendList/FriendList.jsx'
import transactions from '../../transactions.json'
import userData from '../../userData.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx'

export default function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    )
}
