import React from 'react'
import Accordion from './Accordion'

function FAQ() {
  return (
    <div className="FAQ-container">
        <div className="FAQ-headline">
            <h3>FAQs</h3>
            <h2>Frequently Ask Questions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="accordion-container">
            <Accordion />
        </div>
    </div>
  )
}

export default FAQ