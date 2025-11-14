import { useState } from 'react'
import SubmitButton from './SubmitButton'


function BookingForm() {

    const [bookingOptions, setBookingOptions] = useState([{id: "Small unit", text: "Small unit"}, {id: "Medium unit", text: "Medium unit"}, {id: "Large Unit", text: "Large unit"}, {id: "Executive unit", text: "Executive unit"}])
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        selectedUnit: '',
        purpose: ''
    });
    
    const [bookingErrors, setBookingErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateBookingForm = () => {
        const newBookingErrors = {}

        setBookingErrors(newBookingErrors)
        return Object.keys(newBookingErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setBookingData({...bookingData, [name]: value})

        let error = ''

        if (value.trim() === '' ) {
            error = 'This field is required'
        } else {
            if (name === 'name' && !/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/.test(value)) {
                error = "Please enter a valid name."
            }

            if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Please enter a valid email."
            }

            if (name === 'purpose' && !/^[A-Za-z0-9À-ÖØ-öø-ÿ.,!?'"()\- ]{3,100}$/.test(value)) {
                error = "Please enter a valid purpose."
            }
        }

        setBookingErrors(prevBookingErrors => ({ ...prevBookingErrors, [name]: error}))
    };

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['name', 'email', 'selectedUnit', 'purpose']

        const newBookingErrors = {}
        requiredFields.forEach(field => {
            if(bookingData[field].trim() === '') {
                newBookingErrors[field] = 'This field is required'
                console.log("The required fields need to be filled")
            }
        }) 

        if(Object.keys(newBookingErrors).length > 0) {
            setBookingErrors(newBookingErrors)
            return
        }
        if (!validateBookingForm()) {
    
            return;
        }

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })


        const data = await res.json()
        console.log(bookingData)
        console.log("response:", data)
        console.log("Status code:", res.status);
        if (res.ok) {
            setSubmitted(true)
            setBookingData({
                name: '',
                email: '',
                selectedUnit: '',
                purpose: ''
            })
        }
    }

    if (submitted) {
        return (
            <div className="bookingform-submitted">
                <div className="bookingform-submitted-text">
                    <h2>Thank you!</h2>
                    <p>We have received your booking request and will respond to you within 1-2 business days.</p>
                </div>
                <button className="bookingform-submitted-btn" onClick={handleOk}>Return</button>
            </div>
        )
    }
  return (
    <div>
        <form className="booking-form-container" onSubmit={handleSubmit} noValidate>

            <div className="booking-group">
                <div className="booking-row-form">
                    <div className="booking-row">
                        <p className={`booking-input-p ${bookingErrors.name ? "booking-input-error-p" : ""}`}>Your Name <span className="red-star">*</span></p>
                        <input className={`booking-input ${bookingErrors.name ? "booking-input-error" : ""}`} id="bookingName"  type="text" name="name" placeholder="Name" value={bookingData.name} onChange={handleChange} required />
                        {bookingErrors.name && <span className="booking-error">{bookingErrors.name}</span>}
                    </div>

                    <div className="booking-row">
                        <p className={`booking-input-p ${bookingErrors.email ? "booking-input-error-p" : ""}`}>Email <span className="red-star">*</span></p>
                        <input className={`booking-input ${bookingErrors.email ? "booking-input-error" : ""}`} id="bookingEmail"  type="text" name="email" placeholder="Email" value={bookingData.email} onChange={handleChange}/>
                        {bookingErrors.email && <span className="booking-error">{bookingErrors.email}</span>}
                    </div>
                </div>
            </div>

            <div className="booking-group">
                <p className={`booking-input-p ${bookingErrors.selectedUnit ? "booking-input-error-p" : ""}`}>Choose Unit <span className="red-star">*</span></p>
                <select className={`unit-select ${bookingErrors.selectedUnit ? "booking-select-error" : ""}`} id="customSelect" name="selectedUnit" value={bookingData.selectedUnit} onChange={handleChange} required>
                <option value="" disabled hidden> Select a unit</option> { bookingOptions.map(bookingOptions => ( <option key={bookingOptions.id} value={bookingOptions.id}>{bookingOptions.text}</option>))}
                </select>
            </div>

            <div className="booking-group">
                <p className={`booking-input-p ${bookingErrors.purpose ? "booking-input-error-p" : ""}`}>purpose <span className="red-star">*</span></p>
                <textarea className={`booking-input ${bookingErrors.purpose ? "booking-input-error" : ""}`} name="purpose" placeholder="Purpose" id="bookingPurpose" value={bookingData.purpose} onChange={handleChange} required></textarea>
                {bookingErrors.purpose && <span className="booking-error">{bookingErrors.purpose}</span>}    
            </div>
            <div className="bookingform-button">
                <SubmitButton className="form-btn" text="Submit" />
            </div>
        </form>
    </div>
  )
}

export default BookingForm