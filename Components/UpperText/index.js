import styles from "../../styles/UpperText.module.css"

export default function UpperText({ heading, phrase }) {
    return (
        <>
            <div className={styles.text}>
                <h1 className={styles.heading1}>{heading}</h1>
                <p className={styles.paraph}>{phrase}</p>
            </div>

        </>
    )
}