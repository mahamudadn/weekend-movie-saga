import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function MovieDetails ()  {

    const history = useHistory();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);


    const dispatch = useDispatch();





return (
    <>
<h1>Movie Details </h1>
<div>

<img  onClick={handleDetails} src={movie.poster} alt={movie.title}/>
</div>
</>


)








}


export default  MovieDetails