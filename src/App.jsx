import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Skills from './sections/Skills';
import Preloader from './components/layouts/Preloader';
import { useState, useEffect } from "react";
import Layout from './components/layouts/Layout';




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

  if(!isDone) return <Preloader fading={fading} />

  return(
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </Layout>
  )
}

