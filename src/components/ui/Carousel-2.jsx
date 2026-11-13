import { useState } from "react";

export default function CarouselDue({children}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const handleNext = ()=>{
        if(!canNext) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const handlePrev = () =>{
        if(!canPrev) return
        setCurrentIndex((prevIndex) => prevIndex === 0 ? children.length - 1 : prevIndex-1);
    }

    return(
        <div className="carousel">
            <div className="slideContent"></div>
            <button onClick={handlePrev}>Indietro</button>
            <button onClick={handleNext}>Avanti</button>
        </div>
    )
}