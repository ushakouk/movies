import React from 'react';
import './text_area.scss';

const TextArea = ({ label, ...props }) => {
  if (label) {
    return (
      <div className="wrapper">
        <div className="label">{label}</div>
        <textarea className="textarea" {...props} />
      </div >
    )
  } else {
    return <textarea className="textarea" {...props} />
  }
}
export default TextArea;
