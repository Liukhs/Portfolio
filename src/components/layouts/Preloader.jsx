

export default function Preloader({fading}){

    return(
        <div 
            role="status"
            aria-label="Caricamento"
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 min-h-svh ${fading ? "pointer-events-none opacity-0" : "opacity-100"}`}>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>

        </div>
    )
}