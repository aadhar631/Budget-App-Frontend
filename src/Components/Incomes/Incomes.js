// Importing necessary dependencies.
import React, { useEffect } from 'react';
import styled from "styled-components";
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

// Define the 'Incomes' functional component.
function Incomes() {
    // Destructuring values and functions from the global context using the custom hook 'useGlobalContext'.
    const  {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    // Use the 'useEffect' hook to fetch incomes when the component mounts.
    useEffect(() => {
        getIncomes();
    }, [])

    // Return the JSX (React elements) for rendering.
    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>

                {/* Display the total income. */}
                <h2 className="total-income">Total Income : <span>${totalIncome()}</span></h2>

                <div className="income-content">
                    <div className="form-container">
                        {/* Render the 'Form' component for adding income. */}
                        <Form />
                    </div>
                    <div className="incomes">
                        {/* Map through the 'incomes' array and render 'IncomeItem' components for each income. */}
                        {incomes.map((income) => {
                            const {_id, title, amount, date, type, category, description} = income;
                            return <IncomeItem 
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount}
                                date={date}
                                type={type}  
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

// Styled components for the 'Incomes' component.
const IncomesStyled = styled.div`
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

export default Incomes;
