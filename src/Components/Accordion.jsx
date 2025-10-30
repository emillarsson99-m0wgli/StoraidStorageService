import { useState} from 'react'

function Accordion() {

    const [activeValue, setActiveValue] = useState(null)

    const accordionItems = [
        {
            id: "1",
            question: "Can I access my stored iterns anytime?",
            answer: ""
        },
        {
            id: "2",
            question: "Do you offer climate-controlled storage units?",
            answer: ""
        },
        {
            id: "3",
            question: "How long can I rent a storage unit?",
            answer: ""
        },
        {
            id: "4",
            question: "Can I change the size of my storage unit if I need more space?",
            answer: ""
        },
        {
            id: "5",
            question: "How do I pay for my storage unit?",
            answer: ""
        }
    ]

    const toggleAccordion = (id) => {
        setActiveValue(activeValue === id ? null : id) 
    }

  return (
    <div>
        <article className="accordion">
            <div className="accordion-list">
                {accordionItems.map((item) => (
                    <div key={item.id}>
                        <div
                            className={`accordion-item ${activeValue === item.id ? 'active' : ''}`}
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <span className="accordion-question">{item.question}</span>
                            <div className="accordion-icon-circle">
                                <div className="accordion-icon"></div>
                            </div>
                        </div>

                        <div className={`accordion-content ${activeValue === item.id ? 'active' : ''}`}>
                            <div className="accordion-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    </div>
  )
}

export default Accordion