import React, { useEffect, useRef } from 'react';

import './notification.scss';

function Notification({ type, message, destroy }) {

  const notification = useRef();

  useEffect(() => {
    showNotification();
    hideAndDestroy();
  }, [])

  function showNotification() {
    notification.current.classList.add('visible')
  }

  function hideAndDestroy() {
    setTimeout(() => {
      notification.current.classList.remove('visible')
      setTimeout(() => destroy(), 1000)
    }, 5000)
  }

  return (
    <div className="popup-notification " ref={notification}>
      <span className={`notification-icon ${type}`}></span>
      <div className="notification-message">{message}</div>
    </div>
  )
}

export default Notification;