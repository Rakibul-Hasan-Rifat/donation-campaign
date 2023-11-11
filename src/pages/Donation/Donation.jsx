import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function Donation() {
    return (<>
        <Navbar />
        <Outlet/>
    </>
    )
}

export default Donation