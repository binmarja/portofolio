import { useState } from "react"
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ImageBreak from "./components/ImageBreak"
import SideLinks from "./components/SideLinks"
import ImagePCMug from "./assets/PcMug.jpg"
import Work from "./components/Work"
import ImageQatar from "./assets/Qatar.jpg"

function App() {
	// const [count, setCount] = useState(0)
	const image =
		"https://images.unsplash.com/photo-1589394790585-7e024bb72352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80"

	return (
		<>
			<Header />
			<SideLinks />
			<Hero />
			<ImageBreak image={ImagePCMug} />
			<About />
			<ImageBreak
				image={ImageQatar}
				str={-300}
				imgheight={400}
				isText={false}
			/>
			<Work />
			<ImageBreak image={ImagePCMug} />
		</>
	)
}

export default App
