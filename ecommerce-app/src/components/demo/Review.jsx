import React, { useState } from 'react'

const Review = ({ reviewLists }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const currentReview = reviewLists[activeIndex];

    const handlePrev = () => setActiveIndex(prev => prev - 1)
    const handleNext = () => setActiveIndex(prev => prev + 1)
    const handleRandomise = () => {
        const idx = Math.floor(Math.random() * reviewLists.length);
        setActiveIndex(idx)
    }

    return (
        <div>
            <h2>Our Review</h2>
            <div className="container">
                <h4>{currentReview.name}</h4>
                <h6>{currentReview.job}</h6>
                <img width="50px" height="50px" src={currentReview.image} alt={currentReview.name} />
                <p>{currentReview.text}</p>
            </div>
            <div className="ac">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleRandomise}>Random</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Review