import React from 'react';
import './dialog.scss';

function Dialog({ children, close, style }) {

  return (
    <div className="dialog" onClick={() => close()}>
      <div className={"dialog__content " + style} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
