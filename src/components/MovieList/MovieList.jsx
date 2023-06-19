import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

function MovieList() {
	const dispatch = useDispatch();
	const history = useHistory();
	const movies = useSelector((store) => store.movies);

	//Added function that handles when image is clicked.

	const handleDetails = (movie) => {
		console.log("movie is selected", movie);
		dispatch({
			type: "FETCH_DETAILS",
			payload: movie,
		}),
			dispatch({
				type: "FETCH_GENRES",
				payload: movie,
			}),
			//Goes to movie Details page.
			history.push(`/details`);
	};

	useEffect(() => {
		dispatch({ type: "FETCH_MOVIES" });
	}, []);

	return (
		<main>
			<h1>MovieList</h1>
			<section className="movies">
				{movies.map((movie) => {
					return (
						<div key={movie.id}>
							<h3>{movie.title}</h3>
							<img
								onClick={() => handleDetails(movie)}
								src={movie.poster}
								alt={movie.title}
							/>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default MovieList;
