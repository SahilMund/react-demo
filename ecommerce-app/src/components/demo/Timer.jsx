import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('mounting phase')
        const timer =
            setInterval(() => {
                setTime(t => t + 1)
            }, 1000)

        // unmounting phase - when this comp is being removed from the DOM
        // clean up function
        return () => {
            console.log('unmounting phase')
            clearInterval(timer)
        }

    }, [])
    return (
        <div>Timer : {time}</div>
    )
}

export default Timer