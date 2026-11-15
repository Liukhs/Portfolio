import foto from '../assets/Luca_silouette.png';

const skills = ["React", "Tailwind", "C# / .NET", "Flutter", "Unity"];
export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-svh items-center bg-white px-6 pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className='grid gap-10 md:grid-cols-2'>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-3.5 text-[#66655f] text-[11px] font-medium tracking-[0.12em]'>
              <span>02</span>
              <span className="w-12 h-px bg-[#aaa9a3]"></span>
              <span>Chi sono</span>
            </div>
            <h1 className="max-w-180 text-[64px] font-bold tracking[-0.07em] leading-[0.92]">Dietro il <span className="text-[#6d3df5]">codice</span>, ci sono io.</h1>
          </div>
          <div className='flex flex-col md:items-end md:justify-end'>
            <p className="pb-2 text-[15px] leading-[1.75] max-w-97.5 m-0">
              Full-stack developer, curioso per natura. Progetto prodotti digitali completi, dal primo componente all'ultima API.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-[#aaa9a3] mt-10"></div>

        <article 
        className='grid md:grid-cols-[minmax(18rem,0.82fr)_minmax(30rem,1.45fr)] rounded-[1.35rem] min-h-136 sm:min-h-63 mt-8
        overflow-hidden border border-[#bcbcbc] bg-white shadow-[0_1.5rem_3.5rem_rgba(0,0,0,0.4)]'>
          <div 
          className='relative min-h-full overflow-hidden bg-[#ed2c67]
          after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.7)_100%)] after:pointer-events-none'>
            <img src={foto} alt="Foto Luca" className='w-full h-full object-cover filter-[saturate(0.9)_contrast(1.04)]' />
            <div 
            className='absolute z-1 right-[1.6rem] bottom-6 left-[1.6rem] flex justify-between gap-4
            text-[rgba(255,255,255,0.88)] text-[0.58rem] font-semibold tracking-[0.08em] uppercase'>
              <p>Based in italy</p>
              <p>Full-stack developer</p>
            </div>
          </div>
          <div 
          className='flex flex-col p-[clamp(2rem,4vw,3.5rem)]'>
            <div 
            className='flex items-center justify-between gap-4 pb-5 border-b border-b-[#d6d6d6]
            text-[#686868] text-[0.62rem] font-semibold tracking-widest uppercase'>
              <p>Profilo</p>
              <span 
              className='flex items-center gap-[0.55rem] text-[#4c4c4c] tracking-[0.04em]'>
                <i aria-hidden="true"
                className='w-[0.4rem] h-[0.4rem] rounded-[50%] bg-[#36a968] shadow-[0_0_0_0.2rem_rgba(54,169,104,0.12)]'></i>
                  Disponibile per nuove opportunità
              </span>
            </div>
            <h2 className='max-w-156 mt-[clamp(2rem,3.5vw,3rem)] text-[clamp(1.65rem,2.6vw,2.5rem)] font-semibold tracking-[-0.045em] leading-[1.22]'>
              Mi piace capire come funziona tutto, non solo la parte che si vede.
            </h2>
            <div
            className='grid grid-cols-[1fr_1fr] gap-[clamp(1.5rem,3vw,2.75rem)] m-[2rem_0_clamp(2.2rem,4vw,3.5rem)] text-[#585858] text-[0.85rem] leading-[1.75]'>
              <p>Lavoro sul front-end con React, Tailwind e CSS custom e sul back-end con C#/.NET, Python e PHP. Sviluppo anche esperienze mobile cross-platform con Flutter e Dart.</p>
              <p>Informatica e videogiochi alimentano da sempre la mia curiosità. Seguo ogni progetto nella sua interezza, dalla struttura iniziale fino ai dettagli dell'interfaccia</p>
            </div>
            <div className='grid grid-cols-[1fr_0.8fr] gap-5 items-stretch mt-auto'>
              <div>
              <p className='mb-[0.85rem] text-[#646464] text-[0.58rem] font-semibold tracking-widest uppercase'>Tecnologie che uso</p>
              <div aria-label='Tecnologie principali' className='flex flex-wrap gap-[0.45rem]'>
                {skills.map((skill) => (
                  <span key={skill}
                  className='p-[0.48rem_0.75rem] border border-[#d3d3d3] rounded-[999px] bg-white text-[0.66rem] font-semibold'>{skill}</span>
                ))}
              </div>
              </div>
              <aside className='p-[1.2rem_1.3rem] border border-[#d7ceff] rounded-[0.8rem] bg-[#eeeaff] '>
                <p className='mb-[0.55rem] text-[#6144d5] text-[0.58rem] font-semibold tracking-widest uppercase'>Focus Attuale</p>
                <strong className='block mb-[0.3rem] text-[0.82rem]'>Mobile, back-end e Unity</strong>
                <span className='block text-[#656565] text-[0.66rem] leading-normal'>Continuo ad imparare, un progetto alla volta</span>
              </aside>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}