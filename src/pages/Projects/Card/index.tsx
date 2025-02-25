import { GithubReposInterface } from "../../../types/github";

interface ProjectCardProps extends GithubReposInterface { }

export default function ProjectCard(props: ProjectCardProps) {

  const { name, description, html_url } = props

  return (

    <div className="flex flex-col justify-between w-full md:w-60 min-h-[140px] bg-white rounded-lg transform transition duration-300 hover:scale-105">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
        <p className="text-sm text-gray-600 text-center mt-2">
          {description || "Sem descrição disponível"}
        </p>
      </div>
      <div className="bg-gray-100 px-6 py-4 flex justify-center">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white font-medium rounded-lg shadow-md"
        >
          Ver Repositório
        </a>
      </div>
    </div>

  )
}
