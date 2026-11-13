
import foto from '../assets/Luca_silouette.png';
export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-svh items-center bg-white px-6 pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Colonna sinistra: testo */}
          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <h2 className="text-5xl leading-[1.05] font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
              Chi sono
            </h2>
            <p>
              Sono Luca, sviluppatore full-stack e mi occupo di
              API, interfacce, applicazioni.
            </p>
            <p>
              Mi piace [cosa ti appassiona o come lavori: partire dai
              problemi concreti, scrivere codice chiaro, capire come
              funzionano le cose sotto il cofano].
            </p>
            <p>
              In questo periodo sto approfondendo [cosa stai imparando] e
              cerco [cosa cerchi: un primo lavoro, collaborazioni, un
              team in cui crescere].
            </p>
          </div>

          {/* Colonna destra: Fotografia/Avatar*/}
          <div>
            <img src={foto} alt="" className='h-full object-fill max-h-96'/>
          </div>
        </div>
      </div>
    </section>
  )
}