import Button, { DownloadButton } from "../components/ui/Button";
import { FileCheck } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const links = [
    {nome: "GitHub", href: "https://github.com/Liukhs", icon: LuGithub },
    {nome: "Linkedin", href: "https://www.linkedin.com/in/luca-soldi-142923206/", icon: FaLinkedinIn }
]

export default function Hero(){

    const container = useRef(null);

    useGSAP(()=>{
        gsap.from('.hero-item', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        })
    }, {scope: container})

    return(
        <section
            id="home"
            className="flex min-h-svh items-stretch px-6 pt-20 pb-16 bg-black"
            ref={container}>

                <div className="mx-auto w-full max-w-5xl flex  justify-center flex-wrap">
                    <div className="flex flex-col flex-2 justify-center min-w-3xs">
                        <h1 className="max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl hero-item">
                            I'm a Full-Stack Developer
                        </h1>
                        <p className="mb-2 text-base text-neutral-500 md:text-lg mt-2 hero-item">
                            One Developer. From concept to production.
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-4 hero-item">
                            {links.map(({nome, href, icon}) =>
                                <Button reference={href} contenuto={nome} icon={icon}/>
                            )}
                        
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-center hero-item" aria-label="Download CV" >
                        <FileCheck height={250} width={250} color="#ffffff" strokeWidth={0.08} aria-label="Download CV"/>
                        <DownloadButton reference="#download" contenuto="Scarica il CV"/>
                    </div>
                    

                    



                </div>

                

        </section>
    )
}