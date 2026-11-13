import { ArrowUpRight, FileDown, Check } from "lucide-react";
import { useState } from "react";

export default function Button({reference, contenuto, icon: Icon}){
    return(
        <a
            href={reference}
            className="group relative flex max-w-fit items-center gap-2 overflow-hidden rounded-3xl bg-brand px-6 py-3 font-medium text-white transition-transform duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
                {/* fondo che scorre da sinistra */}
                <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-brand-hover transition-transform duration-500 ease-out group-hover:translate-x-0"
                />
       <span className="relative">
            {Icon && <Icon className="size-4" />}  
        </span> 
      <span className="relative">{contenuto}</span>

      {/* due frecce: una esce, l'altra entra */}
      <span className="relative block size-5 overflow-hidden">
        <ArrowUpRight className="absolute inset-0 size-5 transition-transform duration-300 ease-out group-hover:-translate-y-full group-hover:translate-x-full" />
        <ArrowUpRight className="absolute inset-0 size-5 -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </a>
    );
}

export function NavBarButton({reference, contenuto}){
    return(
        <a
            href={reference}
            className="rounded-4xl bg-brand px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            {contenuto} 
          </a>
    )
}
export function DownloadButton({reference, contenuto}){
    const [isDone, setIsDone] = useState(false);

    const handleClick = () =>{
        setIsDone(true);
        setTimeout(() => setIsDone(false), 2000)
    }

    return (
    <a
      href={reference}
      download
      onClick={handleClick}
      className="group flex max-w-fit items-center gap-2 rounded-3xl bg-brand px-6 py-3 font-medium text-white transition duration-300 hover:bg-brand-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {contenuto}
      {isDone ? (
        <Check className="size-5" />
      ) : (
        <FileDown className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
      )}
    </a>
  )
}




