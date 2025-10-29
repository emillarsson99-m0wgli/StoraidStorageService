import Button from "./Button"

function InputForm() {
  return (
    <div className="input-form">
        <input className="input" type="text" />
        <form  className="form" action="POST" placeholder="Enter your email"></form>
        <div className="newsletter-btn">
            <Button Text="Submit"/>
        </div>
    </div>
  )
}

export default InputForm