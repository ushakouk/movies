import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from '../../store/actions/modal';
import { removeNotification } from '../../store/actions/app';
import { submitMovie, submitRemoveMovie } from '../../store/actions/complex';
import { MODALS } from '../../store/constants/constants';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import EditMovie from './modal/EditMovie';
import DeleteMovie from './modal/DeleteMovie';
import Notification from '../common/notification/Notification';
import Loader from '../common/loader/Loader';
import Scrollable from '../common/scrollable/Scrollable';

function Home({ isLoading, notification, modal, modalMovie, modalMessage, actions }) {
  const { closeModal, submitMovie, submitRemoveMovie, removeNotification } = actions;

  const [isBottom, setIsBottom] = useState(false);

  function onScroll(e) {
    const loadTrigger = e.target.clientHeight + 70;
    const pageHeight = e.target.scrollHeight;
    const scrolled = e.target.scrollTop;

    const rest = pageHeight - scrolled;
    if (rest < loadTrigger) {
      setIsBottom(true)
    } else {
      if (isBottom) {
        setIsBottom(false)
      }
    }
  }

  return (
    <Scrollable onScroll={onScroll}>
      <Header />
      <Content loadMoreTrigger={isBottom} />
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
const mapStateToProps = ({ app, modal }) => ({
  isLoading: app.isLoading,
  notification: app.notification,
  modal: modal.modal,
  modalMovie: modal.movie,
  modalMessage: modal.message
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ closeModal, submitMovie, submitRemoveMovie, removeNotification }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);