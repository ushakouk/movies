import React from 'react';
import './dialog.scss';

function Dialog({ children, close }) {

  return (
    <div className="dialog" onClick={() => close()}>
      <div className="dialog__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
