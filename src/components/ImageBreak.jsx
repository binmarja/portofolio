import React from "react"
import { Parallax } from "react-parallax"
import { useState } from "react"

const ImageBreak = ({
	image,
	str = -400,
	imgheight = 200,
	isText = false,
	text = "Text here"
}) => {
	const insideStyles = {
		background: "rgb(255,255,255)",
		padding: 20,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		opacity: 0.6,
		borderRadius: "50%"
	}
    const insideStylesHov = {
		background: "rgb(255,255,255)",
		padding: 20,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		opacity: 1,
		borderRadius: "50%"
	}
	if (isText) {
		const [isHovering, setIsHovering] = useState(false)
		const handleMouseEnter = () => {
			setIsHovering(true)
		}
		const handleMouseLeave = () => {
			setIsHovering(false)
		}
		return (
			<Parallax bgImage={image} strength={str}>
				{/* renderLayer={(percentage) => (
							<div
								style={{
									position: "absolute",
									background: `rgba(255, 125, 0, ${percentage * 1})`,
									left: "50%",
									top: "50%",
									borderRadius: "50%",
									transform: "translate(-50%,-50%)",
									width: percentage * 500,
									height: percentage * 500
								}}
							/>
						)} */}
				<div style={{ height: imgheight }}>
					{/* <div className="bg-white p-5 absolute top-2/4 left-1/2 translate-x-1/2 translate-y-1/2"> */}
					<div
						style={isHovering ? insideStylesHov: insideStyles }
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{text}
					</div>
				</div>
			</Parallax>
		)
	}
	return (
		<Parallax bgImage={image} strength={str}>
			<div style={{ height: imgheight }}>
				{/* <div style={insideStyles}>Reverse direction</div> */}
			</div>
		</Parallax>
	)
}

export default ImageBreak
