import React, { useState, useEffect } from 'react'
import './styles.css'

export const Movie = ({movies}) => {

    const [favourites, setFavourites] = useState([])

    const saveToLocalStorage = items => {
        localStorage.setItem('Movie', JSON.stringify(items))
    }

    useEffect(() => {
        const movieFavourite = JSON.parse(localStorage.getItem('Movie'))
        if(movieFavourite){
            setFavourites(movieFavourite)
        }
    },[])
    
    const addFavourites = (movie) => {
        const newFavourite = [...favourites, movie ]
            setFavourites(newFavourite)
            saveToLocalStorage(newFavourite)
    }

    const removeFromFavourites = (movie) => {
        const newFavourite = favourites.filter(favourite => favourite.imdbID !== movie.imdbID)
        setFavourites(newFavourite)
        saveToLocalStorage(newFavourite)
    }

    return (<>
        <div>
            <div className='omdb wrapper'>
                {movies.length > 0 ? (
                    <>
                        {movies.map(movie => (
                            <div key ={movie.omdbID}>
                                <div className='image_container'>
                                    <img src={movie.Poster} alt={movie.Title} />
                                    <div className='overlay' onClick={() => addFavourites(movie)}>
                                        <p>Add to Favourites <i className="fas fa-heart"></i></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <h3>Start searching some movies!!!</h3>
                )}  
            </div>

            <h2 className='heading_color wrapper'>Favourites</h2>
            <div className='omdb wrapper'>
            {favourites.length > 0 ? (
                <>
                {favourites.map(favourite => (
                        <div key ={favourite.omdbID}>
                            <div className='image_container'>
                                <img className='fav_img' src={favourite.Poster} alt={favourite.Title}/>
                                <div className='overlay2' onClick={() => removeFromFavourites(favourite)}>
                                <p>Remove from Favourites <i className="fas fa-heart"></i></p>
                                </div>
                            </div>
                        </div>
             ))}
             </>
            ) : (
                <h3>No favourites yet. Add some movies...</h3>
            )}
            </div>
        </div>
        </>
    )
}