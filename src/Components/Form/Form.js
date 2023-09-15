import React, { useState } from 'react'; // Import React and useState hook
import styled from 'styled-components'; // Import styled-components for styling
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { useGlobalContext } from '../../context/globalContext'; // Import custom global context hook
import Button from '../Button/Button'; // Import Button component
import { plus } from '../../utils/Icons'; // Import plus icon

function Form() {
    const { addIncome, error, setError } = useGlobalContext(); // Destructure functions and states from global context using the custom hook

    const [inputState, setInputState] = useState({ // Initialize state for form input fields
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState; // Destructure form input field values

    const handleInput = name => e => { // Function to handle input changes
        setInputState({ ...inputState, [name]: e.target.value }); // Update the corresponding input field value
        setError(''); // Clear any existing error
    };

    const handleSubmit = e => { // Function to handle form submission
        e.preventDefault(); // Prevent the default form submission behavior
        addIncome(inputState); // Call the 'addIncome' function with the form data
        setInputState({ // Clear the form input fields after submission
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>} {/* Display an error message if 'error' state is not empty */}
            <div className='input-control'>
                <input
                    type='text'
                    value={title}
                    name={'title'}
                    placeholder='Income Title'
                    onChange={handleInput('title')}
                />
            </div>
            <div className='input-control'>
                <input
                    type='text'
                    value={amount}
                    name={'amount'}
                    placeholder='Income amount'
                    onChange={handleInput('amount')}
                />
            </div>
            <div className='input-control'>
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat='dd/MM/yyyy'
                    onChange={date => {
                        setInputState({ ...inputState, date: date });
                    }}
                />
            </div>
            <div className='selects input-control'>
                <select
                    required
                    value={category}
                    name='category'
                    id='category'
                    onChange={handleInput('category')}
                >
                    <option value='' disabled>
                        Select Option
                    </option>
                    <option value='salary'>Salary</option>
                    <option value='freelancing'>Freelancing</option>
                    <option value='investments'>Investments</option>
                    <option value='stocks'>Stocks</option>
                    <option value='bitcoin'>Bitcoin</option>
                    <option value='bank'>Bank Transfer</option>
                    <option value='youtube'>Youtube</option>
                    <option value='other'>Other</option>
                </select>
            </div>

            <div className='input-control'>
                <textarea
                    name='description'
                    value={description}
                    placeholder='Add A Reference'
                    id='description'
                    cols='30'
                    rows='4'
                    onChange={handleInput('description')}
                ></textarea>
            </div>

            <div className='submit-btn'>
                <Button
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form` // Define styles for the FormStyled component using styled-components
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input, textarea, select{
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
        &::placeholder{
            color: rgba(237, 237, 237, 0.7);
        }
    }

    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(237, 237, 237, 0.7);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form; // Export the Form component
