import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Rapha React</h1>
            <Nav>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/thermos'>Thermostat</Link>
                </li>
                <li>
                    <Link to='/reviews'>Reviews</Link>
                </li>
                <li>
                    <Link to='/notes'>Notes</Link>
                </li>
                <li>
                    <Link to='/quiz'>Quiz</Link>
                </li>
                <li>
                    <Link to='/accordion'>
                        Accordion
                    </Link>
                </li>
            </Nav>

        </div>
    )
}

const Nav = styled.ul`
    list-style: none;
    flex-direction: column;
    display: flex;
    gap: 1rem;
    width: 100%;
    margin-block: 1rem;
    
    li{ 
        a{
            display: block;
            padding: 1rem;
        border-radius: 0.5rem;
        background-color: rgba(255, 255, 255, 0.3) ;
            color: black;
            text-decoration: none;
        }
    }
`
