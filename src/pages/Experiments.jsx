import React from "react";
import ScrambleText from "../components/ScrambleText";

export default function Experiments() {
	return (
		<article className="contact active" data-page="contact">
			<header>
				<h2 className="h2 article-title">Experiments</h2>
			</header>
			<div className="w-full h-[80vh] justify-center items-center flex flex-col text-white text-4xl ">
				<div className="flex justify-center gap-8 text-6xl text-yellow-300">
					<ion-icon name="flask-outline"></ion-icon>
					<span style={{ animationDuration: "3s" }} className="animate-spin">
						<ion-icon name="logo-react"></ion-icon>
					</span>
				</div>
				<p className="cristik text-center m-0 mt-8">
					<ScrambleText>Certifications</ScrambleText>
				</p>
				
				{/* Certifications Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
					{/* Certification 1 */}
					<div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
						<img 
							src="#" 
							alt="Certification 1" 
							className="w-full h-auto rounded"
						/>
						<h3 className="text-xl font-semibold mt-2">Certification Name 1</h3>
						<p className="text-sm opacity-75">Issued by: Organization</p>
					</div>
					
					{/* Certification 2 */}
					<div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
						<img 
							src="#" 
							alt="Certification 2" 
							className="w-full h-auto rounded"
						/>
						<h3 className="text-xl font-semibold mt-2">Certification Name 2</h3>
						<p className="text-sm opacity-75">Issued by: Organization</p>
					</div>
					</div>
			</div>
		</article>
	);
}
