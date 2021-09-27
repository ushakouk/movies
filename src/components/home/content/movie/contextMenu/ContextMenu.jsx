import React, { useState } from 'react';
import './context_menu.scss';

function ContextMenu() {

  const [expanded, setExpanded] = useState(false);

  function expandMenu(event) {
    setExpanded(!expanded);
    event.stopPropagation();
    document.addEventListener("click", collapseMenu);
  }

  function collapseMenu() {
    setExpanded(false);
    document.removeEventListener("click", collapseMenu)
  }

  return (
    <div className="context_menu">
      {!expanded &&
        <div className="context_menu__button" onClick={(e) => expandMenu(e)}></div>
      }
      {expanded &&
        <div className="context_menu__content">
          <div className="menu-item">Edit</div>
          <div className="menu-item">Delete</div>
        </div>
      }
    </div>
  )
}

export default ContextMenu;