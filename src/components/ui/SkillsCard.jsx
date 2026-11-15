import { useState } from 'react';
import { skills, categories } from '../../data/skills';

export default function SkillsCard(){

    const [selectedTech, setSelectedTech] = useState(null);
    const selected = skills.find((skill) => skill.id === selectedTech) ?? skills[0]
    const Icon = selected.mark;

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
                        text-[12px] font-[650] 
                        transition duration-200 ease-in hover:-translate-0.5 
                        ${selectedTech == skill.id ? 'bg-black text-white border-black' : 'bg-white/45 text-[#262624] border-[#cfcec8] hover:border-[#8a8983]'}`}
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
            className={`grid md:grid-cols-[1.25fr_0.75fr] overflow-hidden border border-[#b8b7b1] rounded-[22px] bg-[#fcfb780]/86 shadow-[0_28px_70px_rgba(38,31,18,0.08)] 
            transition-[max-height,opacity] duration-300 ease-in ${selectedTech != null ? 'opacity-100 min-h-87.5' : 'opacity-0 max-h-0'}
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
                  <span className='grid w-16 h-16 flex-[0_0_auto] items-center rounded-2.25xl color'><Icon className='size-14 text-(--skill-color)'/></span>
                  <div>
                    <span className='block mb-5 text-[--skill-color] text-[10px] font-normal tracking-[0.08em] uppercase'>{selected.eyebrow}</span>
                    <h2 className='text-[clamp(32px,4vw,48px)] font-bold tracking-tighter leading-px'>{selected.name}</h2>
                  </div>
                </div>

                <p className='max-w-162.5 my-8.5 text-[#3e3d39] text-[clamp(16px,1.7vw,20px)] tracking-[-0.015em] leading-[1.65]'>{selected.description}</p>

                <div className='flex flex-wrap gap-1.75 mt-auto'
                  aria-label='Tecnologie correlate'>
                    {selected.technologies.map((technology) => (
                      <span 
                      className='p-[7px_11px] border border-[#d5d4ce] rounded-[7px] text-[#5c5b56] text-[10px] cursor-default 
                      hover:bg-(--skill-color) hover:text-white hover:-translate-y-1
                      transition duration-300 ease-in' key={technology} >{technology}</span>
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
                      <div 
                      className='flex items-center justify-between p-[13px_14px] border border-[color-mix(in_srgb,var(--skill-color),transparent_75%)] rounded-[10px] bg-white/53' 
                      key={project.name}>
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