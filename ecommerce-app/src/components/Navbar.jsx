import viteLogo from '/vite.svg'


function Navbar({ links, logo = viteLogo, variant = "primary" }) {
    return <div className={`flex ${variant}`}>
        <div className="left ">
            <img src={logo} alt="logo-img" />
        </div>

        <ul className="flex">
            {links.map(link =>
                (<li key={link}>{link}</li>)
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