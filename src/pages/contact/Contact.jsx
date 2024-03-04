import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/loader/Loader';
import { useLocation } from 'react-router-dom';

export const Contact = () => {
    const path = useLocation();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true

    useEffect(() => {
        // Simulate loading by setting isLoading to false after a short delay
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Change the timeout duration as needed

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeout);
    }, [path.pathname]); // Run useEffect whenever path.pathname changes

    return (
        <div>
            {/* Conditional rendering of Loader based on isLoading state */}
            {isLoading ? <Loader /> : <div>Contact</div>}
        </div>
    );
};
