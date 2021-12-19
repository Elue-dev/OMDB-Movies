import React, {useEffect, useState} from 'react'
import { Movie } from './Movie'

export const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    

    const fetchMovies = async () => {
        const movieData = await fetch (`https://www.omdbapi.com/?s=${search}&apikey=4ba55ba8`)
        const response = await movieData.json()
        
        if(response.Search){
            setMovies(response.Search)
        }
    }

    useEffect(() => {
        fetchMovies()
    },[search])


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    
    return (
        <div>
            <div className='heading wrapper'>
            <h2 className='heading_color'>Movies</h2>
            <input type='search' className='search_movie' value={search} onChange={handleSearch} placeholder='Search Movies...' />
            </div>
            <Movie movies={movies} />
        </div>
    )
}