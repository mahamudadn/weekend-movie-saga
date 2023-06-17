 import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

//Added function that handles when image is clicked.

    const handleDetails = (movie) => {
        console.log('movie is selected', movie);
        dispatch({ type: 'SET_DETAILS', payload: movie})
        //Goes to movie Details page. 
        history.push(`/details/${movie}`)
    
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
      
        
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}  onClick={() => handleDetails(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>

                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;