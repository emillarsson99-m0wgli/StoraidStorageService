import Button from "./Button"

function PageNotFound() {
  return (
    <div className="page-not-found-bg">
        <div className="page-not-found-container">
            <h5>Oops!</h5>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
            <div className="page-not-found-btn-container">
                <Button to="/" Text="Back To Home" className="page-not-found-btn" />
            </div>
        </div>

    </div>
  )
}

export default PageNotFound