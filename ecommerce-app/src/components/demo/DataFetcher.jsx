import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const endPoint = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        fetch(endPoint).then(res => res.json()).then(data => {
            console.log('data', data);
            setData(data)
            setLoading(false)
        }).catch(err => setError(err))
    }, []) //it will only call it once in mounting phase

    return (
        <div>DataFetcher
            {error && error}
            {loading ? <p>Loading....</p> : <pre>        {JSON.stringify(data)}</pre>}

        </div>

    )
}

export default DataFetcher