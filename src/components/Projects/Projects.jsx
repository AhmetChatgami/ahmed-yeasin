import React from "react";
import react from "../../assets/react.svg";
import prochallenger from "../../assets/prochallenger.jpg";
import homeHero from "../../assets/homeHero.jpg";
import toy from "../../assets/hero.jpg";
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import firebase from "../../assets/firebase.png";
import mongo from "../../assets/mongo.png";
import express from "../../assets/express.png";

const Projects = () => {
  const techIconStyle = "w-6 h-6 object-contain hover:scale-125 transition-transform duration-300";

  const projectList = [
    {
      title: "ProChallenger",
      img: prochallenger,
      desc: "A robust Full-Stack Web Application built with the MERN stack for high-performance task management.",
      stack: [react, tailwind, node, express, mongo, firebase],
      github: "https://github.com/AhmetChatgami/proChallenger.git",
      live: "https://ornate-horse-0239d6.netlify.app/",
      isNew: true
    },
    {
      title: "Home Hero",
      img: homeHero,
      desc: "A comprehensive Service Provider Web Application focusing on dynamic UI and backend integration.",
      stack: [javascript, react, node, express, mongo, firebase],
      github: "https://github.com/AhmetChatgami/homeHero.git",
      live: "https://voluble-narwhal-c287c9.netlify.app/",
      isNew: false
    },
    {
      title: "Toy Tophia",
      img: toy,
      desc: "An engaging e-commerce interface with real-time search functionality for toy discovery.",
      stack: [htmlLogo, css, javascript, react, tailwind],
      github: "https://github.com/AhmetChatgami/assignment-8.git",
      live: "https://zesty-hero-app-ab6a38.netlify.app/",
      isNew: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2 mb-4">
            My Projects
          </h2>
          <p className="text-gray-500 text-lg">A selection of my best work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-base-300 flex flex-col h-full">
              <figure className="relative h-56 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-60"></div>
              </figure>
              
              <div className="card-body p-6 flex-grow">
                <h2 className="card-title text-xl text-secondary flex justify-between">
                  {project.title}
                  {project.isNew && <span className="badge badge-accent badge-sm">New</span>}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                
                <div className="mt-auto">
                  <p className="text-[10px] font-bold mb-3 uppercase text-gray-400 tracking-wider">Built With:</p>
                  <div className="flex flex-wrap gap-2 p-3 bg-base-200 rounded-xl">
                    {project.stack.map((icon, i) => (
                      <img key={i} src={icon} className={techIconStyle} alt="tech" />
                    ))}
                  </div>
                </div>

                <div className="card-actions justify-end mt-6 pt-4 border-t border-base-200">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">GitHub</a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;