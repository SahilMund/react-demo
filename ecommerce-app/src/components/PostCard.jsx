import React from 'react'

const PostCard = ({ post, onDelete }) => {

    return (
        <div key={post.id}>
            <div className="flex">
                <button onClick={() => onDelete(post.id)}>X</button>
                <img src={post.url ||
                    "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw"
                } alt={post.title} />
            </div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>

        </div>
    )
}

export default PostCard