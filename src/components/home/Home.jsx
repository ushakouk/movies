import React, { useEffect, useReducer } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import EditMovie from './modal/EditMovie';
import DeleteMovie from './modal/DeleteMovie';
import Success from './modal/Success';
import Search from './header/search/Search';
import MovieDetails from './header/movieDetails/MovieDetails';
import Loader from '../common/loader/Loader';
import ErrorPage from '../error/error_page/ErrorPage';
import { initialState, reducer, MODALS, MODES } from './reducer/reducer';
import { setDispatcher, setMovies, showMovieDetails, searchMode, addMovie, editMovie, submitMovie, deleteMovie, confirmDeleteMovie, closeModal } from './reducer/actions';
import { useFetching } from '../../hooks/useFetching';
import { getMovies } from '../../api/requests';
import './home.scss';

function Home({ logout }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetch, isLoading, error] = useFetching();

  useEffect(() => {
    setDispatcher(dispatch);
    fetch(getMovies).then(movies => setMovies(movies));
  }, [])


  if (error) {
    return <ErrorPage />
  } else {
    return (
      <React.Fragment>
        <Header
          isViewMode={state.mode === MODES.MOVIE_DETAILS}
          closeViewMode={searchMode}
          addMovie={addMovie}
          logout={() => logout()}
        >
          {state.mode === MODES.SEARCH_MOVIES &&
            <Search />}
          {state.mode === MODES.MOVIE_DETAILS &&
            <MovieDetails movie={state.movieDetails} />}
        </Header>
        <Content
          movies={state.movies}
          editMovie={editMovie}
          deleteMovie={deleteMovie}
          showMovieDetails={showMovieDetails}
        />
        <Footer />
        {state.modal === MODALS.CREATE_OR_EDIT_MOVIE &&
          <EditMovie movie={state.modalMovieDetails} submit={submitMovie} close={closeModal} />}
        {state.modal === MODALS.CONFIRM_DELETE_MOVIE &&
          <DeleteMovie movie={state.modalMovieDetails} confirm={confirmDeleteMovie} close={closeModal} />}
        {state.modal === MODALS.NOTIFICATION &&
          <Success close={closeModal} />}
        {isLoading &&
          <Loader />}
      </React.Fragment>
    )
  }
}

export default Home;