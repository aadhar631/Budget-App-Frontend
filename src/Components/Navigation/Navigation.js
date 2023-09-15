// Import necessary dependencies.
import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.jpg'; // Importing an avatar image.
import { signout } from '../../utils/Icons'; // Importing a signout icon.
import { menuItems } from '../../utils/menuItems'; // Importing a list of menu items.

// Define the 'Navigation' functional component.
function Navigation({ active, setActive }) {
    return (
        <NavStyled>
            {/* User information section */}
            <div className="user-con">
                <img src={avatar} alt="" /> {/* Display user avatar */}
                <div className="text">
                    <h2>Aadhar</h2> {/* Display user name */}
                    <p>Your Money</p> {/* Display user role or description */}
                </div>
            </div>

            {/* Menu items section */}
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon} {/* Display menu item icon */}
                            <span>{item.title}</span> {/* Display menu item title */}
                        </li>
                    );
                })}
            </ul>

            {/* Bottom navigation section */}
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out {/* Display the signout icon and text */}
                </li>
            </div>
        </NavStyled>
    );
}

// Styled components for the 'Navigation' component.
const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 260px;
    height: 100%;
    background: #112e42;
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    /* Styling for user information section */
    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 1px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.6);
        }

        h2 {
            color: #00abf0;
        }

        p {
            color: rgba(0, 171, 240, 0.6);
        }
    }

    /* Styling for the menu items section */
    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-left: 1rem;
            position: relative;

            i{
                color: rgba(0, 171, 240, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    /* Styling for the active menu item */
    .active {
        color: rgba(0, 171, 240, 1) !important;

        i {
            color: rgba(0, 171, 240, 1) !important;
        }

        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: rgba(0, 171, 240, 1);
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation;
