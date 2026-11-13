
import foto from '../assets/Luca_silouette.png';
export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-svh items-center bg-white px-6 pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <img src={foto} alt="" className='h-full object-fill '/>
          </div>
          {/* Colonna sinistra: testo */}
          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <h2 className="text-5xl leading-[1.05] font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
              Chi sono
            </h2>
            <p>
              Sono Luca, sviluppatore full-stack. Lavoro sia sul front-end, con React, Tailwind, anche con CSS custom costruito sul progetto, sia sul back-end con C#/.NET, Python e PHP.
              Sviluppo anche cross-platform mobile con Flutter/Dart.
            </p>
            <p>
              Sono da sempre appassionato di informatica e videogiochi e m'interessa seguire un progetto per intero, dalle prime fasi di progettazione e stesura del prodotto all'interfaccia finale che l'utente vedrà,
              nonostante il tempo passato ancora mi diverto a mettere le mani sulla tastiera e scrivere codice per mio conto, ricercare e debuggare.
            </p>
            <p>
              Ultimamente sto approfondendo molto lo sviluppo mobile e back-end tramite Flutter e C#/.NET. Mi dedico anche a Unity nel tempo libero.
              <br /> Cerco un team/azienda in cui potermi inserire per portare il mio entusiamo e le mie conoscenze ad un livello ancora più alto
            </p>
          </div>

          {/* Colonna destra: Fotografia/Avatar*/}
          
        </div>
      </div>
    </section>
  )
}