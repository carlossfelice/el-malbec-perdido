import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar : React.FC= ()=>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Contacts</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar