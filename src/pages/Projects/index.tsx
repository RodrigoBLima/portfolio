import React from "react";
import { GithubReposInterface } from "../../types/github";

import defaultImage from "../../assets/default-image.png";

export default function Projects() {
  const [projects, setProjects] = React.useState<GithubReposInterface[]>([]);

  async function fetchUserGithub(ghUser: string) {
    const response = await fetch(
      `https://api.github.com/users/${ghUser}/repos`
    );

    const data = await response.json();

    setProjects(data)
  }

  React.useEffect(() => {
    fetchUserGithub('RodrigoBLima')
  }, []);

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#464646] pb-2">
            Projects
          </h2>

          <p className="pb-5">These are some of my best projects.</p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto max-h-72 grid md:grid-cols-3 gap-10 overflow-auto scrollbar-hide">
        {(projects || []).map(
          (project: GithubReposInterface, index: number) => (
            <div className="relative" key={index}>
              <img src={defaultImage} alt={project.name} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.description}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.html_url}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
