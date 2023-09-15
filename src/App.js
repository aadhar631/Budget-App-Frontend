// Import necessary components and dependencies
import React, { useMemo, useState } from 'react';
import styled from "styled-components";
import bg from "./img/bg.jpg";
import { MainLayout } from "./styles/Layouts";
import Orb from './Components/Orb/Orb'
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from './Components/Dashboard/Dashboard';
import Incomes from "./Components/Incomes/Incomes";
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

// Define the main App component
function App() {
    // Initialize state for the active menu item
    const [active, setActive] = React.useState(1);

    // Use the global context hook to access global data and functions
    const global = useGlobalContext();
    console.log(global);

    // Define a function to render the appropriate component based on the active menu item
    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Dashboard />;
            case 3:
                return <Incomes />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    }

    // Use the useMemo hook to memoize the Orb component
    const orbMemo = useMemo(() => {
        return <Orb />;
    }, [])

    // Render the main App component
    return (
        <AppStyled bg={bg} className="App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayData()}
                </main>
            </MainLayout>
        </AppStyled>
    );
}

// Styled component for the main App container
const AppStyled = styled.div`
    height: 100vh;
    background-color: #081b29;
    position: relative;
    color: #ededed;

    main {
        flex: 1;
        background: #112e42;
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

// Export the App component as the default export
export default App;
