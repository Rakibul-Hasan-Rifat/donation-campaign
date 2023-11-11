import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row gap-7 items-center justify-between px-20 pt-8 pb-10">
            <NavLink to='/' className='w-3/5 sm:w-2/5 md:w-1/5'>
                <img src='./resources/logo.png' alt="" className="w-full"/>
            </NavLink>
            <div className="w-2/5 flex text-lg font-semibold">
                <ul className="flex gap-4 flex-col sm:flex-row text-center justify-between w-full">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'border-b-2 border-b-[#FF444A] text-[#FF444A]' : ''}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/donation'
                            className={({ isActive }) => isActive ? 'border-b-2 border-b-[#FF444A] text-[#FF444A]' : ''}
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) => isActive ? 'border-b-2 border-b-[#FF444A] text-[#FF444A]' : ''}
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar