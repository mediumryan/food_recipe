import React from 'react';
import { NavbarWrapper } from '../styled/Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const path = useLocation();

    return (
        <NavbarWrapper>
            <ul>
                <li>
                    <Link
                        to="/"
                        style={{
                            color: `${
                                path.pathname === '/'
                                    ? 'var(--accent-100)'
                                    : 'var(--black-100)'
                            }`,
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/recipe"
                        style={{
                            color: `${
                                path.pathname === '/recipe'
                                    ? 'var(--accent-100)'
                                    : 'var(--black-100)'
                            }`,
                        }}
                    >
                        Recipe
                    </Link>
                </li>
                <li>
                    <Link
                        to="/food-info"
                        style={{
                            color: `${
                                path.pathname === '/food-info'
                                    ? 'var(--accent-100)'
                                    : 'var(--black-100)'
                            }`,
                        }}
                    >
                        Food Info
                    </Link>
                </li>
                <li>
                    <Link
                        to="/nutrition-analysis"
                        style={{
                            color: `${
                                path.pathname === '/nutrition-analysis'
                                    ? 'var(--accent-100)'
                                    : 'var(--black-100)'
                            }`,
                        }}
                    >
                        Nutrition Analysis
                    </Link>
                </li>
            </ul>
        </NavbarWrapper>
    );
}
