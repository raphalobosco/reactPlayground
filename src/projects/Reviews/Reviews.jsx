import './reviews.scss'
import data from './data.js'
import { useState } from 'react'

function Reviews() {

    const reviewData = data
    const [review, setReview] = useState(0)

    const nextReview = () => {
        if (review < 3) {
            setReview(review + 1)
        } else {
            setReview(0)
        }
    }


    return (
        <div className='container'>
            <div className="reviewBox">
                <img src={reviewData[review].img} alt="" />
                <div className="content">

                    <h2>{reviewData[review].name}</h2>
                    <small>{reviewData[review].job}</small>
                    <p>{reviewData[review].text}</p>
                </div>

            </div>
            <button onClick={nextReview}>NEXT</button>
        </div>
    )
}

export default Reviews