import './styles.scss';

import forzaImage from '../../img/forza.png';

export default function Content() {
    return(
        <main className="content">
            <div className="top">
                <div className="news">
                    <h3>News</h3>
                    <div>
                        <h3>Xbox Series X</h3>
                        <h4>Everything you need to know</h4>
                        <p>Xbox has built the self-proclaimed "most powerfull games console" on the planet.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="deals">
                    <h3>Deals</h3>
                    <div>
                        <img src={forzaImage} alt="Deals with Gold"/>
                        <h4>Deals with Gold</h4>
                        <p>Save up to 50-75% in the Xbox Store with exclusive discounts on games and add-ons.</p>
                    </div>
                </div>
            </div>

            <div className="bottom">

            </div>
        </main>
    )
};