import CardPost from '../../Components/CardPost'
import styles from '../../Styles/Buy.module.css'

export default function Buy() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.heading1}>BUY</h1>
                <p className={styles.paraph}>See what others have to offer</p>
            </div>
            <div className={styles.grid}>
                <CardPost author="Mario" ships="Usa" price="100" image="https://i.imgur.com/gSkx3iK.jpg" />
                <CardPost author="Mario" ships="Usa" price="100" image="https://i.imgur.com/gSkx3iK.jpg" />
                <CardPost author="Mario" ships="Usa" price="100" image="https://i.imgur.com/gSkx3iK.jpg" />
                <CardPost author="Mario" ships="Usa" price="100" image="https://i.imgur.com/gSkx3iK.jpg" />
                <CardPost author="Mario" ships="Usa" price="100" image="https://i.imgur.com/gSkx3iK.jpg" />
                <CardPost author="Mario" ships="Usa" price="100" image="https://i.imgur.com/gSkx3iK.jpg" />
            </div>
        </div >
    )
}