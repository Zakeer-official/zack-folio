import React, { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

export default function About() {
	 const location = useLocation()
		useEffect(() => {
	    if (location.hash === '#skills') {
	      setTimeout(() => {
	        const element = document.getElementById('skills')
	        if (element) {
	          const headerHeight = 80
	          const elementPosition = element.getBoundingClientRect().top
	          const offsetPosition = elementPosition + window.scrollY - headerHeight
	          
	          window.scrollTo({
	            top: offsetPosition,
	            behavior: 'smooth'
	          })
	        }
	      }, 300)
	    }
	  }, [location.hash]);
	const Experience = [
		{
			company: "Forever Living Products",
			companyLogo:
				"https://miro.medium.com/v2/resize:fit:522/1*Kns5wXF4n_f5sHKOxd4Alw.png",
			role: "Entrepreneur",
			duration: "Feb 2022 - May 2022",
			description:
				"Drove significant growth in leads through data-driven marketing strategies, enhanced client satisfaction via proactive engagement, and reduced acquisition costs through analytics optimization.",
		},
		// {
		// 	company: "IET NITK",
		// 	companyLogo:
		// 		"https://media.licdn.com/dms/image/v2/C560BAQGRxeqgiYrF8A/company-logo_200_200/company-logo_200_200/0/1630671178062/ietnitk_logo?e=2147483647&v=beta&t=VwQlt58O41AxWK3hbTzCanMAnn3gB2LAUlcLx08Mxd4",
		// 	role: "Executive Member",
		// 	duration: "Sept 2024 - Present",
		// 	description:
		// 		"As a member of the Coding SiG CIPHER, I'm working on innovative technical projects and participating in various competitions and hackathons.",
		// },
		
	];
	const Skills = [
		{
			category: (
				<p className="flex gap-2 items-center text-2xl">
					<ion-icon name="code-slash-outline"></ion-icon>{" "}
					<p className="text-lg opacity-75"> Languages</p>
				</p>
			),
			skill: [
				{ name: "Javascript", image: "javascript.svg" },
				// { name: "Typescript", image: "typescript.svg" },
				{ name: "C++", image: "c++.svg" },
				{ name: "C", image: "c.svg" },
				{ name: "Python", image: "python.svg" },
			],
		},
		{
			category: (
				<p className="flex gap-2 items-center text-2xl">
					<ion-icon name="laptop-outline"></ion-icon>{" "}
					<p className="text-lg opacity-75">Frontend</p>
				</p>
			),
			skill: [
				{ name: "HTML", image: "html5.svg" },
				{ name: "CSS", image: "css.svg" },
				{ name: "Tailwind css", image: "tailwindcss.svg" },
				{ name: "Shadcn-ui", image: "shadcn-ui.svg" },
				{ name: "React", image: "react.svg" },
				// { name: "React query", image: "reactquery.svg" },
				// { name: "React router", image: "reactrouter.svg" },
				// { name: "Redux", image: "redux.svg" },
				{ name: "React Native", image: "react.svg" },
			],
		},
		{
			category: (
				<p className="flex gap-2 items-center text-2xl ">
					<ion-icon name="server-outline"></ion-icon>
					<p className="text-lg opacity-75"> Backend</p>
				</p>
			),
			skill: [
				{ name: "Node.js", image: "nodejs.svg" },
				// { name: "Express.js", image: "expressjs.svg" },
				{ name: "Next.js", image: "nextjs_icon_dark.svg" },
				{ name: "MongoDB", image: "mongodb.svg" },
				{ name: "JWT", image: "jwt.svg" },
				// { name: "AWS", image: "aws.svg" },
				// { name: "Docker", image: "docker.svg" },
				// { name: "Nginix", image: "nginx.png" },
				// { name: "Kalfka", image: "kalfka.png" },
				// { name: "Socket.io", image: "socket.webp" },
				// { name: "Web RTC", image: "webrtc.png" },
				// { name: "GraphQL", image: "graphql.png" },
				{ name: "Prisma", image: "prisma.svg" },

				// { name: "Firebase", image: "firebase.svg" },
			],
		},
		{
			category: (
				<p className="flex gap-2 items-center text-2xl ">
					<ion-icon name="hammer-outline"></ion-icon>
					<p className="text-lg opacity-75">Tools</p>
				</p>
			),

			skill: [
				{ name: "Github", image: "github.svg" },
				// { name: "NPM", image: "npm.svg" },
				{ name: "VS Code", image: "vscode.svg" },
				// { name: "Linux", image: "linux.svg" },
				{ name: "Figma", image: "figma.svg" },
				// { name: "Illustrator", image: "illustrator.svg" },
			],
		},
	];
	return (
		<article className="about  active" data-page="about">
			<header>
				<h2 className="h2 article-title cristik font-extralight">About me</h2>
			</header>
			<section className="about-text max-w-[600px]">
				<p>
					Hey I am Zakeer, an Enthusiastic Web Devloper and Designer . I Design
					, Code and Create modern user interfaces with a thirst for knowledge,
					passion to learn and a love for problem-solving.
				</p>

				<p>
					Transforming ideas into seamless digital experiences . Committed to
					crafting dynamic and innovative web solutions.
				</p>
			</section>
			<section className="service">
				<h3 className="h3 service-title ">What i Do ?</h3>

				<ul className="service-list">
					<li className="service-item">
						<div className="service-icon-box">
							<img src="icon-design.svg" alt="design icon" width="40" />
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">UI/UX design</h4>

							<p className="service-item-text">
								The most modern and high-quality design made at a professional
								level.
							</p>
						</div>
					</li>

					<li className="service-item">
						<div className="service-icon-box">
							<img src="icon-dev.svg" alt="Web development icon" width="40" />
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">
								Fullstack Web development
							</h4>

							<p className="service-item-text">
								High-quality development of sites at the professional level.
							</p>
						</div>
					</li>
				</ul>
			</section>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="book-outline"></ion-icon>
					</div>

					<h3 className="h3 font-semi bold">Experience</h3>
				</div>

				<ol className="timeline-list">
					{Experience.map((role) => (
						<li className="timeline-item ">
							<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
								<img
									className="w-[50px] h-[50px] rounded-lg border border-gray-600"
									src={
										role.companyLogo ||
										"https://media.licdn.com/dms/image/D560BAQEBdmCjop6pRg/company-logo_200_200/0/1712684860643/synkerr_logo?e=2147483647&v=beta&t=WisZ2qvfrBFPW5pTlEQjPRi7ViAfhCSrtgEy5hPvPfY"
									}
									alt=""
								/>
								<div>
									<h4 className="h4 timeline-item-title">
										<b>{role.role} </b> <br/>
										{role.company}{" "}
									</h4>

									<span>{role.duration}</span>

									<p className="timeline-text">{role.description}</p>
								</div>
							</div>
						</li>
					))}
				</ol>
			</section>
			<div className="separator"></div>
			<section id="skills" className="skill ">
				<div className="title-wrapper ">
					<div className="icon-box mr-4">
						<ion-icon name="hammer-outline"></ion-icon>
					</div>

					<h3 className="h3 font-semibold">My Skills</h3>
				</div>

				<ol className="timeline-list">
					{Skills.map((skill) => (
						<div className="  mt-6 mr-8">
							<h4 className="skills-title cristik font-medium text-yellow-200  overflow-hidden mb-0 p-4">
								{skill.category}
							</h4>
							<div className=" grid grid-cols-6 text-white gap-1 w-auto ">
								{skill.skill.map((s) => (
									<div className=" bg-[#2a2a2b]  w-full p-5 m-0 flex flex-col items-center gap-3  justify-between hover:scale-110 hover:rotate-3 hover:z-[10] hover:border border-gray-600 duration-200 grayscale hover:grayscale-0 ">
										<img
											src={s.image}
											className="max-w-[30px] max-h-[30px] "
											alt=""
										/>
										<p className="text-center text-sm opacity-60 "> {s.name}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</ol>
			</section>
			<div className="separator"></div>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="school-outline"></ion-icon>
					</div>

					<h3 className="h3 font-semibold">Education</h3>
				</div>

				<ol className="timeline-list">
					<li className="timeline-item">
						<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
							<img
								className="w-[50px] h-[50px] rounded-lg border border-gray-600"
								src="logo-clg.png"
								alt=""
							/>
							<div>
								<h4 className="h4 timeline-item-title  font-semibold ">
									Amrita Vishwa Vidyapeetham
								</h4>

								<span>Bachelor of Technology (B.Tech) </span>
								<span className="text-xs">Computer Science and Engineering </span>

								<p className="timeline-text">2021-2025</p>
							</div>
						</div>
					</li>

					<li className="timeline-item">
						<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
							<img
								className="w-[50px] h-[50px] rounded-lg border border-gray-600"
								src="logo-nar.png"
								alt=""
							/>
							<div>
								<h4 className="h4 timeline-item-title font-semibold ">
									Narayana Junior College
								</h4>

								<span>Intermediate - MPC</span>

								<p className="timeline-text">2019-2021</p>
							</div>
						</div>
					</li>
					<li className="timeline-item">
						<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
							<img
								className="w-[50px] h-[50px] rounded-lg border border-gray-600"
								src="logo-nar.png"
								alt=""
							/>
							<div>
								<h4 className="h4 timeline-item-title font-semibold ">
									Narayana Co School
								</h4>

								<span> Class - X </span>

								<p className="timeline-text">2018-2019</p>
							</div>
						</div>
					</li>

					
				</ol>
			</section>
		</article>
	);
}
