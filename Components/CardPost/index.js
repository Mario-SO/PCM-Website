import styles from "../../styles/CardPost.module.css"

export default function CardPost({ author, ships, price, image }) {
    return (

        <div className={styles.wrap}>
            <div className={styles.cardpost}>
                <img className={styles.postimage} src={image} />
                <div className={styles.container}>
                    <h2>{author}</h2>
                    <p>[{ships}]</p>
                    <p>{price}$</p>
                </div>
            </div>
        </div>

    )
}