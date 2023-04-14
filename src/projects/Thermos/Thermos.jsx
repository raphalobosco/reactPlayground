import { useState } from 'react'
import './thermos.scss'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const today = new Date()

export default function Thermos() {


    const [degree, setDegree] = useState(12)
    let temperature = degree

    const [hot, setHot] = useState(false)

    // const hot = () => {
    //     if (temperature >= 18) {
    //         return `${styles.hot}`
    //     } else {
    //         return `${styles.cold}`
    //     }
    // }

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
        <div className='container'>
            <p className='today'>{today.toUTCString()}</p>
            <hr />
            <div className='room'>
                <FiChevronLeft />
                <h3>Bedroom</h3>
                <FiChevronRight />
            </div>
            <div className='thermo'>
                <p>{degree}º</p>
                <div className={temperature >= 18 ? ' hot on' : 'hot off'}></div>
                <div className='cold'></div>
            </div>

            <div className='buttons'>
                <button onClick={increaseTemp} >UP</button>
                <button onClick={decreaseTemp} >DOWN</button>
            </div>
        </div >
    )
}
