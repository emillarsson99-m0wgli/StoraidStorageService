function Button({ Text, className }) {

    return(
        <button className={`btn ${className}`}>
            {Text}
        </button>
    )
}
export default Button