import './App.scss';
import {useWindowWidth} from '@react-hook/window-size/throttled'
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import Promo from "./components/Promo";

function App() {
    const windowWidth = useWindowWidth();
    return (
        <div className="App d-md-flex align-items-start">
            <Sidebar/>
            <div className="App_content">
                <Panel windowWidth={windowWidth} />
                <div className="App_content-grid">
                    <Promo />
                </div>
            </div>
        </div>
    );
}

export default App;
