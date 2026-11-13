import { cn } from '../../lib/utils'
import CardsCarousel from '../ui/CardsCarousel'

export default function ProjectCard({ project, className }) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-xl border border-neutral-200 p-6 w-full bg-brand mt-5',
        className
      )}
    >
      <h3 className="text-2xl font-semibold text-neutral-900">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-neutral-600">{project.description}</p>
      <CardsCarousel classname="mt-12">
        {project.image.map((src) =>(
          <div className='mx-auto w-full scroll-px-6 h-36'
            style={{ backgroundImage: `url(${src})`}}
            >
            
          </div>
        ))}
      </CardsCarousel>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-brand underline-offset-4 hover:underline"
      >
        Vedi su GitHub
      </a>
    </article>
  )
}