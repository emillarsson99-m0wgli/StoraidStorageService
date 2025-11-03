import { useState, useEffect} from 'react'

function Accordion() {

    const [activeValue, setActiveValue] = useState(null)

    const [accordion, setAccordion] = useState([])

    const fetchData = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
    const data = await res.json()
    setAccordion(data)
  }

  useEffect (() => {

    fetchData()

  }, []) 
    
    const toggleAccordion = (id) => {
        setActiveValue(activeValue === id ? null : id) 
    }

  return (
    <div>
        <article className="accordion">
            <div className="accordion-list">
                {accordion.map((item) => (
                    <div key={item.id}>
                        <div
                            className={`accordion-item ${activeValue === item.id ? 'active' : ''}`}
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <span className="accordion-question">{item.title}</span>
                            <div className="accordion-icon-circle">
                                <div className="accordion-icon"></div>
                            </div>
                        </div>

                        <div className={`accordion-content ${activeValue === item.id ? 'active' : ''}`}>
                            <div className="accordion-answer">
                                <p>{item.description}</p>
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