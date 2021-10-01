import React, { useState } from 'react';
import './context_menu.scss';

function ContextMenu({ onEdit, onDelete }) {

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

  function edit(event) {
    event.stopPropagation();
    setExpanded(false);
    onEdit();
  }

  function remove(event) {
    event.stopPropagation();
    setExpanded(false);
    onDelete();
  }

  return (
    <div className="context_menu">
      {!expanded &&
        <div className="context_menu__button" onClick={(e) => expandMenu(e)}></div>
      }
      {expanded &&
        <div className="context_menu__content">
          <div className="menu-item" onClick={(e) => edit(e)}>Edit</div>
          <div className="menu-item" onClick={(e) => remove(e)}>Delete</div>
        </div>
      }
    </div>
  )
}

export default ContextMenu;