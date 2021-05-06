import './styles.scss';

import {useState} from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Content from '../Content';

export default function Layout() {
    const [darkTheme, setDarkTheme] = useState(false);

    function changeTheme() {
        setDarkTheme(!darkTheme);
    };

    return(
        <div className="layout">
            <Sidebar 
                darkTheme={darkTheme}
            />
            <Header
                changeTheme={changeTheme}
                darkTheme={darkTheme}
            />
            <Content
                darkTheme={darkTheme}
            />
        </div>
    )
};