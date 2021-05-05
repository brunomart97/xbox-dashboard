import './styles.scss';

import { FiSearch } from 'react-icons/fi';
import { BsBell, BsGear } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

export default function Header() {
    return(
        <header className="header">
            <h1>Dashboard</h1>

            <div className="rightSide">
                <div className="searchBox">
                    <input
                        type="text"
                        name="seach"
                        placeholder="Search"
                    />
                    <FiSearch />
                </div>
                <BsBell />
                <BsGear />
                <div className="login">
                    <BiUser />
                </div>
            </div>
        </header>
    )
};