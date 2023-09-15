import React from 'react'; // Import the React library
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'; // Import Chart.js components

import { Line } from 'react-chartjs-2'; // Import the Line component from react-chartjs-2
import styled from 'styled-components'; // Import styled-components for styling
import { useGlobalContext } from '../../context/globalContext'; // Import a custom context hook
import { dateFormat } from '../../utils/dateFormat'; // Import a date formatting utility function

// Register Chart.js components for use
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

// Define a functional component called 'Chart'
function Chart() {
    const { incomes, expenses } = useGlobalContext(); // Access data from a global context

    // Define data for the Line chart
    const data = {
        labels: incomes.map((income) => {
            const { date } = income;
            return dateFormat(date); // Format income date using 'dateFormat' function
        }),
        datasets: [
            {
                label: 'Income',
                data: [...incomes.map((income) => income.amount)],
                backgroundColor: 'green', // Set the background color for the income data
                tension: 0.3, // Set the line tension
            },
            {
                label: 'Expenses',
                data: [...expenses.map((expense) => expense.amount)],
                backgroundColor: 'red', // Set the background color for the expense data
                tension: 0.3, // Set the line tension
            },
        ],
    };

    return (
        <ChartStyled>
            {/* Render the Line chart with the provided data */}
            <Line data={data} />
        </ChartStyled>
    );
}

// Create a styled component for the Chart container
const ChartStyled = styled.div`
    margin-top: 10px;
    background: #081b29; // Set the background color
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart; // Export the 'Chart' component as the default export
