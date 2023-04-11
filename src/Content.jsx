import React from 'react'
import Thermos from './projects/Thermos/Thermos'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reviews from './projects/Reviews/Reviews'
import Notes from './projects/Notes/Notes'

function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thermos" element={<Thermos />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/notes" element={<Notes />} />
            </Routes>
        </div>
    )
}

export default Content