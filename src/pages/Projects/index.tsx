import { useState, useEffect } from "react";
import { GithubReposInterface } from "../../types/github";
import ProjectCard from "./Card";

export default function Projects() {
  const [projects, setProjects] = useState<GithubReposInterface[]>([]);

  async function fetchUserGithub(ghUser: string) {
    const response = await fetch(
      `https://api.github.com/users/${ghUser}/repos?per_page=7`
    );

    const data = await response.json();

    setProjects(data)
  }

  useEffect(() => {
    fetchUserGithub('RodrigoBLima')
  }, []);

  return (
    <section className="bg-sky-100 text-black py-8 px-5 md:py-32" id="projects">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] border-sky-600 pb-2">
          Projetos
        </h2>
      </div>

      <div className="container mx-auto flex flex-wrap gap-4 overflow-auto scrollbar-hide">
        {(projects || []).map(
          (project: GithubReposInterface,) => (
            <ProjectCard key={project.name} {...project} />
          )
        )}
      </div>
    </section>
  );
}
