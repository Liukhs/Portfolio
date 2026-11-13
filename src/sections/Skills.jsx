import SkillsCard from "../components/ui/SkillsCard";

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
        <SkillsCard />
      </div>
    </section>
  )
}