import React from 'react'
const Hero = (props) => {
    console.log(props)

    return (
        <>
            <h2>{props.heading}</h2>
            <div className='flex'>
                <div className="left">
                    <h3>{props.left.heading}</h3>
                    <p>{props.left.desc}</p>
                </div>
                <div className="right">
                    <h3>{props.right.heading}</h3>
                    <p>{props.right.desc}</p>
                </div>
            </div></>
    )
}

export default Hero