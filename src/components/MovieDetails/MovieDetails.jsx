import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function MovieDetails() {
	const dispatch = useDispatch();
	const history = useHistory();
	const details = useSelector((store) => store.details);
	const genres = useSelector((store) => store.genres);

	const homePage = () => {
		console.log("click this button and go back home");
		history.push("/");
	};

	return (
		<div>
			<h1>{details.title} </h1>
			<img src={details.poster} />
			<br />
			<p>{details.description}</p>
			<b />

			<div>
				{genres.map((genre) => (
					<div key={genre.genres_id}>
						{/* <p>{genre.name}</p>
            <p>{genre.description}</p> */}
						<p>{genre.genre}</p>
					</div>
				))}
			</div>
			<button onClick={homePage}>HomePage</button>
		</div>
	);
}

export default MovieDetails;
