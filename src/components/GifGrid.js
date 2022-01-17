import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    // Renombramos data a gifs
    const { data: gifs, loading } = useFetchGifts(category);



    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__heartBeat'>Loading</p>}
            <div className='card-grid'>
                {
                    gifs.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

// rafc