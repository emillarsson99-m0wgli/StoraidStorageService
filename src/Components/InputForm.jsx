import Button from "./Button"

function InputForm({ Text, shownText, placeholder, name, className }) {
  return (

    <div className="input-form">

      <form action="">
        <label className={`label ${className}`}  htmlFor={Text}>{shownText}</label>
        <input className={`input ${className}`} type="text" placeholder={placeholder} name={name} />
        <div>
          <Button Text="Submit" />
        </div>
      </form>

    </div>

  )
}

export default InputForm