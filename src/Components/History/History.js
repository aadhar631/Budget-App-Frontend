import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling
import { useGlobalContext } from '../../context/globalContext'; // Import custom global context hook

function History() {
    const { transactionHistory } = useGlobalContext(); // Destructure 'transactionHistory' from the global context

    const [...history] = transactionHistory(); // Use the 'transactionHistory' function to get the transaction history data

    return (
        <HistoryStyled>
            <h2>Recent History</h2> {/* Display a heading */}
            {history.map((item) => { // Map through the 'history' array
                const { _id, title, amount, type } = item; // Destructure properties from 'item' object
                return (
                    <div key={_id} className='history-item'> {/* Render a history item div */}
                        <p style={{ // Apply inline styles for text color based on 'type'
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title} {/* Display the transaction title */}
                        </p>

                        <p style={{ // Apply inline styles for text color based on 'type'
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}` // Display transaction amount with appropriate sign
                            }
                        </p>
                    </div>
                );
            })}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item {
        background: #081b29; // Set background color for history item
        padding: 1rem; // Apply padding
        border-radius: 20px; // Apply border-radius
        display: flex; // Use flex display
        justify-content: space-between; // Space items evenly horizontally
        align-items: center; // Center items vertically
    }
`;

export default History; // Export the History component
