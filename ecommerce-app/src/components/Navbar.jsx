import { Link, NavLink } from 'react-router-dom';
import viteLogo from '/vite.svg'


function Navbar({ links, logo = viteLogo, variant = "primary" }) {
    return <div className={`flex ${variant}`}>
        <div className="left ">
            <img src={logo} alt="logo-img" />
        </div>

        <ul className="flex">
            {links.map(link =>
            (<NavLink to={link.path}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            ><li key={link.label}>{link.label}</li></NavLink>)
            )}
        </ul>
    </div>
}


export default Navbar;

// {
//     span: 4,
//     btn: "update count"
// }

// {}