import './styles.scss';

import { LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';

import data from '../../data/data.js';

import forzaImage from '../../img/forza.png';
import cod from '../../img/cod.jpg';
import fortnite from '../../img/fortnite.jpg';
import forza from '../../img/forza.jpg';
import destiny from '../../img/destiny.jpg';
import cyberpunk from '../../img/cyberpunk.jpg';

export default function Content({ darkTheme }) {
    return(
        <main className={`content ${darkTheme && 'dark'}`}>
            <div className="top">
                <div className="news">
                    <h3 className={darkTheme && 'dark'}>News</h3>
                    <div>
                        <h3>Xbox Series X</h3>
                        <h4>Everything you need to know</h4>
                        <p>Xbox has built the self-proclaimed "most powerfull games console" on the planet.</p>
                        <button>Learn more</button>
                    </div>
                </div>

                <div className="deals">
                    <h3 className={darkTheme && 'dark'}>Deals</h3>
                    <div>
                        <img src={forzaImage} alt="Deals with Gold"/>
                        <h4>Deals with Gold</h4>
                        <p>Save up to 50-75% in the Xbox Store with exclusive discounts on games and add-ons.</p>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="mostPlayed">
                    <h3 className={darkTheme && 'dark'}>Most played games</h3>
                    <div className={`boxGames ${darkTheme && 'dark'}`}>
                        <div>
                            <img src={cod} alt="Call of Duty" />
                            <p className={darkTheme && 'dark'}>Warzone</p>
                        </div>
                        <div>
                            <img src={fortnite} alt="Fortnite" />
                            <p className={darkTheme && 'dark'}>Fortnite</p>
                        </div>
                        <div>
                            <img src={forza} alt="Forza" />
                            <p className={darkTheme && 'dark'}>Forza Horizon 4</p>
                        </div>
                        <div>
                            <img src={destiny} alt="Destiny" />
                            <p className={darkTheme && 'dark'}>Destiny 2</p>
                        </div>
                        <div>
                            <img src={cyberpunk} alt="Cyberpunk" />
                            <p className={darkTheme && 'dark'}>Cyberpunk 2077</p>
                        </div>
                    </div>
                </div>

                <div className="chart">
                    <h3 className={darkTheme && 'dark'}>Weekly Statistics</h3>
                    <div className={`boxChart ${darkTheme && 'dark'}`}>
                        
                    </div>
                </div>
            </div>
        </main>
    )
};