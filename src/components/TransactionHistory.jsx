import styles from './TransactionHistory.module.css'
import transactions from '../transactions.json'

export default function TransactionHistory() {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((item) => (
                    <tr key={item.id}>
                        <td className={styles.bodyItem}>{item.type}</td>
                        <td className={styles.bodyItem}>{item.amount}</td>
                        <td className={styles.bodyItem}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
