import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import './multiselect.scss';
import '../field.scss';
import Dropdown from './Dropdown';
import Input from '../input/Input';

const FieldMultiSelect = ({ label, options, placeholder }) => {
  const [expanded, setExpanded] = useState(false);
  const { values: { genres }, errors } = useFormikContext();

  return (
    <div className="multiselect">
      <Input
        readOnly
        value={genres.join(', ')}
        onClick={() => setExpanded(!expanded)}
        error={errors && errors.genres}
        label={label}
        placeholder={placeholder}
        size="wide selected"
      />
      <span className={expanded ? "big-arrow-down" : "big-arrow-up"} />
      {expanded &&
        <Dropdown options={options} />}
    </div>
  )
}

export default FieldMultiSelect;
