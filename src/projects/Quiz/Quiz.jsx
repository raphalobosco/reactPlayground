import { useState } from 'react'
import data from './quizData'
import './quiz.scss'

const Quiz = () => {

    const questions = data

    const [currentQuest, setCurrentQuest] = useState(0)
    const [finished, setFinished] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswer = (correct) => {
        if (correct === true) {
            setScore(score + 1)
        }

        if (currentQuest < questions.length - 1) {
            setCurrentQuest(currentQuest + 1)
        } else {
            setFinished(true)
        }
    }

    const handleRestart = () => {
        setCurrentQuest(0)
        setScore(0)
        setFinished(false)
    }

    return (
        <div className='quiz'>
            {finished === false ?
                <div className="quizBox">
                    <h3>Question {currentQuest + 1} </h3>
                    <hr />
                    <p className='questionText'>{questions[currentQuest].question}</p>

                    <div className="choices">{questions[currentQuest].answers.map((choice) => {
                        return <button onClick={() => handleAnswer(choice.correct)} className="choice">{choice.answer}</button>
                    })}</div>


                </div>
                : <div className='quizBox results'>
                    <p>You got {score} of {questions.length}</p>
                    <button onClick={handleRestart}>Retake</button>
                </div>}
        </div>
    )
}

export default Quiz