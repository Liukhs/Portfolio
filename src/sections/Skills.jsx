import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiDotnet,
  SiFlutter,
  SiDart,
  SiSupabase,
  SiGit,
  SiNetlify,
} from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";
 
// Per aggiungere una tecnologia: una riga dentro la categoria giusta.
// Per aggiungere una categoria: un nuovo oggetto nell'array.
const categorie = [
  {
    titolo: 'Frontend',
    tecnologie: [
      { nome: 'React', icon: SiReact },
      { nome: 'JavaScript', icon: SiJavascript },
      { nome: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    titolo: 'Backend',
    tecnologie: [
      { nome: 'C#', icon: TbBrandCSharp },
      { nome: '.NET', icon: SiDotnet },
      { nome: 'Python', icon: SiPython },
      { nome: 'PHP', icon: SiPhp },
      { nome: 'Node.js', icon: SiNodedotjs },
    ],
  },
  {
    titolo: 'Mobile',
    tecnologie: [
      { nome: 'Flutter', icon: SiFlutter },
      { nome: 'Dart', icon: SiDart },
    ],
  },
  {
    titolo: 'Strumenti e servizi',
    tecnologie: [
      { nome: 'Git', icon: SiGit },
      { nome: 'Supabase', icon: SiSupabase },
      { nome: 'Netlify', icon: SiNetlify },
    ],
  },
]
 
export default function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-svh items-center bg-neutral-50 px-6 pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-5xl leading-[1.05] font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
          Competenze
        </h2>
 
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {categorie.map(({ titolo, tecnologie }) => (
            <div key={titolo}>
              <h3 className="text-xl font-semibold text-neutral-900">
                {titolo}
              </h3>
 
              <ul className="mt-4 flex flex-wrap gap-3">
                {tecnologie.map(({ nome, icon: Icon }) => (
                  <li
                    key={nome}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    <span className="text-sm font-medium">{nome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}