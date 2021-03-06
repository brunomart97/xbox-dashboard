import './styles.scss';

import { SiXbox } from 'react-icons/si';
import { RiHome8Line, RiStore2Line, RiUserVoiceLine } from 'react-icons/ri';
import { BiJoystick, BiMessageSquareDetail } from 'react-icons/bi';

import cardFooter from '../../img/cardFooter.svg'

export default function Sidebar({ darkTheme }) {
    return(
        <div className={`backSidebar ${darkTheme && 'dark'}`}>
            <div className={`sidebar ${darkTheme && 'dark'}`}>
                <div className="top">
                    <div className={`logo ${darkTheme && 'dark'}`}>
                        <SiXbox />
                    </div>

                    <div className="menu">
                        <button className="active"><RiHome8Line /> Dashboard</button>
                        <button><BiJoystick /> Games</button>
                        <button><RiStore2Line /> Store</button>
                        <button><BiMessageSquareDetail /> Messages</button>
                        <button><RiUserVoiceLine /> Friends</button>
                    </div>
                </div>

                <div className={`cardFooter ${darkTheme && 'dark'}`}>
                    <h3>Cyber Week Sale</h3>
                    <p>Up to 55% off select digital games</p>
                    <img src={cardFooter} alt="Cyber Week Sale"/>
                    <button>View</button>
                </div>
            </div>
        </div>
    )
};