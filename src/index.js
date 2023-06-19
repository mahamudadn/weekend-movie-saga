import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Create the rootSaga generator function
function* rootSaga() {
	yield takeEvery("FETCH_MOVIES", fetchAllMovies);
	yield takeEvery("FETCH_DETAILS", fetchDetails);
	yield takeEvery("FETCH_GENRES", fetchGenres);
}

function* fetchAllMovies() {
	// get all movies from the DB
	try {
		const movies = yield axios.get("/api/movie");
		console.log("get all:", movies.data);
		yield put({ type: "SET_MOVIES", payload: movies.data });
	} catch {
		console.log("get all error");
	}
}
//Genartor  Function that gets details
function* fetchDetails(action) {
	try {
		console.log('fetchDetails saga action.payload is:', action.payload)
		console.log('fetch details', details.data);
		yield put({
			type: "SET_DETAILS",
			payload: action.payload,
		});
	} catch (error) {
		console.log("error", error);
	}
}
//Genartor  Function that gets genres
function* fetchGenres(action) {
	try {
		console.log('fetchGenres saga action.payload is:', action.payload)
		const genres = yield axios.get(`/api/genre/${action.payload.id}`);
		console.log("fetch genres", genres.data);
		yield put({ type: "SET_GENRES", payload: genres.data });
	} catch (error) {
		console.log("error", error);
	}
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
	switch (action.type) {
		case "SET_MOVIES":
			return action.payload;
		default:
			return state;
	}
};

// Used to store movies returned from the server
const details = (state = [], action) => {
	switch (action.type) {
		case "SET_DETAILS":
			console.log("action.payload in details reducer is:", action.payload);
			return action.payload;
		default:
			return state;
	}
};

// Used to store the movie genres
const genres = (state = [], action) => {
	switch (action.type) {
		case "SET_GENRES":
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		movies,
		genres,
		details,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={storeInstance}>
			<App />
		</Provider>
	</React.StrictMode>
);
