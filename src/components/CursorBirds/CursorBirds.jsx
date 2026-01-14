import { useEffect, useRef } from "react";
import birdLeft from "../../assets/Bird left.svg";
import birdRight from "../../assets/Bird right.svg";
import "./cursorBirds.css";

export default function CursorBirds() {
    const birdRef = useRef(null);
    const lastX = useRef(0);

    useEffect(() => {
        const bird = birdRef.current;

        const moveBird = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            bird.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

            if (x < lastX.current) {
                bird.src = birdLeft;
            } else {
                bird.src = birdRight;
            }

            lastX.current = x;
        };


        window.addEventListener("mousemove", moveBird);
        return () => window.removeEventListener("mousemove", moveBird);
    }, []);

    return <img ref={birdRef} className="bird-cursor" src={birdRight} />;
}
