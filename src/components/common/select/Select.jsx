import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './select.scss';

function Select({ label, options, onChange, className }) {

  const [selected, setSelected] = useState(options[0]);
  const [expanded, setExpanded] = useState(false);

  function onSelect(event) {
    const option = { name: event.target.innerHTML, value: event.target.getAttribute("value") };

    setSelected(option);
    setExpanded(false);

    if (onChange) {
      onChange(option.value);
    }
  }

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
    <div className={"select-form " + (className ? className : "")}>
      {label &&
        <div className="select__label">{label}</div>
      }
      <div className="select" onClick={(e) => expandMenu(e)}>
        <div className="select__selected" >{selected.name}</div><span className="arrow-down"/>
        {expanded &&
          <div className="dropdown">
            {options.filter(option => option.value != selected.value).map((option, index) =>
              <div key={index} className="dropdown__item" value={option.value} onClick={(e) => onSelect(e)}>
                {option.name}
              </div>)
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Select;

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })),
  onChange: PropTypes.func,
  className: PropTypes.string
}
