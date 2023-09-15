import React, { useEffect } from 'react'; // Import React and useEffect
import styled from "styled-components"; // Import styled-components for styling
import { InnerLayout } from '../../styles/Layouts'; // Import a custom layout component
import { dollar } from "../../utils/Icons"; // Import a dollar icon
import Chart from '../Chart/Chart'; // Import the Chart component
import { useGlobalContext } from '../../context/globalContext'; // Import a custom context hook
import History from '../History/History'; // Import the History component

// Define a functional component called 'Dashboard'
function Dashboard() {
    const { totalIncome, totalExpense, totalBalance, getIncomes, getExpenses, incomes, expenses } = useGlobalContext(); // Access data and functions from a global context

    // Use useEffect to fetch income and expense data when the component mounts
    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
        {/* Container for the entire dashboard */}
        <InnerLayout>
            {/* Display a title for the dashboard */}
            <h1>All Transactions</h1>

            {/* Container for statistics and chart */}
            <div className='stats-con'>
                {/* Left side with the chart */}
                <div className='chart-con'>
                    <Chart /> {/* Render the Chart component */}
                    <div className='amount-con'>
                        {/* Container for displaying total income, expenses, and balance */}
                        <div className='income'>
                            <h2>Total Income</h2>
                            <p>
                                {dollar} {totalIncome()}
                            </p>
                        </div>
                        <div className='expense'>
                            <h2>Total Expense</h2>
                            <p>
                                {dollar} {totalExpense()}
                            </p>
                        </div>
                        <div className='balance'>
                            <h2>Total Balance</h2>
                            <p>
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side with history */}
                <div className='history-con'>
                    <History /> {/* Render the History component */}
                    <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                    {/* Display minimum and maximum salary values */}
                    <div className="salary-item">
                        <p>
                            ${Math.min(...incomes.map(item => item.amount))}
                        </p>
                        <p>
                            ${Math.max(...incomes.map(item => item.amount))}
                        </p>
                    </div>
                    <h2 className="salary-title">Min <span>Expense</span> Max</h2>
                    {/* Display minimum and maximum expense values */}
                    <div className="salary-item">
                        <p>
                            ${Math.min(...expenses.map(item => item.amount))}
                        </p>
                        <p>
                            ${Math.max(...expenses.map(item => item.amount))}
                        </p>
                    </div>
                </div>
            </div>
        </InnerLayout>
</DashboardStyled>

    );
}

// Define styled components for styling
const DashboardStyled = styled.div`
.stats-con{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con{
        grid-column: 1 / 4;
        height: 300px;
        .amount-con{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 2rem;
            .income, .expense{
                grid-column: span 2;
            }
            .income, .expense, .balance{
                background: #081b29;
                border-radius: 20px;
                padding: 1rem;
                p{
                    font-size: 3rem;
                    font-weight: 700;
                }
            }
            .balance{
                grid-column: 2 / 4;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    color: var(--color-green);
                    opacity: 0.6;
                    font-size: 3.5rem;
                }
            }
        }
    }
    .history-con{
        grid-column: 4 / -1;
        h2{
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .salary-title{
            font-size: 1.2rem;
            span{
                font-size: 1.8rem;
            }
        }
        .salary-item{
            background: #081b29;
            padding: 1rem;
            border-radius: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-weight: 600;
                font-size: 1.6rem;
            }
        }
    }
}
`;

export default Dashboard; // Export the 'Dashboard' component as the default export
