import CardPost from '../../Components/CardPost'
import UpperText from '../../Components/UpperText'
import styles from '../../Styles/Buy.module.css'

import data from "./posts.json"

export default function Buy() {
    return (
        <div className={styles.container}>
            <UpperText heading="BUY" phrase="See what people are offering." />
            <div className={styles.grid} id="grid">
                {data.map((post, index) => {
                    return <CardPost author={post.author} ships={post.ships} price={post.price} image={post.image}/>
                })}
            </div>
        </div >
    )

}