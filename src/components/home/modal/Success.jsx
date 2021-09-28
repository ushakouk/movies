import React from 'react';
import Dialog from '../../common/dialog/Dialog';
import Title from '../../common/title/Title';
import './modal.scss';

function Success({ close }) {

  return(
    <Dialog close={() => close()} style="centered">
      <div className="success-icon">&#10003;</div>
      <Title>CONGRATULATIONS !</Title>
      <div className="message">The movie has been added to database successfully</div>
    </Dialog>
  )
}

export default Success;