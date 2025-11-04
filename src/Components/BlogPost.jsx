import calendar from '/calendar.svg'
import calendarHovered from '/calendarDark.svg'
import { useState } from 'react'

const BlogPost = ({post}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // isExpanded functionen är genererad med ai

  const [isExpanded, setIsExpanded] = useState(false)


  return (
    <div className={`blog-post ${isExpanded ? 'expanded-post' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="blog-img-placeholder">
          <img src={post.imageUrl} alt="" />
        </div>
        <div className="date">
            <img src={isHovered ? calendarHovered : calendar} alt="" className="calendar-img"/>
            <div className="created-text">
              <p>{post.created}</p>
            </div>
        </div>
        <div className="blog-title">
          <h3>{post.title}</h3>
        </div>
        <div className={`blog-description ${isExpanded ? 'expanded' : 'truncated'}`}>
          <p>{post.description}</p>
        </div>
        <div className="read-more">
        <a href="#" onClick={(e) => {
          e.preventDefault()
          setIsExpanded(!isExpanded)
        }}>
          {isExpanded ? 'Read Less ↑' : 'Read More →'}
          </a>
        </div>
    </div>
  )
}

export default BlogPost