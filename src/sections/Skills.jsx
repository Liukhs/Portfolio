import SkillsCard from "../components/ui/SkillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-svh items-center bg-neutral-50 px-6 pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3.5 text-[#66655f] text-[11px] font-medium tracking-[0.12em]">
              <span>03</span>
              <span className="w-12 h-px bg-[#aaa9a3]"></span>
              <span>Competenze</span>
            </div>
            <h1 className="max-w-180 text-[64px] font-bold tracking[-0.07em] leading-[0.92]">Il mio <span className="text-[#6d3df5]">toolkit</span> digitale.</h1>
          </div>
          <div className="flex flex-col items-end justify-end">
            <p className="pb-2 text-[15px] leading-[1.75] max-w-97.5 m-0">
              Linguaggi, framework e strumenti che uso ogni giorno per trasformare idee
              in prodotti digitali concreti.
            </p>
          </div>

        </div>
        <div className="w-full h-px bg-[#aaa9a3] mt-10"></div>
        <SkillsCard />
      </div>
    </section>
  )
}