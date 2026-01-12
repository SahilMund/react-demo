import React from 'react'
import PostCard from './PostCard'

const GalleryContainer = ({ posts, onDelete }) => {

    return (
        <div>GalleryContainer

            {
                posts?.map((post) => (
                    <PostCard post={post} onDelete={onDelete} />
                ))
            }
        </div>
    )
}

export default GalleryContainer