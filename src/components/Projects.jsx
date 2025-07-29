import { PROJECTS } from "../constants"
import {MdArrowOutward} from "react-icons/md"

const Projects = () => {
    return (
        <section className="pt-20" id="projects">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden h-[350px] flex flex-col rounded-3xl">
                        <img src={project.image}
                            alt={project.name}
                            className="h-full w-full object-cover transition-transform duration-500
                            group-hover:scale-110" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center
                        text-white bg-black/50 opacity-0 backdrop-blur-lg transition-opacity duration-500
                        group-hover:opacity-100">
                            <h3 className="mb-2 text-xl">{project.name}</h3>
                            <p className="mb-12 p-4">{project.description}</p>
                            <div className="flex flex-row gap-2">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                className="rounded-full bg-blue-300 px-4 py-2 text-black hover:bg-blue-500">
                                    <div className="flex items-center">
                                        <span>Github</span>
                                        <MdArrowOutward />
                                    </div>    
                                </a>
                                <div className="flex flex-row gap-2">
                                    {project.website && (
                                        <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-sky-200 px-4 py-2 text-black hover:bg-sky-500"
                                        >
                                            <div className="flex items-center">
                                                <span>Website</span>
                                                <MdArrowOutward />
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects