import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";

import "./App.css";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import PortfolioSheet from "./components/PortfolioSheet";
import Loader from "./components/Loader";
import Experiments from "./pages/Experiments";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
	const [sheetOpen, setSheetOpen] = useState(false);
	const [sheetData, setSheetData] = useState({});

	const sheetHandler = (data = {}) => {
		setSheetOpen(true);
		setSheetData(data);
	};

	return (
		<>
			{/* <Loader /> */}
			<PortfolioSheet
				sheetOpen={sheetOpen}
				setSheetOpen={setSheetOpen}
				sheetData={sheetData}
			/>
			<main
				className={`transition-transform  ${sheetOpen ? "scale-[0.90]" : ""}`}
			>
				<ScrollToTop />
				<SideNav />
				<Navbar />
				<div className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/experiments" element={<Experiments />} />
						<Route
							path="/portfolio"
							element={<Portfolio sheetHandler={sheetHandler} />}
						/>
					</Routes>
				</div>
			</main>
		</>
	);
}

export default App;
