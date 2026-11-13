import { useEffect, useRef, useState } from "react";
import { cn } from '../../lib/utils';

/*
  Uso:
  <Carousel>
    {projects.map((p) => (
      <ProjectCard key={p.slug} project={p} className="w-72 sm:w-80" />
    ))}
  </Carousel>
 
  Ogni figlio viene avvolto in uno slot che si aggancia (snap) allo scroll.
  La larghezza delle card la decidi tu sulle card stesse.
*/

export default function Carousel({children, classname}){
    const tracker = useRef(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateButtons = () =>{
        const el = tracker.current;
        if(!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }

    useEffect(()=>{
        updateButtons();
        window.addEventListener('resize', updateButtons);
        return () => window.removeEventListener('resize', updateButtons)
    }, [])

    const scrollByPage = (direction) =>{
        const el = tracker.current;
        if(!el) return;
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
        el.scrollBy({
            left: direction * el.clientWidth * 0.8,
            behavior: reduceMotion ? 'auto' : 'smooth',
        })
    }

    return(
        <div className={cn('relative', classname)}>
            <div
                ref={tracker}
                onScroll={updateButtons}
                tabIndex={0}
                role="region"
                aria-label="Carosello"
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&::-webkit-scrollbar]:hidden"
            >
                {Array.isArray(children)
                    ? children.map((child, i) => (
                        <div key={i} className="shrink-0 snap-start w-full">
                            {child}
                        </div>
                    ))
                    : <div className="shrink-0 snap-start w-full">{children}</div>}
            </div>

            <div className="mt-4 flex justify-end gap-2">
                <button
                    type="button"
                    onClick={()=>scrollByPage(-1)}
                    disabled={!canPrev}
                    aria-label="Precedente"
                    className="rounded-lg border border-neutral-300 px-4 py-2 transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-300 disabled:hover:text-inherit"    
                >
                    Indietro
                </button>
                <button
                    type="button"
                    onClick={()=>scrollByPage(1)}
                    disabled={!canNext}
                    aria-label="Successivo"
                    className="rounded-lg border border-neutral-300 px-4 py-2 transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-300 disabled:hover:text-inherit"
                > Avanti</button>
            </div>
        </div>
    )
}