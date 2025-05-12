import React, { useState } from "react";
import { Projects } from "../assets/Projects";

export default function Portfolio({ sheetHandler }) {
	const [isSelected, setIsSelected] = useState("All");

	const filterProjects =
		isSelected === "All"
			? Projects
			: Projects.filter((project) => project.categories.includes(isSelected));

	return (
		<article className="portfolio active" data-page="portfolio">
			<header>
				<h2 className="h2 article-title spacegrotesk">Projects</h2>
			</header>

			<section className="projects">
				<ul className="filter-list">
					<li className="filter-item">
						<button
							className={isSelected == "All" ? "active" : ""}
							onClick={() => setIsSelected("All")}
							data-filter-btn
						>
							All
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "Web Development" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("Web Development")}
						>
							Web Development
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "App Development" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("App Development")}
						>
							App Development
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "UI/UX Design" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("UI/UX Design")}
						>
							UI/UX Design
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "Graphic Design" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("Graphic Design")}
						>
							Graphic Design
						</button>
					</li>
				</ul>

				<div className="filter-select-box">
					<button className="filter-select" data-select>
						<div className="select-value" data-selecct-value>
							Select category
						</div>

						<div className="select-icon">
							<ion-icon name="chevron-down"></ion-icon>
						</div>
					</button>

					<ul className="select-list">
						<li className="select-item">
							<button data-select-item>All</button>
						</li>

						<li className="select-item">
							<button data-select-item>Web design</button>
						</li>

						<li className="select-item">
							<button data-select-item>Applications</button>
						</li>

						<li className="select-item">
							<button data-select-item>Web development</button>
						</li>
					</ul>
				</div>

				<div className="grid  md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 cursor-pointer">
					{filterProjects.map((project) => (
						<div
							onClick={() => sheetHandler(project)}
							className="bg-[#2b2b2c6a] hover:bg-[linear-gradient(0deg,_rgba(254,202,102,0.15)_0%,_transparent_100%)] bg-[linear-gradient(0deg,_rgba(254,202,102,0.05)_0%,_transparent_100%)] p-8 rounded-2xl text-white h-[300px] relative overflow-hidden border-[#363636] border group transition-all duration-300 hover:border-[#585858]"
						>
							<p className="spacegrotesk  text-xl font-bold ">
								{project.title}
							</p>
							<p className=" text-[#ffffffd8] font-thin mt-2 line-clamp-3">
								{project.description ||
									"Synkerr is a dynamic social media platform designed to connect users with shared interests and passions. It provides a space where individuals can engage in meaningful conversations, share multimedia content, and discover new communities."}
							</p>
							<img
								src={project.img[0]}
								alt=""
								className="absolute bottom-[-40px] h-[180px] rounded-lg shadow-[0_10px_50px_-12px_rgba(0,0,0,0.85)] left-8 group-hover:rotate-[-3deg] transition-transform group-hover:scale-[1.05] group-hover:translate-x-[-10px] w-[60%] object-cover bg-top"
							/>
							<img
								src={project.img[1] || project.img[0]}
								alt=""
								className="absolute bottom-[-40px] h-[140px] rounded-lg shadow-[0_10px_50px_-12px_rgba(0,0,0,0.85)] right-8 group-hover:rotate-[3deg] transition-transform group-hover:scale-[1.05] group-hover:translate-x-[10px]  "
							/>
						</div>
					))}
				</div>
			</section>
		</article>
	);
}
