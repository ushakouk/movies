import React from 'react';
import { Field } from 'formik';

const Dropdown = ({ options }) => {

  return (
    <div className="dropdown">
      {options.map((option, index) =>
        <label key={index} className="dropdown__checkbox-item" >
          <Field type="checkbox" name="genres" value={option} />
          {option}
        </label>
      )}
    </div>
  )
}

export default Dropdown;
