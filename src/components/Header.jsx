import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../assets/logos2.png"
import { Link } from "react-scroll"

const Header = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  z-10">
			<div className="z-20">
				<img src={Logo} alt="logo image" style={{ width: "100px" }} />
			</div>

			{/* menu */}

			<ul className="hidden md:flex">
				

				<li>
					{" "}
					<Link to="home" smooth={true} duration={1000}>
						{"<Home />"}
					</Link>
				</li>
				<li>
					{" "}
					<Link to="about" smooth={true} duration={1000}>
						{"<About />"}
					</Link>
				</li>
				<li>
					{" "}
					<Link to="work" smooth={true} duration={500}>
						{"<Work />"}
					</Link>
				</li>
				<li>{"<Education />"}</li>
				<li>{"<Skills />"}</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
				{/* <FaBars /> */}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						{"<Home />"}
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						{" "}
						{"<About />"}
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						{" "}
						{"<Work />"}
					</Link>
				</li>
				<li className="py-6 text-4xl"> {"<Education />"}</li>
				<li className="py-6 text-4xl"> {"<Skills />"}</li>
			</ul>
		</div>
	)
}

export default Header
