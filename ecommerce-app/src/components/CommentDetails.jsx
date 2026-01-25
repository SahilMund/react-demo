import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CommentDetails = () => {
    const API_URL = "https://jsonplaceholder.typicode.com/comments";

    // const [postData, setPostData] = useState([])
    const [comments, setComments] = useState([])

    const { postId } = useParams();

    const fetchData = async () => {
        const response = await fetch(`${API_URL}?postId=${postId}`);
        const data = await response.json();
        console.log('data', data)
        setComments(data)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData();
    }, [])
    return (
        <div>Comments for PostId : {postId}

            <ul>
                {
                    comments?.map((c) => (
                        <li>{c.body}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CommentDetails