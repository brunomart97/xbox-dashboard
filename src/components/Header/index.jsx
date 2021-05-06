import './styles.scss';

import { FiSearch } from 'react-icons/fi';
import { BsBell, BsGear } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';

export default function Header({ changeTheme, darkTheme }) {
    return(
        <header className={`header ${darkTheme && 'dark'}`}>
            <h1 className={darkTheme && 'dark'}>Dashboard</h1>

            <div className="rightSide">
                <button
                    className={`darkLightBtn ${darkTheme && 'dark'}`}
                    onClick={changeTheme}
                >
                    {darkTheme ? <RiSunFill /> : <FaMoon />}
                </button>

                <div className={`searchBox ${darkTheme && 'dark'}`}>
                    <input
                        className={darkTheme && 'dark'}
                        type="text"
                        name="seach"
                        placeholder="Search"
                    />
                    <FiSearch />
                </div>

                <BsBell />

                <BsGear />

                <div className={`login ${darkTheme && 'dark'}`}>
                    <BiUser />
                </div>
            </div>
        </header>
    )
};