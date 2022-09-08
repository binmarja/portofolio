import React from "react"

import { motion } from "framer-motion"
import Job from "./Job"

function Work({
	jobs = [
		{
			id: 1,
			jobTitle: "Job title1",
			placeOfWork: "Place of work1",
			fromDate: "from date1",
			toDate: "to date1",
			jobDescreption:
				"1 Job description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nemo qui quis nam quidem, aperiam atque ipsa officiis magnam modi, inventore est perferendis, at molestiae deserunt numquam eum neque? Quam esse id eligendi in minima reprehenderit placeat non neque repellendus fugiat obcaecati blanditiis."
		},
		{
			id: 2,
			jobTitle: "Job title2",
			placeOfWork: "Place of work2",
			fromDate: "from date2",
			toDate: "to date2",
			jobDescreption:
				"2 Job description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nemo qui quis nam quidem, aperiam atque ipsa officiis magnam modi, inventore est perferendis, at molestiae deserunt numquam eum neque? Quam esse id eligendi in minima reprehenderit placeat non neque repellendus fugiat obcaecati blanditiis."
		}
	]
}) {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 2,
				type: "tween"
				// when: "beforeChildren"
			}
		}
	}
	const item = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1
		}
	}
	return (
		<div className=' bg-[#0a192f]'>
			<motion.div
				name='work'
				variants={container}
				initial='hidden'
				animate='show'
			>
				<motion.h1
					variants={item}
					className=' w-full text-center sm:text-4xl capitalize text-[#ccd6f6] pt-14 font-bold'
				>
					{" "}
					Work Experiance
				</motion.h1>

				{jobs.map((job, id) => {
					{
						id
					}
					return (
						<Job
							key={id}
							jobDescreption={job.jobDescreption}
							jobTitle={job.jobTitle}
							fromDate={job.fromDate}
							toDate={job.toDate}
							placeOfWork={job.placeOfWork}
						/>
					)
				})}
			</motion.div>
		</div>
	)
}

export default Work
