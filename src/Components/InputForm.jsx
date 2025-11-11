function InputForm({ Text, shownText, placeholder, name, labelclassName, inputclassName, inputName, labelName, className, id }) {
  return (

    <div className={`input-form ${className}`}>

      <div className="input-container">
        <label className={`label ${labelclassName}`}  htmlFor={Text} name={labelName} > {shownText} 
        
          <span className={`input ${inputclassName}`} type="text" placeholder={placeholder} name={inputName} id={id} />
        
        </label>
      </div>

    </div>

  )
}

export default InputForm