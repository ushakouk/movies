import React from 'react';
import { useField } from 'formik';
import './input.scss';
import '../field.scss';
import Input from './Input';

const FieldInput = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Input 
      label={label}
      size={size}
      error={meta.touched && meta.error}
      {...props}
      {...field}
    />
  )
}
export default FieldInput;
