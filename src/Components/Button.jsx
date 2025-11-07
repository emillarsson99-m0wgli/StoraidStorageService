import { NavLink } from "react-router-dom"

function Button({ Text, className, to }) {

    return(
        <NavLink to={to} className={`btn ${className}`}>
            {Text}
        </NavLink>
    )
}
export default Button