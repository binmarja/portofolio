import React from "react"
const Job = ({
	id,
	jobTitle = "Job title",
	placeOfWork = "Place of work",
	fromDate = "from date",
	toDate = "to date",
	jobDescreption = "Job description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nemo qui quis nam quidem, aperiam atque ipsa officiis magnam modi, inventore est perferendis, at molestiae deserunt numquam eum neque? Quam esse id eligendi in minima reprehenderit placeat non neque repellendus fugiat obcaecati blanditiis."
}) => {
	// const item = {
	// 	hidden: { opacity: 0, x: 2000 },
	// 	show: {
	// 		opacity: 1,
	// 		x: 0,
	// 		transition: { delay: 0.5, x: { duration: 5 } }
	// 	}
	// 	// hover: {
	// 	// 	scale: 1.1
	// 	// }
	// }
	return (
		<div className=' flex justify-evenly flex-row  px-5 top-0 left-0 py-6 items-top w-full min-h-max'>
			<h1 className=' text-3xl sm:text-6xl text-[#ccd6f6] pr-2 font-bold'>
				{jobTitle}
			</h1>
			<div className='text-justify w-1/2'>
				<div className=' italic sm:text-3xl capitalize text-red-600'>
					{placeOfWork}
				</div>
				<div className='text-[#ccd6f6]'>{`${fromDate} to ${toDate}`}</div>
				<p className=' text-[#8892b0] truncate hover:text-clip hover:overflow-visible hover:whitespace-normal md:overflow-visible md:whitespace-normal'>
					{jobDescreption}
				</p>
			</div>
		</div>
	)
	//
}

export default Job
