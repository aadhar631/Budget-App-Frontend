import React, { useState } from 'react'; // Import React and useState hook for managing component state
import styled from 'styled-components'; // Import styled-components for styling
import DatePicker from 'react-datepicker'; // Import date picker component
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for date picker
import { useGlobalContext } from '../../context/globalContext'; // Import custom global context hook
import Button from '../Button/Button'; // Import Button component
import { plus } from '../../utils/Icons'; // Import an icon from the Icons module

function ExpenseForm() {
    const { addExpense, error, setError } = useGlobalContext(); // Destructure functions and states from global context

    const [inputState, setInputState] = useState({ // Define state for form inputs using useState hook
        title: '',        // Initialize 'title' with an empty string
        amount: '',       // Initialize 'amount' with an empty string
        date: '',         // Initialize 'date' with an empty string
        category: '',     // Initialize 'category' with an empty string
        description: '',  // Initialize 'description' with an empty string
    });

    const { title, amount, date, category, description } = inputState; // Destructure form input values from the inputState object

    // Handle input changes for form fields
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value }); // Update the corresponding field in the inputState object
        setError(''); // Clear any previous error messages
    };

    // Handle form submission
    const handleSubmit = e => {
        e.preventDefault(); // Prevent the default form submission behavior
        addExpense(inputState); // Call the addExpense function from the global context and pass in the inputState
        setInputState({ // Reset the inputState to clear the form fields
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}> {/* Render a form with a submit event handler */}
            {error && <p className='error'>{error}</p>} {/* Render an error message if 'error' is truthy */}
            <div className='input-control'> {/* Render a container div for form inputs */}
                <input
                    type='text'
                    value={title}
                    name={'title'}
                    placeholder='Expense Title'
                    onChange={handleInput('title')} // Attach an onChange event handler to update 'title' input
                />
            </div>
            <div className='input-control'> {/* Render a container div for form inputs */}
                <input
                    type='text'
                    value={amount}
                    name={'amount'}
                    placeholder='Expense amount'
                    onChange={handleInput('amount')} // Attach an onChange event handler to update 'amount' input
                />
            </div>
            <div className='input-control'> {/* Render a container div for form inputs */}
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat='dd/MM/yyyy'
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date }); // Update the 'date' field in the inputState when a date is selected
                    }}
                />
            </div>
            <div className='selects input-control'> {/* Render a container div for form inputs */}
                <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                    <option value='' disabled>Select Option</option>
                    <option value='education'>Education</option>
                    <option value='groceries'>Groceries</option>
                    <option value='health'>Health</option>
                    <option value='subscriptions'>Subscriptions</option>
                    <option value='takeaways'>Takeaways</option>
                    <option value='clothing'>Clothing</option>
                    <option value='travelling'>Travelling</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div className='input-control'> {/* Render a container div for form inputs */}
                <textarea name='description' value={description} placeholder='Add A Reference' id='description' cols='30' rows='4' onChange={handleInput('description')}></textarea>
            </div>
            <div className='submit-btn'> {/* Render a container div for the submit button */}
                <Button
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'} // Set the background color
                    color={'#fff'} // Set the text color
                />
            </div>
        </ExpenseFormStyled>
    );
}

const ExpenseFormStyled = styled.form` // Define the styles for the ExpenseForm component using styled-components
    /* Styles for the ExpenseForm component */
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: #ededed;

        &::placeholder {
            color: rgba(237, 237, 237, 0.7);
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            color: rgba(237, 237, 237, 0.7);

            &:focus, &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

            &:hover {
                background: var(--color-green) !important;
            }
        }
    }
`;

export default ExpenseForm; // Export the ExpenseForm component
