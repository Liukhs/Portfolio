import { useState } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  //SiPhp,
  SiDotnet,
  SiFlutter,
  SiDart,
  //SiSupabase,
  SiGit,
  //SiNetlify,
  SiVercel,
  SiFigma
} from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";



const skills = [
  {
    id: "react",
    name: "React",
    mark: SiReact,
    category: "Frontend",
    eyebrow: "Libreria frontend",
    description:
      "La mia scelta principale per costruire interfacce veloci, modulari e accessibili, dai piccoli siti vetrina alle web app più articolate.",
    experience: "3+ anni",
    level: 88,
    color: "#6d3df5",
    softColor: "#eee9ff",
    technologies: ["TypeScript", "Vite", "Next.js", "Tailwind CSS"],
    projects: [
      { name: "Boardly", type: "SaaS dashboard" },
      { name: "Fuorisede", type: "Web application" },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    mark: SiJavascript,
    category: "Frontend",
    eyebrow: "Linguaggio",
    description:
      "Il linguaggio con cui trasformo layout statici in esperienze fluide, gestendo interazioni, dati e logica applicativa.",
    experience: "4+ anni",
    level: 92,
    color: "#b58a00",
    softColor: "#fff6cc",
    technologies: ["ES6+", "REST API", "DOM", "Node.js"],
    projects: [
      { name: "Portfolio 2025", type: "Portfolio personale" },
      { name: "CasaChiara", type: "Sito immobiliare" },
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind",
    mark: SiTailwindcss,
    category: "Frontend",
    eyebrow: "CSS framework",
    description:
      "Lo uso per progettare interfacce coerenti e responsive con grande velocità, mantenendo il design system vicino al codice.",
    experience: "2+ anni",
    level: 84,
    color: "#078da5",
    softColor: "#ddf8fa",
    technologies: ["Tailwind v4", "Responsive UI", "Design tokens"],
    projects: [
      { name: "Boardly", type: "Design system" },
      { name: "Studio 21", type: "Landing page" },
    ],
  },
  {
    id: "csharp",
    name: "C#",
    mark: TbBrandCSharp,
    category: "Backend",
    eyebrow: "Linguaggio backend",
    description:
      "Per applicazioni robuste e tipizzate, API REST e servizi dove struttura, manutenibilità e performance sono fondamentali.",
    experience: "3+ anni",
    level: 82,
    color: "#512bd4",
    softColor: "#ece7ff",
    technologies: ["ASP.NET Core", "Entity Framework", "LINQ"],
    projects: [
      { name: "EasyOrder", type: "Gestionale ordini" },
      { name: "Clinic API", type: "REST API" },
    ],
  },
  {
    id: "dotnet",
    name: ".NET",
    mark: SiDotnet,
    category: "Backend",
    eyebrow: "Framework",
    description:
      "Il mio ecosistema di riferimento per servizi backend scalabili, architetture pulite e integrazioni con database relazionali.",
    experience: "3+ anni",
    level: 80,
    color: "#6134d9",
    softColor: "#efeaff",
    technologies: ["Web API", "EF Core", "SQL Server", "Clean Architecture"],
    projects: [
      { name: "EasyOrder", type: "Backend gestionale" },
      { name: "Service Hub", type: "Microservizi" },
    ],
  },
  {
    id: "python",
    name: "Python",
    mark: SiPython,
    category: "Backend",
    eyebrow: "Linguaggio",
    description:
      "Lo scelgo per automazioni, analisi dei dati e prototipi backend: leggibile, versatile e perfetto per validare idee in fretta.",
    experience: "2+ anni",
    level: 76,
    color: "#28618c",
    softColor: "#e4f2ff",
    technologies: ["FastAPI", "Pandas", "Automation"],
    projects: [
      { name: "DataLens", type: "Data dashboard" },
      { name: "Report Bot", type: "Automazione" },
    ],
  },
  {
    id: "node",
    name: "Node.js",
    mark: SiNodedotjs,
    category: "Backend",
    eyebrow: "Runtime JavaScript",
    description:
      "Per API leggere, servizi real-time e progetti full-stack che condividono linguaggio e modelli tra client e server.",
    experience: "2+ anni",
    level: 78,
    color: "#367b3e",
    softColor: "#e5f4e6",
    technologies: ["Express", "REST API", "WebSocket", "PostgreSQL"],
    projects: [
      { name: "Boardly API", type: "API applicativa" },
      { name: "Live Room", type: "Real-time app" },
    ],
  },
  {
    id: "flutter",
    name: "Flutter",
    mark: SiFlutter,
    category: "Mobile",
    eyebrow: "Framework mobile",
    description:
      "Per creare applicazioni mobile curate e performanti partendo da un’unica codebase, senza rinunciare a una UI nativa.",
    experience: "2+ anni",
    level: 79,
    color: "#0876d1",
    softColor: "#e1f2ff",
    technologies: ["Dart", "Material 3", "Firebase"],
    projects: [
      { name: "PocketChef", type: "App mobile" },
      { name: "FitTrack", type: "Health app" },
    ],
  },
  {
    id: "dart",
    name: "Dart",
    mark: SiDart,
    category: "Mobile",
    eyebrow: "Linguaggio",
    description:
      "Il linguaggio che utilizzo insieme a Flutter per costruire app cross-platform solide, tipizzate e facili da mantenere.",
    experience: "2+ anni",
    level: 77,
    color: "#076d91",
    softColor: "#dff5fb",
    technologies: ["Flutter", "Riverpod", "Async"],
    projects: [
      { name: "PocketChef", type: "App mobile" },
      { name: "FitTrack", type: "Health app" },
    ],
  },
  {
    id: "git",
    name: "Git",
    mark: SiGit,
    category: "Strumenti e servizi",
    eyebrow: "Version control",
    description:
      "Alla base del mio flusso di lavoro: branch ordinati, commit leggibili e collaborazione efficace durante tutto il progetto.",
    experience: "4+ anni",
    level: 90,
    color: "#d9482f",
    softColor: "#ffebe7",
    technologies: ["GitHub", "Git Flow", "Code review", "CI/CD"],
    projects: [
      { name: "Tutti i progetti", type: "Versionamento" },
      { name: "Team workflows", type: "Collaborazione" },
    ],
  },
  {
    id: "vercel",
    name: "Vercel",
    mark: SiVercel,
    category: "Strumenti e servizi",
    eyebrow: "Cloud platform",
    description:
      "La piattaforma che utilizzo per pubblicare frontend e applicazioni full-stack con preview automatiche e deploy continui.",
    experience: "2+ anni",
    level: 83,
    color: "#111111",
    softColor: "#eeeeec",
    technologies: ["Deploy previews", "Analytics", "Edge"],
    projects: [
      { name: "Portfolio 2025", type: "Hosting" },
      { name: "Boardly", type: "Continuous deployment" },
    ],
  },
  {
    id: "figma",
    name: "Figma",
    mark: SiFigma,
    category: "Strumenti e servizi",
    eyebrow: "Design tool",
    description:
      "Lo spazio in cui progetto interfacce, componenti e prototipi prima di tradurli in codice con precisione.",
    experience: "3+ anni",
    level: 86,
    color: "#ef4b36",
    softColor: "#ffebe7",
    technologies: ["Auto Layout", "Components", "Prototyping"],
    projects: [
      { name: "Portfolio 2025", type: "UI design" },
      { name: "Boardly DS", type: "Design system" },
    ],
  },
]
const categories = ["Frontend", "Backend", "Mobile", "Strumenti e servizi"];

export default function SkillsCard(){

    const [selectedTech, setSelectedTech] = useState(null);
    const selected = skills.find((skill) => skill.id === selectedTech) ?? skills[0]
    const Icon = selected.mark;
    

    /*const activeTech = categorie
      .flatMap(cat => cat.tecnologie)
      .find(tech => tech.nome === selectedTech);

    const SelectedIcon = activeTech?.icon;
*/
   

    return(
        <div className='flex flex-col'>
          <div className='w-full grid md:grid-cols-4 gap-8 pt-7.5 pb-9'>
            {categories.map((category) =>(
              <div className='' key={category}>
                <h2 className='mb-3.5 text-[#6b6a64] text-[10px] font-medium tracking-widest uppercase'>{category}</h2>
                <div className='flex flex-wrap gap-2'>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) =>{
                      const Icon = skill.mark;
                      return(
                        <button
                        className={`inline-flex items-center gap-2 min-h-9.5 pt-1 pr-3.25 pb-1 pl-1.25 border  rounded-[999px]  cursor-pointer
                        text-[12px] font-[650] transition duration-[180] ease-in  hover:-translate-0.5 ${selectedTech == skill.id ? 'bg-black text-white border-black' : 'bg-white/45 text-[#262624] border-[#cfcec8] hover:border-[#8a8983]'}`}
                        key={skill.id}
                        onClick={() => selectedTech == skill.id ? setSelectedTech(null) : setSelectedTech(skill.id)}
                        role='tab'
                        aria-controls="skill-detail">
                          <span className='w-7 h-7 rounded-[50%] flex items-center justify-center' style={{backgroundColor: skill.softColor, color: skill.color}}> <Icon className='size-4' aria-hidden="true" /> </span>
                          <span>{skill.name}</span>
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
          <article
            className={`grid md:grid-cols-[1.25fr_0.75fr] min-h-87.5 overflow-hidden border border-[#b8b7b1] rounded-[22px] bg-[#fcfb780]/86 shadow-[0_28px_70px_rgba(38,31,18,0.08)] transition duration-300 ${selectedTech != null ? 'opacity-100' : 'opacity-0'}
              animate-[detail-in_420ms_cubic-bezier(0.2,0.7,0.2,1)_both]`}
            role='tabpanel'
            key={selectedTech}
            style={{
              "--skill-color": selected.color,
              "--skill-soft" : selected.softColor,
              "--skill-level": `${selected.level}%`,
            }}>
              
              <div className='flex flex-col p-[clamp(32px,5vw,58px)]'>
                <div className='flex gap-5'>
                  <span className='grid w-16 h-16 flex-[0_0_auto] items-center rounded-2.25xl color'><Icon className='size-14'/></span>
                  <div>
                    <span className='block mb-5 text-[--skill-color] text-[10px] font-normal tracking-[0.08em] uppercase'>{selected.eyebrow}</span>
                    <h2 className='text-[clamp(32px,4vw,48px)] font-bold tracking-tighter leading-px'>{selected.name}</h2>
                  </div>
                </div>

                <p className='max-w-162.5 my-8.5 text-[#3e3d39] text-[clamp(16px,1.7vw,20px)] tracking-[-0.015em] leading-[1.65]'>{selected.description}</p>

                <div className='flex flex-wrap gap-1.75 mt-auto'
                  aria-label='Tecnologie correlate'>
                    {selected.technologies.map((technology) => (
                      <span className='p-[7px_11px] border border-[#d5d4ce] rounded-[7px] text-[#5c5b56] text-[10px]' key={technology} >{technology}</span>
                    ))}
                  </div>
              </div>
              <aside
                className='flex flex-col justify-between p-[clamp(30px,4vw,46px)] bg-(--skill-soft) border-l border-[color-mix(in_srgb,var(--skill-color),transparent_72%)]'>
                  <div className='grid grid-cols-[1fr_auto] items-end gap-3'>
                    <span className='text-[#686762] text-[9px] font-normal leading-[0.1em] uppercase'>Esperienza</span>
                    <strong className='text-(--skill-color) text-[22px] tracking-[-0.04em]'>{selected.experience}</strong>
                    <div className='col-span-full h-1 overflow-hidden rounded-[99px] bg-white/70' aria-label={`Livello ${selected.level} su 100`}>
                      <div className='block w-(--skill-level) h-full rounded-[inherit] bg-(--skill-color) animate-[level-in_600ms_100ms_ease_both]'></div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2.25 mt-11'>
                    <span className='mb-1'>Usato in</span>
                    {selected.projects.map((project) => (
                      <div className='flex items-center justify-between p-[13px_14px] border border-[color-mix(in_srgb,var(--skill-color),transparent_75%)] rounded-[10px] bg-white/53' key={project.name}>
                        <span className='flex flex-col gap-0.5'>
                          <strong className='text-[#22221f] text-[12px] font-bold'>{project.name}</strong>
                          <small className='text-[#6d6c67] text-[9px]'>{project.type}</small>
                        </span>
                        <span className='text-[--skill-color] text-[9px]'>0{selected.projects.indexOf(project) + 1}</span>
                      </div>
                    ))}
                  </div>

                </aside>

          </article>
        </div>
    )
}