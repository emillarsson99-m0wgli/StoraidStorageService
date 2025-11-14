import React from 'react'

function SubmitButton({ className, text, onClick }) {
  return (
    <div>
        <button className={`submit-button ${className}`} type="submit" onClick={onClick}>{text}</button>
    </div>
  )
}

export default SubmitButton