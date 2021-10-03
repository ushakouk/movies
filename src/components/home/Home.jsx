import React from 'react';
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
import './home.scss';

function Home({ isLoading, notification, modal, modalMovie, modalMessage, actions }) {
  const { closeModal, submitMovie, submitRemoveMovie, removeNotification } = actions;

  return (
    <React.Fragment>
      <Header />
      <Content />
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
    </React.Fragment>
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