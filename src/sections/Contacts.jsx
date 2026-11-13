import { useState } from "react";

const socials = [
  { label: 'GitHub', href: 'https://github.com/tuo-username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tuo-username' },
  
] 

const inputClass = 'w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-visible:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'


const encode = (data) =>
  new URLSearchParams(data).toString()
export default function Contacts(){
    const [status, setStatus] = useState("idle"); //idle | sending | success | error

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target)

        try{
            const res = await fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode(Object.fromEntries(formData))
            })
            if(!res.ok) throw new Error('Invio fallito');
            e.target.reset();
            setStatus('success');
        }catch{
            setStatus('error')
        }
    }

    return(
        <section
            id="contacts"
            className="flex min-h-svh items-center px-6 pb-16">
                <div className="mx-auto w-full max-w-5xl">
                    <h2 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
                        Contatti
                    </h2>

                    <div className="mt-12 grid gap-12 md:grid-cols-2">
                        
                        <div>
                            <p className="max-w-md text-lg leading-relaxed text-neutral-600">
                                Puoi visitare i miei canali social
                            </p>

                            <ul className="mt-8 space-y-4">
                                {socials.map(({label, href}) => (
                                    <li key={label}>
                                        <a href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel="noreferrer"
                                            className="text-xl font-medium text-neutral-900 underline-offset-4 transition hover:text-brand hover:underline focus-visble:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-5"
                                >
                                    <input type="hidden" name="form-name" value="contact" />

                                    <p className="hidden">
                                        <label>
                                            Non compilare questo campo: <input name="bot-field"/>
                                        </label>
                                    </p>

                                    <div>
                                        <label htmlFor="nome" className="mb-2 block font-medium">
                                            Nome
                                        </label>
                                        <input type="text" name="nome" id="nome" required autoComplete="name" className={inputClass} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block font-medium">
                                            Email
                                        </label>
                                        <input type="text" name="email" id="email" required autoComplete="email" className={inputClass} />
                                    </div>
                                    <div>
                                        <label htmlFor="messaggio" className="mb-2 block font-medium">
                                            Messaggio
                                        </label>
                                        <textarea name="messaggio" id="messaggio" rows={5} required className={inputClass}></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="rounded-lg bg-brand px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                        >
                                            {status === 'sending' ? 'Invio in corso...' : 'Invia messaggio'}
                                        </button>

                                        <p role="status" aria-live="polite" className="min-h-6">
                                            {status === 'success' && (
                                                <span className="text-green-700">
                                                    Messaggio inviato, ti risponderò presto.
                                                </span>
                                            )}
                                            {status === 'error' && (
                                                <span className="text-red-700">
                                                    Qualcosa è andato storto, riprova più tardi.
                                                </span>
                                            )}
                                        </p>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}