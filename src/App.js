import './App.scss';
import {useWindowWidth} from '@react-hook/window-size/throttled'
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import Promo from "./components/Promo";
import Profit from "./components/Profit";
import Transactions from "./components/Transactions";

function App() {
    const windowWidth = useWindowWidth();
    return (
        <div className="App d-md-flex align-items-start">
            <Sidebar/>
            <div className="App_content">
                <Panel windowWidth={windowWidth} />
                <div className="App_content-grid d-grid">
                    <Promo />
                    <Transactions />
                    <Profit />
                </div>
            </div>
        </div>
    );
}

export default App;
