function InputForm({ Text, shownText, placeholder, name, labelclassName, inputclassName, inputName, labelName, className }) {
  return (

    <div className={`input-form ${className}`}>

      <form action="">
        <label className={`label ${labelclassName}`}  htmlFor={Text} name={labelName} > {shownText} 
        <div className="form-row">
          <input className={`input ${inputclassName}`} type="text" placeholder={placeholder} name={inputName} />
        </div>
        </label>
      </form>

    </div>

  )
}

export default InputForm