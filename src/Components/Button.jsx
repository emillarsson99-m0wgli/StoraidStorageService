function Button({ Text, className, to }) {

    return(
        <button className={`btn ${className}`}>
            {Text}
        </button>
    )
}
export default Button