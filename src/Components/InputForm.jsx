import Button from "./Button"

function InputForm({ Text, shownText, placeholder, name, labelclassName, inputclassName }) {
  return (

    <div className="input-form">

      <form action="">
        <label className={`label ${labelclassName}`}  htmlFor={Text}>{shownText}</label>
        <div className="form-row">
          <input className={`input ${inputclassName}`} type="text" placeholder={placeholder} name={name} />
          <div>
            <Button Text="Submit" />
          </div>
        </div>
      </form>

    </div>

  )
}

export default InputForm