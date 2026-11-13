import { useState } from 'react';
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
];

export default function SkillsCard(){

    const [selectedTech, setSelectedTech] = useState(null);

   

    return(
        <div className='flex-col items-center justify-center'>
        <div className='mt-12 grid gap-10 md:grid-cols-2'>
            {
                categorie.map(({titolo, tecnologie}) =>(
                    <div
                    key={titolo}
                    className='flex-col items-center'>
                        <h3 className='text-xl font-semibold text-black'>
                            {titolo}
                        </h3>
                        <ul className='mt-4 flex flex-wrap gap-3'>
                            {tecnologie.map(({ nome, icon: Icon })=>(
                                <li 
                                className="flex-col rounded-full items-center justify-center p-4 border-2 border-black hover:text-blue-700 hover:border-blue-700 transition duration-300 hover:-translate-y-1"
                                onClick={() => 
                                    setSelectedTech(nome)
                                }>
                                    <Icon className='size-5' aria-hidden="true" />
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
        {
            selectedTech != null ?
            <div>
                <h3 className='text-xl font-semibold text-black'>
                    {selectedTech}
                </h3>
            </div>
            : null
        }
        </div>
    )
}