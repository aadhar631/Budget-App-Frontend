import React from 'react'; // Import the React library
import styled from 'styled-components'; // Import styled-components for styling

// Define a functional component called 'Button' with props
function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    return (
        // Return a styled button element with inline styles based on props
        <ButtonStyled style={{
            background: bg, // Background color based on 'bg' prop
            padding: bPad, // Padding based on 'bPad' prop
            borderRadius: bRad, // Border radius based on 'bRad' prop
            color: color, // Text color based on 'color' prop
        }} onClick={onClick}>
            {icon} {name}
        </ButtonStyled>
    );
}

// Create a styled button component using styled-components
const ButtonStyled = styled.button`
    outline: none; // Remove default button outline
    border: none; // Remove default button border
    font-family: inherit; // Inherit font family from parent
    font-size: inherit; // Inherit font size from parent
    display: flex; // Display as a flex container
    align-items: center; // Align content vertically in the center
    gap: .5rem; // Set gap between child elements
    cursor: pointer; // Change cursor to a pointer on hover
    transition: all .4s ease-in-out; // Apply a transition effect to all properties
`;

export default Button; // Export the Button component as the default export
