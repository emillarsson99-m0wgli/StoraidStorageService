import BlogPost from "./BlogPost"
import React, { useState, useEffect } from 'react'
function BlogAndNews() {

  const [blogPost, setBlogPost] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
    const data = await res.json()
    setBlogPost(data)
  }

  useEffect (() => {

    fetchData()

  }, []) 



  return (
    <div className="blog-and-news-container">

        <div className="blog-and-news-headline">
            <div className="headline">
                <h3>Latest Blog and News</h3>
                <h2>Check Out Our Latest Blog and News Update</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>

        <div className="blog-posts">
            {
              blogPost.map((post) => (<BlogPost key={post.id} post={post} />))
            }

        </div>
            
        

    </div>
  )
}

export default BlogAndNews