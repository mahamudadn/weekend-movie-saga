import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function MovieDetails ()  {

    const history = useHistory();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);

    const dispatch = useDispatch();

const homePage = ()  => {
    console.log('click this button and go back home');
    history.push("/")
}



return (

<div>

<h1>Movie Details </h1>
<img src={details.poster}/>
<br/>
<p>{details.description}</p>
<b/>

<ul>
    {genres.map(genre => (
        <div>
            <li>{genre.name}</li>
        </div>
    ))}

</ul>
<button onClick={homePage}>HomePage</button>

</div>



)








}


export default  MovieDetails