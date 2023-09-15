// Import necessary dependencies.
import React from 'react';
import styled, { keyframes } from "styled-components";
import { useWindowSize } from '../../utils/useWindowSize';

// Create the Orb component.
function Orb() {
    // Get the width and height of the window using a custom hook.
    const { width, height } = useWindowSize();

    // Define a keyframe animation called 'moveOrb' to animate the orb.
    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(${width}px, ${height / 2}px);
        }

        100% {
            transform: translate(0, 0);
        }
    `;

    // Styled component for the orb with animation and styling.
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        margin-left: -37vh;
        margin-top: -37vh;
        border-radius: 50%;
        background: linear-gradient(180deg, hsl(210, 100%, 60%) 0%, hsl(210, 100%, 20%) 100%);
        filter: blur(100px);
        animation: ${moveOrb} 15s alternate linear infinite; // Apply the 'moveOrb' animation.
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb;
