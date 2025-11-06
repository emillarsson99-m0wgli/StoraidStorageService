function InputForm({ Text, shownText, placeholder, name, labelclassName, inputclassName, inputName, labelName, className, id }) {
  return (

    <div className={`input-form ${className}`}>

      <form action="POST">
        <label className={`label ${labelclassName}`}  htmlFor={Text} name={labelName} > {shownText} 
        
          <input className={`input ${inputclassName}`} type="text" placeholder={placeholder} name={inputName} id={id} />
        
        </label>
      </form>

    </div>

  )
}

export default InputForm