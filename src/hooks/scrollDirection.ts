import {useEffect, useState} from "react";

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);  //run when scroll direction changes

    return scrollDirection;
};