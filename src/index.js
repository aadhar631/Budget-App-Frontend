// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App';

// Import global styles
import { GlobalStyle } from './styles/GlobalStyle';

// Import the GlobalProvider component from context
import { GlobalProvider } from './context/globalContext';

// Create a ReactDOM root to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within a StrictMode component
root.render(
    <React.StrictMode>
        {/* Apply global styles */}
        <GlobalStyle />
        {/* Wrap the entire app in the GlobalProvider to provide global state */}
        <GlobalProvider>
            {/* Render the main App component */}
            <App />
        </GlobalProvider>
    </React.StrictMode>
);
