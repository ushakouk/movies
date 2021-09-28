import React, { useEffect, useState } from 'react';
import './multiselect.scss';

const MultiSelect = ({ label, options, values, onChange }) => {

  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setSelected(values);
  }, [values])

  function onCheckboxChange({ target }) {
    const name = target.name;
    if (target.checked) {
      setSelected([...selected, name])
    } else {
      setSelected(selected.filter(item => item !== name))
    }
    onChange(selected)
  }

  return (
    <div className="wrapper">
      <div className="label">{label}</div>
      <div className="multiselect">
        <input className="multiselect__selected" value={selected.join(', ')} onClick={() => setExpanded(!expanded)} readOnly placeholder="Please Select" />
        {expanded
          ? <span className="big-arrow-down" />
          : <span className="big-arrow-up" />
        }
        {expanded &&
          <div className="dropdown">
            {options.map((option, index) =>
              <label key={index} className="dropdown__checkbox-item" >
                <input type="checkbox" checked={selected.includes(option)} name={option} onChange={(e) => onCheckboxChange(e)} />
                {option}
              </label>
            )}
          </div>
        }
      </div>
    </div >
  )
}

export default MultiSelect;
