import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Hero = () => {
	return (
		<div
			name='home'
			className='w-full h-screen bg-background'
		>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-red-600'>Hi, my name is</p>
				{/* #E17708 */}
				<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
					Jasser Binmarzook
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm a Full Stack Developer.
				</h2>
				<p className='text-[#8892b0] py-4 max-w-[700px]'>
					I’m a full-stack developer from Qatar specializing in building (and
					occasionally designing) exceptional digital experiences. Currently,
					I’m focused on learning new frameworks and CSS magic.
				</p>
				<div>
					<Link
						to='work'
						smooth={true}
						duration={1000}
					>
						<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E17708] hover:border-[#E17708] duration-300'>
							here
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3 ' />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
