import './styles.scss';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Content from '../Content';

export default function Layout() {
    return(
        <div className="layout">
            <Sidebar />
            <Header />
            <Content />
        </div>
    )
};