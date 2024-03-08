import React, { useEffect, useRef } from 'react';
import './Loader.css';
import { useLocation } from 'react-router-dom';

export const Loader = () => {
    const path = useLocation();
    const left = useRef(null);
    const right = useRef(null);
    const line = useRef(null);

    const move = () => {
        left.current.style.transform = 'translateX(-100%)';
        right.current.style.transform = 'translateX(100%)';
    };

    const increaseHeight = () => {
        // Set the initial height of the line to 0%
        line.current.style.height = '0';

        // Trigger a reflow to force the browser to recognize the initial height before animating
        line.current.offsetHeight;

        // After a brief delay, set the final height to 100%
        setTimeout(() => {
            line.current.style.height = '100%';
            line.current.style.background = 'black';
            line.current.style.opacity = '0';
        }, 100); // Adjust the delay as needed
    };

    useEffect(() => {
        const increaseHeightTimeout = setTimeout(increaseHeight, 1000);
        return () => clearTimeout(increaseHeightTimeout);
    }, []);

    useEffect(() => {
        const moveTimeout = setTimeout(move, 1500);
        return () => clearTimeout(moveTimeout);
    }, []);

    return (
        <div className="loader">
            <div ref={left} className="bg-loader"></div>
            <div ref={line} className="line"></div>
            <div ref={right} className="bg-loader second"></div>
        </div>
    );
};
