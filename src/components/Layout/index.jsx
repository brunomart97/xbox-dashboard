import './styles.scss';

import Sidebar from '../Sidebar';
import Header from '../Header';

export default function Layout() {
    return(
        <div className="layout">
            <Sidebar />
            <Header />
        </div>
    )
};