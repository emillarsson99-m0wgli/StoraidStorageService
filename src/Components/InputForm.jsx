function InputForm({ Text, shownText, placeholder, name, labelclassName, inputclassName, inputName, labelName }) {
  return (

    <div className="input-form">

      <form action="">
        <label className={`label ${labelclassName}`}  htmlFor={Text}>{shownText} name={labelName}</label>
        <div className="form-row">
          <input className={`input ${inputclassName}`} type="text" placeholder={placeholder} name={inputName} />
        </div>
      </form>

    </div>

  )
}

export default InputForm