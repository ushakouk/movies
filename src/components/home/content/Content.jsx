import React from 'react';
import './content.scss';
import Counter from './counter/Counter';
import Movie from './movie/Movie';
import Navigation from './navigation/Navigation';

const mockedMovies = [{
    img: "no_image",
    name: "Pulp Fiction",
    genre: "Action & Adventure",
    year: 2004
}]

function Content(props) {
    return (
        <div className="content">
            <Navigation />
            <Counter value={49} />
            <div className="movies_container">
                {mockedMovies.map((movie, index) =>
                    <Movie key={index} {...movie} />
                )}
            </div>
        </div>
    )
}

export default Content;