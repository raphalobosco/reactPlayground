import { useState } from 'react'
import styles from './Thermos.module.scss'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const today = new Date()

export default function Thermos() {


    const [degree, setDegree] = useState(12)
    let temperature = degree

    const hot = () => {
        if (temperature >= 18) {
            return `${styles.hot}`
        } else {
            return `${styles.cold}`
        }
    }

    const increaseTemp = () => {
        if (temperature < 25) {
            setDegree(temperature + 1)
        }
    }

    const decreaseTemp = () => {
        if (temperature > 0) {
            setDegree(temperature - 1);
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.today}>{today.toUTCString()}</p>
            <hr />
            <div className={styles.room}>
                <FiChevronLeft />
                <h3>Bedroom</h3>
                <FiChevronRight />
            </div>
            <div className={styles.thermo}>
                <p>{degree}º</p>
                <div className={hot()}></div>
            </div>

            <div className={styles.buttons}>
                <button onClick={increaseTemp} >UP</button>
                <button onClick={decreaseTemp} >DOWN</button>
            </div>
        </div >
    )
}
