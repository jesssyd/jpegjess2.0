"use client";

import Header from "./components/Header";
import Contact from "../../components/Contact";
import Card from "./components/Card";
import { projects } from "./projects/projects";
export default function ProjectsPage() {
  return (
    <main>
      <Header></Header>
      <section className="section page-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            date={project.date}
            link={project.link}
          />
        ))}
        <h2 className="text-center">more to come :D</h2>
      </section>
      <Contact></Contact>
    </main>
  );
}
