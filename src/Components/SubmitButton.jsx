import React from 'react'

function SubmitButton({ className, text }) {
  return (
    <div>
        <button className={`submit-button ${className}`} type="submit">{text}</button>
    </div>
  )
}

export default SubmitButton