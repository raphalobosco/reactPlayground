import React from 'react'
import Thermos from './projects/Thermos/Thermos'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reviews from './projects/Reviews/Reviews'
import Notes from './projects/Notes/Notes'
import Quiz from './projects/Quiz/Quiz'
import Accordion from './projects/Accordion/Accordion'

function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thermos" element={<Thermos />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="*" element={<h1>404</h1>} />
                <Route path='/accordion' element={<Accordion/>} />
            </Routes>
        </div>
    )
}

export default Content