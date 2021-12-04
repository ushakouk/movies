import React, { useEffect, useRef } from 'react';

import './notification.css';

function Notification({ type, message, destroy }) {

  const notification = useRef();

  useEffect(() => {
    showNotification();
    hideAndDestroy();
  }, [])

  function showNotification() {
    setTimeout(() => notification.current.classList.add('visible'), 0)
  }

  function hideAndDestroy() {
    setTimeout(() => {
      notification.current.classList.remove('visible')
      setTimeout(() => destroy(), 3000)
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