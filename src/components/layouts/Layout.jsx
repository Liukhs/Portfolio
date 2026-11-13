/*
Classe per il Layout generale dell'applicazione, in questo caso implementata per lo scroll smooth e lo snap delle sezioni
*/ 

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navbar from './Navbar';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Layout({children}){
    const wrapper = useRef(null);

    useGSAP(()=>{
        //Scroll fluido
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effectst: true,
            normalizeScroll: true,
        })

        //Snap delle sezioni, solo desktop
        const mm = gsap.matchMedia()

        mm.add(
            '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
            ()=>{
               /* const sections = gsap.utils.toArray('section', wrapper.current)

                console.log(sections.length);

                const triggers = sections.map((section) =>
                    ScrollTrigger.create({trigger: section, start:'top top'})
                );

                ScrollTrigger.create({
                    snap:{
                        snapTo: (value) =>{
                            
                            const max = ScrollTrigger.maxScroll(window)
                            console.log(max)
                            const points = triggers.map((t) => t.start / max)
                            console.log(points)
                            console.log(value)
                            return gsap.utils.snap(points, value)
                        },
                        duration: {min: 0.2, max: 0.6},
                        delay: 0.2,
                        ease: "power1.inOut"
                    },
                })*/
            }
        )
        //ora che tutto è montato ricalcola le posizioni
        ScrollTrigger.refresh();

        const timer = setTimeout(()=>{
            ScrollTrigger.refresh();
        }, 100);

        return () => clearTimeout(timer);
    }, {scope: wrapper})

    return(
        <>
            <Navbar />

            <div id="smooth-wrapper" ref={wrapper}>
                <div id="smooth-content">{children}</div>
            </div>
        </>
    )
}

