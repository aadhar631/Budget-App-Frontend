import React from 'react'; 
import { styled } from 'styled-components'; 
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons'; 
import Button from '../Button/Button'; 
import { dateFormat } from '../../utils/dateFormat';

// Defining a functional component named 'IncomeItem' which takes multiple props.
function IncomeItem({
    id,         // Unique identifier for the income item.
    title,      // Title of the income item.
    amount,     // Amount of money associated with the income.
    date,       // Date on which the income was received.
    category,   // Category of the income item (e.g., salary, freelancing, etc.).
    description, // Description or additional notes for the income.
    deleteItem, // Function to delete this income item.
    indicatorColor, // Color indicator based on the type of income.
    type        // Type of the income item (e.g., income or expense).
}) {
    // Function to determine the category icon for income.
    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money; // Icon representing salary.
            case 'freelancing':
                return freelance; // Icon representing freelancing income.
            case 'investments':
                return stocks; // Icon representing income from investments.
            case 'stocks':
                return users; // Icon representing income from stocks.
            case 'bitcoin':
                return bitcoin; // Icon representing income from Bitcoin.
            case 'bank':
                return card; // Icon representing income from bank transfers.
            case 'youtube':
                return yt; // Icon representing income from YouTube.
            case 'other':
                return piggy; // Icon representing other sources of income.
            default:
                return ''
        }
    }

    // Function to determine the category icon for expenses.
    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book; // Icon representing education expenses.
            case 'groceries':
                return food; // Icon representing expenses on groceries.
            case 'health':
                return medical; // Icon representing health-related expenses.
            case 'subscriptions':
                return tv; // Icon representing subscription expenses.
            case 'takeaways':
                return takeaway; // Icon representing expenses on takeaways.
            case 'clothing':
                return clothing; // Icon representing expenses on clothing.
            case 'travelling':
                return freelance; // Icon representing travel expenses.
            case 'other':
                return circle; // Icon representing other expenses.
            default:
                return ''
        }
    }

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()} {/* Render the appropriate category icon based on income or expense type. */}
            </div>
            <div className="content">
                <h5>{title}</h5> {/* Display the title of the income item. */}
                <div className='inner-content'>
                    <div className='text'>
                        <p>{dollar} {amount}</p> {/* Display the amount with dollar sign. */}
                        <p>{calender} {dateFormat(date)}</p> {/* Display the formatted date. */}
                        <p>
                            {comment}
                            {description} {/* Display any additional notes or comments. */}
                        </p>
                    </div>

                    <div className='btn-con'>
                        {/* Render a delete button with specific styling and functionality. */}
                        <Button 
                            icon={trash} // Icon representing a trash bin (for deleting).
                            bPad={'1rem'} // Button padding.
                            bRad={'50%'} // Button border-radius.
                            bg={'#00abf0'} // Button background color.
                            color={'#112e42'} // Button text color.
                            iColor={'#fff'} // Icon color.
                            hColor={'var(--color-green)'} // Hover color.
                            onClick={() => deleteItem(id)} // Function to handle delete action.
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}


const IncomeItemStyled = styled.div`
    background: #081b29;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #00abf0;

    .icon {
        width: 70px;
        height: 70px;
        border-radius: 20px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #112e42;
        i {
            font-size: 2rem;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5 {
            font-size: 1.2rem;
            padding-left: 2rem;
            position: relative;
            color: #ededed;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator}; // Apply the specified indicator color
            }
        }
        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #ededed;
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem; // Export the IncomeItem component
