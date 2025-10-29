import BlogPost from "./BlogPost"

function BlogAndNews() {
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
            <BlogPost />
            <BlogPost />
            <BlogPost />


        </div>
            
        

    </div>
  )
}

export default BlogAndNews