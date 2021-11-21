import React from 'react';
import './dialog.scss';

function Dialog({ children, close, style }) {

  return (
    <div className="dialog" role="modal" onClick={() => close()}>
      <div className={"dialog__content " + style} onClick={(e) => e.stopPropagation()}>
        <span className="close-dialog-icon" onClick={() => close()}>&#10006;</span>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
