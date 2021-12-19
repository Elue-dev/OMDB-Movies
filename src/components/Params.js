import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Params = () => {
    const [movie, setMovie] = useState([])
    const params = useParams()

    useEffect(() => {
        moviedetails()
    },[])

    const moviedetails = async () => {
        const details = await fetch (`http://www.omdbapi.com/?i=${params.id}&apikey=4ba55ba8`)
        const response = await details.json()
        setMovie(response)
        console.log(response)
    }
    return(
        <>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Title: {movie.Title}</p>
            <p>Release Date: {movie.DVD}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Plot: {movie.Plot}</p>
        </>
    )
}

export default Params