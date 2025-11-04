import Button from "./Button"

function InputForm({ Text, shownText, placeholder, labelclassName, inputclassName, inputName,labelName }) {
  return (

    <div className="input-form">

      <form action="">
        <label className={`label ${labelclassName}`}  htmlFor={Text} name={`label ${labelName}`}>{shownText} 
        <div className="form-row">
          <input className={`input ${inputclassName}`} type="text" placeholder={placeholder} name={`input ${inputName}`} />
          <div>
            <Button Text="Submit" />
          </div>
        </div>
        </label>
      </form>

    </div>

  )
}

export default InputForm