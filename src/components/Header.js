import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export const Header = () => {
  return (
    <nav>
      
        <Link to={"/"}>
          <h1>CompanySite</h1>
        </Link>

        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/service"}>Service</Link>
        </main>
    </nav>
  )
}
