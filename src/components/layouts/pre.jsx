import { useState, useEffect } from "react"

export default function Pre(){

    const [isDone, setIsDone] = useState(false);
    const [fading, setFading] = useState(false);

    useEffect(()=>{
        if(isDone) return;
        const fadeTimer = setTimeout(()=>setFading(true), 2000);
        const removeTimer = setTimeout(()=>setIsDone(true), 2500);
        document.documentElement.style.overflow = "hidden";
        

        return() =>{
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
            document.documentElement.style.overflow = "";
        }
    }, [isDone]);

    if (isDone) return null;

    return(
        <div 
            role="status"
            aria-label="Caricamento"
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${fading ? "pointer-events-none opacity-0" : "opacity-100"}`}>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>

        </div>
    )
}