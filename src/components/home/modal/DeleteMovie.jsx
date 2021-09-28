import React from 'react';
import Button from '../../common/button/Button';
import Dialog from '../../common/dialog/Dialog';
import Title from '../../common/title/Title';
import './modal.scss';

function DeleteMovie({ movie, close, confirm }) {

  function onConfirm() {
    confirm(movie.id);
    close();
  }

  return(
    <Dialog close={() => close()}>
      <Title>DELETE MOVIE</Title>
      <div className="message">Are you sure you want to delete this movie?</div>
      <Button onClick={onConfirm} style="primary">CONFIRM</Button>
      <Button onClick={close} style="negative">CANCEL</Button>
    </Dialog>
  )
}

export default DeleteMovie;