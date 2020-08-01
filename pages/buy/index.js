import CardPost from '../../Components/CardPost'
import UpperText from '../../Components/UpperText'
import styles from '../../Styles/Buy.module.css'

export default function Buy() {
    return (
        <div className={styles.container}>
            <UpperText heading="BUY" phrase="See what people are offering."/>
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