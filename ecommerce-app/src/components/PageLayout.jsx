import React from 'react'
import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout = ({ header, footer }) => {
    const {logout}=useContext(AuthContext);

    return (
        <div>
            <header><div>
                <h1> welcome Dashboard</h1>
                <button onClick={logout}>Logout</button>
                </div></header>
             <div className="main-section">
        <Outlet />
      </div>
            <footer>{footer}</footer>
        </div>
    )
}

export default PageLayout