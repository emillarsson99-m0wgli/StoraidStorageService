import calendar from '/calendar.svg'
import calendarHovered from '/calendarDark.svg'
import { useState } from 'react'

function BlogPost() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="blog-post"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="blog-img-placeholder">Placeholder</div>
        <div className="date">
            <img src={isHovered ? calendarHovered : calendar} alt="" className="calendar-img"/>
            <p>August 17, 2025</p>
        </div>
        <h3>Safe and Secure: The Importance of Choosing the Right Storage</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
        <div className="read-more">
        <a href="#">Read More →</a>
        </div>
    </div>
  )
}

export default BlogPost