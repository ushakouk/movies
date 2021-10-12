import React from 'react';
import { useField } from 'formik';
import './text_area.scss';
import '../field.scss';

const FieldTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="wrapper">
      <label className="label">
        {label}
        <textarea className="textarea" {...field} {...props} />
        {meta.error && meta.touched && <div className="validation-error">{meta.error}</div>}
      </label>
    </div >
  )
}
export default FieldTextArea;
