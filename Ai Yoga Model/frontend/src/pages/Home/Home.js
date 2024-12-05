import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <a href='http://localhost:3000/home' className='home-heading'>Back</a>
            </div>

            <h1 className="description">AI Based Yoga Trainer</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
