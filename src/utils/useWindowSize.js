// Import the 'useState' and 'useEffect' hooks from React
import { useState, useEffect } from "react"

// Define a custom hook called 'useWindowSize'
export const useWindowSize = () => {
    // Initialize a state variable 'size' using the 'useState' hook, with initial values for width and height
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    // Use the 'useEffect' hook to add an event listener for the 'resize' event
    useEffect(() => {
        // Define a function 'updateSize' to update the 'size' state with the current window dimensions
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        } 

        // Add the 'updateSize' event listener to the 'resize' event on window
        window.addEventListener('resize', updateSize);

        // Remove the 'updateSize' event listener when the component unmounts
        return () => window.removeEventListener('resize', updateSize);
    }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

    // Return an object containing the current width and height
    return {
        width: size[0],
        height: size[1]
    }
}
