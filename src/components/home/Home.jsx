import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from '../../store/actions/modal';
import { removeNotification } from '../../store/actions/app';
import { submitMovie, submitRemoveMovie, getMovies, loadMoreMovies } from '../../store/actions/complex';
import { MODALS, API } from '../../store/constants/constants';
import { useParams, useLocation, useHistory } from "react-router-dom";
import { defineGenre, defineSort, objectEquals, shallowCompare } from '../../util/util';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import EditMovie from './modal/EditMovie';
import DeleteMovie from './modal/DeleteMovie';
import Notification from '../common/notification/Notification';
import Loader from '../common/loader/Loader';
import Scrollable from '../common/scrollable/Scrollable';

function Home({ isLoading, notification, modal, modalMovie, modalMessage, loadIterator, found, actions }) {
  const BASE_URL = '/search';
  const { closeModal, submitMovie, submitRemoveMovie, removeNotification } = actions;

  let history = useHistory();
  let { searchQuery } = useParams();
  let location = useLocation();
  
  const [query, setQuery] = useState(searchQuery);
  const [params, setParams] = useState(parseParams());
  
  useEffect(() => {
    const searchParams = parseParams();
    if (!shallowCompare(searchParams, params)) {
      setParams(searchParams);
    }
    if (!shallowCompare(searchQuery, query)) {
      setQuery(searchQuery)
    }
    
    actions.getMovies(searchQuery, defineGenre(searchParams), defineSort(searchParams))
  }, [location]);

  function parseParams() {
    const searchParams = Array.from(new URLSearchParams(location.search).entries())
    return searchParams.reduce((params, [key, value]) => {
      params[key] = value
      return params
    }, {})
  }

  function setParam(key, value) {
    const searchParams = new URLSearchParams(location.search);
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key)
    }
    pushToHistory(location.pathname, searchParams.toString())
  }

  function search(searchValue) {
    const path = (searchValue && searchValue !== null && searchValue.length > 0)
      ? `${BASE_URL}/${searchValue}`
      : BASE_URL;

    pushToHistory(path, location.search)
  }

  function pushToHistory(pathname, search) {
    history.push({ pathname, search})
  }

  function onScroll(e) {
    const loadTrigger = e.target.clientHeight + 70;
    const pageHeight = e.target.scrollHeight;
    const scrolled = e.target.scrollTop;

    const rest = pageHeight - scrolled;
    const downloaded = API.LOAD_LIMIT * loadIterator;
    if (rest < loadTrigger && found > downloaded) {
      actions.loadMoreMovies(query, params.genre, params.sort, loadIterator)
    }    
  }

  const closeMovieDetails = () => setParam('movie', null)

  return (
    <Scrollable onScroll={onScroll}>
      <Header movieId={params.movie} closeMovieDetails={closeMovieDetails} searchValue={query} setSearchValue={search} />
      <Content params={params} setParam={setParam} />
      <Footer />
      {modal === MODALS.CREATE_OR_EDIT_MOVIE &&
        <EditMovie movie={modalMovie} submit={submitMovie} close={closeModal} />}
      {modal === MODALS.CONFIRM_DELETE_MOVIE &&
        <DeleteMovie movie={modalMovie} confirm={submitRemoveMovie} close={closeModal} />}
      {modal === MODALS.NOTIFICATION &&
        <Notification close={closeModal} message={modalMessage} />}
      {isLoading &&
        <Loader />}
      {notification &&
        <Notification type={notification.type} message={notification.message} destroy={removeNotification} />}
    </Scrollable>
  )
}
const mapStateToProps = ({ app, modal, content }) => ({
  isLoading: app.isLoading,
  notification: app.notification,
  modal: modal.modal,
  modalMovie: modal.movie,
  modalMessage: modal.message,
  loadIterator: content.loadIterator,
  found: content.found
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ closeModal, submitMovie, submitRemoveMovie, removeNotification, getMovies, loadMoreMovies }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);