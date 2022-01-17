import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__fadeInUp">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
