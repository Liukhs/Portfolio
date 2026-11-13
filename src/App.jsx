import Navbar from './components/layouts/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Skills from './sections/Skills';
import Preloader from './components/layouts/Preloader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export default function App() {

  const[isDone, setIsDone] = useState(false);
  const[fading, setFading] = useState(false);

  useEffect(()=>{
    if(isDone) return;
    const fadeTimer = setTimeout(()=>setFading(true), 2000);
    const removeTimer = setTimeout(()=>setIsDone(true), 2500); 

    return() =>{
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
    }
  }, [isDone])

  useEffect(() => {
    if (!isDone) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    // Pulizia alla chiusura del componente
    return () => {
      smoother.kill();
    };
  }, [isDone]);

  if(isDone){
  return (
    <>
    <Navbar />
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </div>
    </>
    
  );
}else{
  return <><Preloader fading={fading}/></>
}
}

