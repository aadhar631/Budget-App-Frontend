import React, { useEffect } from 'react'; // Import React and useEffect hook
import styled from 'styled-components'; // Import styled-components for styling
import { InnerLayout } from '../../styles/Layouts'; // Import InnerLayout component
import { useGlobalContext } from '../../context/globalContext'; // Import custom global context hook
import ExpenseForm from '../Expenses/ExpenseForm'; // Import ExpenseForm component
import IncomeItem from '../IncomeItem/IncomeItem'; // Import IncomeItem component

function Expenses() {
    const  { addIncome, expenses, getExpenses, deleteExpense, totalExpense } = useGlobalContext(); // Destructure functions and states from global context using the custom hook

    useEffect(() => {
        getExpenses(); // Call the getExpenses function when the component mounts
    }, []);

    return (
        <ExpenseStyled>
            <InnerLayout> {/* Render the InnerLayout component */}
                <h1>Expenses</h1> {/* Render a heading element */}
                
                <h2 className="total-income">Total Expense : <span>${totalExpense()}</span></h2> {/* Render total expense amount */}
                
                <div className="income-content"> {/* Render a container div for income content */}
                    <div className="form-container"> {/* Render a container div for the ExpenseForm */}
                        <ExpenseForm /> {/* Render the ExpenseForm component */}
                    </div>
                    <div className="incomes"> {/* Render a container div for income items */}
                        {expenses.map((income) => { // Map through the 'expenses' array and render IncomeItem components
                            const {_id, title, amount, date, type, category, description} = income; // Destructure properties from the 'income' object
                            return <IncomeItem  // Render an IncomeItem component for each 'income' object
                                key={_id} // Set a unique 'key' prop for each item
                                id={_id} // Pass 'id' as a prop to the IncomeItem component
                                title={title} // Pass 'title' as a prop to the IncomeItem component
                                description={description} // Pass 'description' as a prop to the IncomeItem component
                                amount={amount} // Pass 'amount' as a prop to the IncomeItem component
                                date={date} // Pass 'date' as a prop to the IncomeItem component
                                type={type} // Pass 'type' as a prop to the IncomeItem component
                                category={category} // Pass 'category' as a prop to the IncomeItem component
                                indicatorColor="var(--color-green)" // Pass indicator color as a prop to the IncomeItem component
                                deleteItem={deleteExpense} // Pass 'deleteExpense' function as a prop to the IncomeItem component
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    );
}

const ExpenseStyled = styled.div` // Define styles for the ExpenseStyled component using styled-components
    display: flex;
    overflow: auto;

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #081b29;
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 1.8rem;
        gap: .5rem;
        span{
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .income-content {
        display: flex;
        gap: 2rem;

        .incomes {
            flex: 1;
        }
    }
`;

export default Expenses; // Export the Expenses component
