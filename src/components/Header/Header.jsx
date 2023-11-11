import { useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import './Header.css';
import Banner from "../Banner/Banner";

function Header() {

  const location = useLocation()
  console.log(location.pathname === '/')

  return (
    <header className="pb-28">
      <Navbar />
      <Banner />
    </header>
  )
}

export default Header