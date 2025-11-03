import calendar from '/calendar.svg'
import calendarHovered from '/calendarDark.svg'
import { useState } from 'react'

const BlogPost = ({post}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="blog-post"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="blog-img-placeholder">{post.imageUrl}</div>
        <div className="date">
            <img src={isHovered ? calendarHovered : calendar} alt="" className="calendar-img"/>
            <div className="created-text">
              <p>{post.created}</p>
            </div>
        </div>
        <div className="blog-title">
          <h3>{post.title}</h3>
        </div>
        <div className="blog-description">
          <p>{post.description}</p>
        </div>
        <div className="read-more">
        <a href="#">Read More →</a>
        </div>
    </div>
  )
}

export default BlogPost