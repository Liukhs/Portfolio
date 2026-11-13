import Carousel from '../components/ui/Carousel'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/project'

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-svh items-center px-6 pt-20 pb-16 bg-black"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          I miei progetti
        </h2>

        <Carousel className="mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className=""
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}