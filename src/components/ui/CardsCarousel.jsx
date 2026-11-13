import { useEffect, useRef, useState } from "react";
import { cn } from '../../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CardsCarousel({children, classname}){
    const tracker = useRef(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateButtons = () =>{
        const el = tracker.current;
        if(!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }

    useEffect(()=>{
        updateButtons();
        window.addEventListener('resize', updateButtons);
        return () => window.removeEventListener('resize', updateButtons)
    })

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
                aria-label="Carosello-immagini"
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&::-webkit-scrollbar]:hidden relative"
                >
                    {Array.isArray(children)
                        ? children.map((child, i) =>(
                            <div key={i} className="shrink-0 snap-start w-full">
                                {child}
                            </div>
                        ))
                        : <div className="shrink-0 snap-start w-full">{children}</div>
                    }
            </div>
            <button
                    type="button"
                    onClick={()=>scrollByPage(-1)}
                    disabled={!canPrev}
                    aria-label="precedente"
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-40"><ChevronLeft /></button>

                <button
                    type="button"
                    onClick={()=>scrollByPage(1)}
                    disabled={!canNext}
                    aria-label="Successivo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-40"><ChevronRight /></button>
        </div>
    )
}