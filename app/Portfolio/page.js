'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);

  const categories = ["All", "Videoediting", "Motiondesign", "Graphicdesign", "Webdesign"];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/Workdata.js");
      const data = await res.json();
      setProjects(data[0].projects);
    };
    fetchData();
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.type === activeCategory
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div id="portfolio" className="font-serif w-full">
      <h2 className="text-[18px] text-center mt-4">PORTFOLIO</h2>
      <h1 className="text-[50px] text-center mt-2">See some of my work</h1>

      {/* Scrollable Cards */}
      <div className="w-full overflow-x-auto scrollbar-none px-4 py-8">
        <div className="flex gap-12 py-4 w-fit mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card w-[300px] h-[420px] shrink-0 bg-gray-200 rounded-3xl"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt="Project"
                  width={300}
                  height={420}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Below Cards */}
      <div className="mt-8 flex lg:flex-row flex-wrap text-center lg:gap-16 gap-4 w-full justify-center items-center text-[20px] font-semibold">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`transition duration-200 ${
              activeCategory === category ? "text-blue-500" : "text-white"
            }`}
          >
            {category === "Videoediting"
              ? "Video Editing"
              : category === "Motiondesign"
              ? "Motion Design"
              : category === "Graphicdesign"
              ? "Graphic Design"
              : category === "Webdesign"
              ? "WebDev Design"
              : "All"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
