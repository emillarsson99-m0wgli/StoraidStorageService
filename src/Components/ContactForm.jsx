import InputForm from "./InputForm"
import Button from "./Button"
function ContactForm() {
  return (
    <div className="contact-form-container">
        <div className="input-group">
            <p>Your Name</p>
            <InputForm Text="name" placeholder="Your Name" className="contact-form" name="name" id="name" />
        </div>

        <div className="input-group">
            <div className="contact-row-form">
                <div className="contact-row">
                    <p>Email</p>
                    <InputForm Text="email" placeholder="Email" className="contact-form" name="email" id="email" />
                </div>

                <div className="contact-row">
                    <p>Telephone</p>
                    <InputForm Text="telephone" placeholder="Telephone" className="contact-form" name="telephone" id="telephone" />
                </div>
            </div>
        </div>

        {/* <div className="input-group">
            <p>Telephone</p>
            <InputForm Text="telephone" placeholder="Telephone" className="contact-form" name="telephone" />
        </div> */}

        <div className="input-group">
            <p>Subject</p>
            <InputForm Text="subject" placeholder="How can we help you" className="contact-form" name="subject" id="subject" />
        </div>

        <div className="input-group">
            <p>Comments / Questions</p>
            <textarea name="commentOrQuestion" placeholder="Comments" id="comments-or-questions"></textarea>    
        </div>
        <div className="form-button">
            <Button Text="Submit" className="form-btn"/>
        </div>
    </div>
  )
}

export default ContactForm