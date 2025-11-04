import Button from "./Button"

function InputForm({ Text, shownText, placeholder, name, className }) {
  return (

    <div className="input-form">

      <form action="">
        <label className={`label ${className}`}  htmlFor={Text}>{shownText}</label>
        <div className="form-row">
          <input className={`input ${className}`} type="text" placeholder={placeholder} name={name} />
          <div className="input-from-btn">
            <Button Text="Submit" className="form-btn" />
          </div>
        </div>
      </form>

    </div>

  )
}

export default InputForm